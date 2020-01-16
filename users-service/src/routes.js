
import { getUser } from './handlers';

const routes = (app) => {
    app.get('/users/:id', getUser);

} 

export default routes;
