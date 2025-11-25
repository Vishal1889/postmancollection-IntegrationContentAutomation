// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const ENABLE_LOGGING = true; 
const userProvidedPath = process.argv[2]; 
const outputDir = userProvidedPath
    ? path.resolve(userProvidedPath)
    : path.join(__dirname, 'downloads');

// Middleware to handle plain text (Base64 or CSV)
app.use(express.text({ limit: '100mb' }));

// --- 1. THIS IS THE MISSING ROUTE ---
// Postman API 1 and your browser will call this to see if the server is running.
app.get('/', (req, res) => {
    if (ENABLE_LOGGING) {
        console.log("Health check ping received.");
    }
    res.status(200).send('Server is running and ready to receive files.');
});

// --- 2. The Save File Endpoint ---
app.post('/save-file', (req, res) => {
    const fileName = req.header('X-File-Name');
    // This header will be 'binary' for zips, 'text' for CSVs
    const fileType = req.header('X-File-Type') || 'binary'; 
    
    if (!fileName) {
        return res.status(400).send('Error: X-File-Name header is required.');
    }

    const requestBody = req.body;
    const filePath = path.join(outputDir, fileName);

    if (ENABLE_LOGGING) {
        console.log(`Received request for ${fileName} (Type: ${fileType})`);
    }

    try {
        let fileData;
        
        if (fileType === 'text') {
            // If it's a text file (our CSV), save the body as-is.
            fileData = requestBody;
        } else {
            // Otherwise, assume it's binary (our zip) and decode from Base64.
            fileData = Buffer.from(requestBody, 'base64');
        }

        if (!fileData || fileData.length === 0) {
            console.error(`Error: Received empty or invalid data for ${fileName}.`);
            return res.status(400).send('Error: Empty data received.');
        }

        fs.writeFileSync(filePath, fileData);

        if (ENABLE_LOGGING) {
            console.log(`✅ Successfully saved: ${fileName}`);
        }
        res.status(200).send(`Successfully saved: ${fileName}`);

    } catch (err) {
        console.error(`❌ Error saving file ${fileName}:`, err);
        return res.status(500).send('Error saving file.');
    }
});

// --- Start Server ---
try {
    fs.mkdirSync(outputDir, { recursive: true });
    app.listen(port, () => {
        console.log(`🚀 Server is running and listening at http://localhost:${port}`);
        console.log('--------------------------------------------------');
        console.log('To use a different save directory:');
        console.log('1. Stop the server (Ctrl+C).');
        console.log('2. Run the start command with a path, for example:');
        console.log('   node server.js "C:\\MyCustomFolder"');
        console.log('--------------------------------------------------');
    });
} catch (e) {
    console.error(`❌ FATAL: Could not create output directory at "${outputDir}".`);
    console.error('Please check your path and permissions.');
    process.exit(1);
}