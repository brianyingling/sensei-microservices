import {
    createSession,
    createUser,
    getUser, 
    getUsers
} from './handlers';

const routes = (app) => {
    app.get('/users/:id', getUser);
    app.get('/users', getUsers);
    app.post('/users', createUser);
    app.post('/sessions', createSession);
} 

export default routes;
