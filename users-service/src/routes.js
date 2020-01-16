import { getUser, getUsers } from './handlers';

const routes = (app) => {
    app.get('/users/:id', getUser);
    app.get('/users', getUsers);
} 

export default routes;
