import '@babel/polyfill';
import express from 'express';
import routes from './routes';

const app = express();

const PORT = 9002;

routes(app);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Users Service listening on port ${PORT}`);
});