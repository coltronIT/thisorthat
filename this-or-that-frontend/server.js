import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the Vite build
app.use(express.static(path.resolve(__dirname, 'dist')));

// All requests return the `index.html`
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 4173;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});