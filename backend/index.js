import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoutes from './routes/auth.route.js';
import movieRoutes from './routes/movie.route.js';
import tvRoutes from './routes/tv.route.js';
import searchRoutes from './routes/search.route.js';

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import { protectRoute } from './middleware/protectRoute.js';



const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(express.json()); 
app.use(cookieParser()); 

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",protectRoute,movieRoutes);
app.use("/api/v1/tv",protectRoute,tvRoutes);
app.use("/api/v1/search",protectRoute,searchRoutes);

app.get("*", (req, res) => {
    const indexPath = path.resolve(__dirname, "../frontend/dist/index.html");
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error("Error sending index.html:", err.message, err.code);
            res.status(err.status || 500).send(err.message);
        }
    });
});

app.listen(PORT,()=>{
    console.log('Server started at http://localhost:'+PORT);
    connectDB();
});

