import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const PORT = 9002;

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}));

routes(app);

app.use((err, req, res, next) => {
    return res.status(500).json({
        message: err.message
    })
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Users Service listening on port ${PORT}`);
});