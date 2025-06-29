import { Router } from 'express';
import { db, auth } from '../firebase.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const userRecord = await auth.createUser({
            email,
            password,
            displayName: `${firstName} ${lastName}`,
        });

        const uid = userRecord.uid;

        const userData = {
            firstName,
            lastName,
            email,
            createdAt: new Date(),
        };

        await db.collection('users').doc(uid).set(userData);

        res.status(201).json({
            message: 'Utilisateur inscrit avec succès',
            user: {
                uid,
                firstName,
                lastName,
                email,
            }
        });

    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        res.status(500).json({
            message: 'Erreur lors de l\'inscription',
            error: error.message || 'Erreur inconnue',
        });
    }
});

export default router;
