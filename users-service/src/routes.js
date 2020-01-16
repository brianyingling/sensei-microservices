import { 
    createUser,
    getUser, 
    getUsers
} from './handlers';

const routes = (app) => {
    app.get('/users/:id', getUser);
    app.get('/users', getUsers);
    app.post('/users', createUser);
} 

export default routes;
