import account from '@/assets/interfaces/account';
import { BACKEND_URL } from '@/constants/url';
import { setCookiesUser } from '@/features/Cookies';
import axios from 'axios';
import { MD5 } from 'crypto-js';

const DATA_URL = BACKEND_URL + '/accounts';

class AccountService {
    async getObjects() {
        const response = await axios.get(DATA_URL);
        return await response.data.map((item: any) => item);
    }

    createObject(object: any) {
        return axios.post(DATA_URL, object);
    }

    async getObjectById(object_id: any) {
        return await axios.get(DATA_URL + '/' + object_id);
    }

    updateObject(object: any, object_id: any) {
        return axios.put(DATA_URL + '/' + object_id, object);
    }

    deleteObject(object_id: any) {
        return axios.delete(DATA_URL + '/' + object_id);
    }

    async login(username: string, password: string) {
        const md5_pass = MD5(password).toString();
        try {
            const response = await this.getObjectById(username);
            if (md5_pass === response.data.matKhau) {
                const tk: account = response.data;
                setCookiesUser(tk);
                return tk.tenTaiKhoan;
            } else return -1;
        } catch {
            return -1;
        }
    }

    async signup(username: string, gmail: string, password: string) {
        try {
            await this.getObjectById(username);
            //user is exist
            return -1;
        } catch {
            const md5_pass = MD5(password).toString();
            await this.createObject({
                tenTaiKhoan: username,
                matKhau: md5_pass,
                gmail: gmail,
                loaiQuyen: 2,
            });
            setCookiesUser({
                tenTaiKhoan: username,
                gmail: gmail,
                loaiQuyen: 2,
            });
            return 1;
        }
    }
}

export default new AccountService();
