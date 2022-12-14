import express from 'express';
import userRoutes from './src/Routes/UserRoutes.js';
import dotenv from "dotenv";

const app = express();
app.use(express.json());

// importamos las variables de entorno  
dotenv.config();
// http://localhost:3000/api/use/
app.use('/api/', userRoutes);

// puerto
  app.listen(process.env.Port, () =>
    console.log('Example app listening on port 3000!'),
  );