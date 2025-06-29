import { Router } from 'express';
import { db } from '../firebase.js';
import bcrypt from 'bcrypt';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const userData = {
            email,
            firstName,
            lastName,
            password: hashedPassword,
            createdAt: new Date()
        };

        const docRef = await db.collection('users').add(userData);

        res.status(201).json({
            message: 'Utilisateur inscrit avec succès',
            id: docRef.id
        });

    } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        res.status(500).json({
            message: 'Erreur lors de l\'inscription',
            error: error.message || 'Erreur inconnue'
        });
    }
});

export default router;
