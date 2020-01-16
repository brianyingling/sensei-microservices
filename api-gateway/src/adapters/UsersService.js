import got from 'got';

const URI = 'http://users-service:9002';

export default class UsersService {
    
    static async getUser(id) {
        return await got.get(`${URI}/users/${id}`).json();
    }
}