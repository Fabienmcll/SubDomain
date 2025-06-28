
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registerRouter from './routes/register.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json());
app.use('/register', registerRouter);



app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
