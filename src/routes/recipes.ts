import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ recipes: [], total: 0 });
});

router.get('/:id', (req: Request, res: Response) => {
  res.json({ id: req.params.id, name: 'Recipe 1', description: 'Description 1' });
});

export default router;