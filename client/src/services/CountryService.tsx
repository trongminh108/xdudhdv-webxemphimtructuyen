import { BACKEND_URL } from '@/constants/url';
import axios from 'axios';

const DATA_URL = BACKEND_URL + '/countries';

class CountryService {
    async getObjects() {
        const response = await axios.get(DATA_URL);
        return await response.data.map((item: any) => item);
    }

    createObject(object: any) {
        return axios.post(DATA_URL, object);
    }

    async getObjectById(object_id: any) {
        const response = await axios.get(DATA_URL + '/' + object_id);
        return await response.data;
    }

    updateObject(object: any, object_id: any) {
        return axios.put(DATA_URL + '/' + object_id, object);
    }

    deleteObject(object_id: any) {
        return axios.delete(DATA_URL + '/' + object_id);
    }
}

export default new CountryService();
