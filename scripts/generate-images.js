import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import https from 'https';

// Load environment variables from .env.local if present
const envPath = path.resolve('.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const firstEq = trimmed.indexOf('=');
    if (firstEq === -1) return;
    const key = trimmed.substring(0, firstEq).trim();
    let val = trimmed.substring(firstEq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.substring(1, val.length - 1);
    }
    process.env[key] = val;
  });
}

const API_KEY = process.env.GEMINI_API_KEY;

const GENERATED_DIR = path.resolve('public/images/generated');
const CACHE_FILE = path.join(GENERATED_DIR, '.cache.json');

// Ensure directories exist
const folders = [
  'hero',
  'journey',
  'products',
  'about',
  'blog',
  'lab',
  'community',
  'sustainability',
  'testimonials'
];

function ensureDirectories() {
  if (!fs.existsSync(GENERATED_DIR)) {
    fs.mkdirSync(GENERATED_DIR, { recursive: true });
  }
  folders.forEach(f => {
    const dir = path.join(GENERATED_DIR, f);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Load or initialize cache
function loadCache() {
  if (fs.existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    } catch (e) {
      console.warn("Could not parse cache file, resetting cache.");
    }
  }
  return {};
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
}

// Helper to make POST request
function postJson(url, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(JSON.stringify(body));
    req.end();
  });
}

// Download file helper
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download file: Status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

// Call Gemini API with automatic retry
async function generateGeminiImage(prompt, model = "models/nano-banana-pro-preview", retries = 3) {
  const url = `https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${API_KEY}`;
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ["IMAGE"],
      imageConfig: {
        imageSize: "1K",
        aspectRatio: "1:1"
      }
    }
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`[Gemini] Attempt ${attempt} to generate image for prompt: "${prompt.substring(0, 50)}..."`);
      const response = await postJson(url, body);
      if (response.statusCode === 200) {
        const json = JSON.parse(response.body);
        const parts = json.candidates[0].content.parts;
        const imgPart = parts.find(p => p.inlineData);
        if (imgPart && imgPart.inlineData && imgPart.inlineData.data) {
          return Buffer.from(imgPart.inlineData.data, 'base64');
        }
      }
      console.warn(`[Gemini] Attempt ${attempt} failed with status ${response.statusCode}: ${response.body.substring(0, 150)}`);
    } catch (e) {
      console.warn(`[Gemini] Attempt ${attempt} encountered error: ${e.message}`);
    }
    if (attempt < retries) {
      await new Promise(r => setTimeout(r, 2000)); // wait before retry
    }
  }
  throw new Error("Gemini Image generation failed after all attempts.");
}

// List of target image jobs
const imageJobs = [
  {
    key: "ISO 22000",
    searchString: "https://placehold.co/80x80/0b6b3a/fff?text=ISO+22000",
    destFile: "about/iso-22000.webp",
    prompt: "An elegant, premium golden circular ISO 22000 quality certification seal, luxury gold texture, high-end editorial graphic, isolated on dark forest background, photorealistic.",
    fallbackUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&h=150&q=80&fm=webp"
  },
  {
    key: "FSSAI",
    searchString: "https://placehold.co/80x80/0b6b3a/fff?text=FSSAI",
    destFile: "about/fssai.webp",
    prompt: "A premium circular gold food standard certification seal showing FSSAI text, clean lines, luxury corporate logo design, photorealistic, isolated on dark forest green background.",
    fallbackUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=150&h=150&q=80&fm=webp"
  },
  {
    key: "ORGANIC",
    searchString: "https://placehold.co/80x80/0b6b3a/fff?text=ORGANIC",
    destFile: "about/organic.webp",
    prompt: "A beautiful circular 100% Organic certified green leaf badge, gold textured border, luxury organic brand seal, minimal design, premium visual identity, photorealistic.",
    fallbackUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=150&h=150&q=80&fm=webp"
  },
  {
    key: "Ganesh Patil",
    searchString: "https://placehold.co/100x100/0b6b3a/fff?text=GP",
    destFile: "journey/ganesh-patil.webp",
    prompt: "A friendly headshot profile portrait of an Indian organic farmer named Ganesh Patil, warm golden hour sun, lush green pasture field background, editorial photography, highly detailed, realistic.",
    fallbackUrl: "https://images.unsplash.com/photo-1566385217134-8c886ff0b5b1?auto=format&fit=crop&w=200&h=200&q=80&fm=webp"
  },
  {
    key: "Sukhdev Singh",
    searchString: "https://placehold.co/100x100/0b6b3a/fff?text=SP",
    destFile: "journey/sukhdev-singh.webp",
    prompt: "A warm profile portrait headshot of senior Indian farmer Sukhdev Singh smiling, realistic, warm natural morning sunlight, rustic farm background, editorial photography.",
    fallbackUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80&fm=webp"
  },
  {
    key: "Ananya Sharma",
    searchString: "https://placehold.co/50x50/e0e0e0/555?text=A",
    destFile: "testimonials/ananya-sharma.webp",
    prompt: "A professional headshot portrait of a happy smiling Indian parent and nutritionist woman named Ananya Sharma, warm natural indoor lighting, realistic, high detailed portrait.",
    fallbackUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80&fm=webp"
  },
  {
    key: "Rajesh Kapoor",
    searchString: "https://placehold.co/50x50/e0e0e0/555?text=R",
    destFile: "testimonials/rajesh-kapoor.webp",
    prompt: "A professional profile headshot of a smiling Indian home chef named Rajesh Kapoor, realistic portrait, soft kitchen background, natural warm light.",
    fallbackUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=100&h=100&q=80&fm=webp"
  },
  {
    key: "Meera Sen",
    searchString: "https://placehold.co/50x50/e0e0e0/555?text=M",
    destFile: "testimonials/meera-sen.webp",
    prompt: "A professional corporate headshot of a smiling Indian tech professional woman named Meera Sen, clean modern background, realistic portrait, soft natural lighting.",
    fallbackUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80&fm=webp"
  }
];

