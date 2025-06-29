import { Router } from 'express';
import { db, auth } from '../firebase.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await auth.getUserByEmail(email);
        const customToken = await auth.createCustomToken(user.uid);
        const userDoc = await db.collection('users').doc(user.uid).get();
        const userData = userDoc.exists ? userDoc.data() : {};

        res.status(200).json({
            message: "Connexion réussie",
            user: {
                uid: user.uid,
                email: user.email,
                ...userData
            },
            token: customToken
        });

    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        res.status(500).json({
            message: "Erreur lors de la connexion",
            error: error.message || "Erreur inconnue"
        });
    }
});

export default router;
