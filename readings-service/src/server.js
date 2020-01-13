import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const PORT = 9000;

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}));

routes(app);

app.listen(PORT, () => {
    console.log(`Readings Service listening on port ${PORT}`);
});