import {post} from '../HttpService.js';
import {environment} from '../../environment/develop.js';
// const modeEnv = process.env.NODE_ENV;

export class UserService {
    
    static baseApiUrl = environment.setting.baseApiUrl + '/User';
    // static baseApiUrl = 'http://localhost:60216/api/User';
    
    static login(params) {
        console.log('this.baseApiUrl',this.baseApiUrl);
        return post(`${this.baseApiUrl}/login`, params);
    }

    static getMenu(params) {
        return post(`${this.baseApiUrl}/menu`, params);
    }
}

