const fs = require('fs');
const path = require('path');
const envPath = path.resolve(__dirname, '.env');
console.log("Reading:", envPath);
try {
    const data = fs.readFileSync(envPath, 'utf8');
    console.log("Content length:", data.length);
    console.log("First 20 chars:", data.substring(0, 20));
} catch (err) {
    console.error("FS Error:", err.message);
}
