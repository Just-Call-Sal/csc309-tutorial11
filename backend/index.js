console.log('Loading index.js...');

import express from "express";
console.log('Express imported');

import routes from "./routes.js";
console.log('Routes imported');

import cors from "cors";
console.log('CORS imported');

const app = express();
console.log('Express app created');

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
console.log('FRONTEND_URL:', FRONTEND_URL);

app.use(cors({
    origin: FRONTEND_URL
}));
console.log('CORS configured');

app.use(express.json());
console.log('JSON middleware configured');

app.use('', routes);
console.log('Routes mounted');

// Add a simple test route
app.get('/health', (req, res) => {
    res.send('OK');
});
console.log('Health route configured');

console.log('Index.js loaded successfully');
export default app;