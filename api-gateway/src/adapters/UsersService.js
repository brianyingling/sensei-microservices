import got from 'got';

const URI = 'http://users-service:9002';

export default class UsersService {
    
    static async createUser(email, password) {
        return await got.post(`${URI}/users`, { json: { email, password }}).json();
    }
    
    static async getUser(id) {
        return await got.get(`${URI}/users/${id}`).json();
    }


}