async function run() {
  console.log("=== Hirav Farms Image Generation System ===");
  
  ensureDirectories();
  const cache = loadCache();
  
  if (!API_KEY) {
    console.warn("[Warning] No GEMINI_API_KEY found in environment or .env.local. Falling back directly to premium optimized stock WebP downloads.");
  }

  for (const job of imageJobs) {
    const destPath = path.join(GENERATED_DIR, job.destFile);
    const promptHash = crypto.createHash('sha256').update(job.prompt).digest('hex');

    console.log(`\nProcessing job: ${job.key} (${job.destFile})`);
    
    // Check Cache / Existence
    if (fs.existsSync(destPath) && cache[job.destFile] === promptHash) {
      console.log(`[Cache Hit] Identical image already exists at ${job.destFile}. Skipping.`);
      continue;
    }

    let imageBuffer = null;
    
    if (API_KEY) {
      try {
        // Try Pro model first
        imageBuffer = await generateGeminiImage(job.prompt, "models/nano-banana-pro-preview");
      } catch (err) {
        console.warn(`[Failed] Pro model failed: ${err.message}. Trying Flash model...`);
        try {
          imageBuffer = await generateGeminiImage(job.prompt, "models/gemini-3.1-flash-image");
        } catch (err2) {
          console.warn(`[Failed] Flash model failed: ${err2.message}. Falling back to premium stock URL.`);
        }
      }
    }

    if (imageBuffer) {
      fs.writeFileSync(destPath, imageBuffer);
      console.log(`[Success] Generated & saved to ${job.destFile} via Gemini.`);
    } else {
      // Fallback
      console.log(`[Fallback] Downloading premium WebP placeholder from: ${job.fallbackUrl}`);
      try {
        await downloadFile(job.fallbackUrl, destPath);
        console.log(`[Success] Downloaded and saved fallback to ${job.destFile}`);
      } catch (e) {
        console.error(`[Error] Fallback download failed for ${job.key}:`, e.message);
      }
    }

    // Register in cache
    cache[job.destFile] = promptHash;
    saveCache(cache);
  }

  // Integration Step: Scan and replace placehold.co references in the website pages
  console.log("\n=== Integrating Generated Images into Source Files ===");
  
  const pagesDir = path.resolve('src/pages');
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.js'));
    files.forEach(file => {
      const filePath = path.join(pagesDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      imageJobs.forEach(job => {
        if (content.includes(job.searchString)) {
          // Replace it with the relative path inside Vite (since public maps to root, "/images/generated/...")
          const relativePath = `/images/generated/${job.destFile}`;
          content = content.split(job.searchString).join(relativePath);
          modified = true;
          console.log(`[Replace] In ${file}: Replaced placeholder with ${relativePath}`);
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
      }
    });
  }

  console.log("\n=== Image Generation and Integration Complete ===");
}

run().catch(console.error);
