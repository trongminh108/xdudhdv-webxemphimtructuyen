import { BACKEND_URL } from '@/constants/url';
import axios from 'axios';

const DATA_URL = BACKEND_URL + '/categories';

class CategoryService {
    async getObjects() {
        const response = await axios.get(DATA_URL);
        return await response.data.map((item: any) => item);
    }

    async createObject(object: any) {
        return await axios.post(DATA_URL, object);
    }

    getObjectById(object_id: any) {
        return axios.get(DATA_URL + '/' + object_id);
    }

    async updateObject(object: any, object_id: any) {
        return await axios.put(DATA_URL + '/' + object_id, object);
    }

    async deleteObject(object_id: any) {
        return await axios.delete(DATA_URL + '/' + object_id);
    }

    async getObjectsByIdPhim(idPhim: String) {
        try {
            const response = await axios.get(
                BACKEND_URL + '/film_categories/' + idPhim
            );
            return await response.data.map((item: any) => item);
        } catch (ex) {
            return [];
        }
    }
}

export default new CategoryService();
