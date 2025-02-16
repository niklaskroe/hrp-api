import express from 'express'
import mdb from '../config/db.js';
import routes from './routes/routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());

mdb();

app.use(routes);

app.listen(PORT, () => console.log(`Look on http://localhost:${PORT}`));