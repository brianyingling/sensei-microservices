import got from 'got';

const URI = 'http://users-service:9002';

export default class UsersService {

    static async createSession(email, password) {
        return await got.post(`${URI}/sessions`, { json: { email, password }}).json();
    }
    
    static async createUser(email, password) {
        return await got.post(`${URI}/users`, { json: { email, password }}).json();
    }

    static async getSession(id) {
        return await got.get(`${URI}/sessions/${id}`).json();
    }
    
    static async getUser(id) {
        return await got.get(`${URI}/users/${id}`).json();
    }
}