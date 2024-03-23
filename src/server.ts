import express, { Request, Response } from 'express';
import recipesRouter from './routes/recipes';
import * as dotevnv from "dotenv"
dotevnv.config()

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());

server.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'up' });
});

server.use('/recipes', recipesRouter);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});