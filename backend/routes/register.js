import { Router } from 'express';
const router = Router();

router.post('/', (req, res) => {
    res.json({ message: 'Utilisateur inscrit' });
});

export default router;
