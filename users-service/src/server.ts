import '@babel/polyfill';
import 'module-alias/register';
import express, {
  Application,
  Request,
  Response,
  NextFunction
} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const PORT: number = 9002;

const app: Application = express();

app.use(bodyParser.json());

app.use(cors({
  origin: (origin, cb) => cb(null, true),
  credentials: true,
}));

routes(app);

type Error = {
  message: String,
  status: number
}

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(`Users Service listening on port ${PORT}`);
});
