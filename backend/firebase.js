import admin from 'firebase-admin';
import serviceAccount from './firebase/subdomain.json' assert { type: 'json' };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const auth = admin.auth();
export const db = admin.firestore();
