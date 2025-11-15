import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// dossier statique : dist contient index.html + assets
const staticPath = path.resolve(__dirname, "../dist"); // chemin vers build Vite

app.use(express.static(staticPath));

// toutes les routes renvoient index.html pour SPA
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app; // export pour Vercel Serverless
