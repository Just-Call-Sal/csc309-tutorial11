import express from "express";

import routes from "./routes.js";

import cors from "cors";

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({
    origin: FRONTEND_URL
}));
app.use(express.json());

app.use('', routes);

// Add a simple test route
app.get('/health', (req, res) => {
    res.send('OK');
});

export default app;