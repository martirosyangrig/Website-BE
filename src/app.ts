import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

export default app;
