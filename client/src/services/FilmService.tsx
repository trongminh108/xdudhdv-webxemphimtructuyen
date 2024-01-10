import { BACKEND_URL } from '@/constants/url';
import axios from 'axios';

const DATA_URL = BACKEND_URL + '/films';

class FilmService {
    async getObjects() {
        const response = await axios.get(DATA_URL);
        return await response.data.map((item: any) => item);
    }

    async createObject(object: any) {
        return await axios.post(DATA_URL, object);
    }

    async getObjectById(object_id: string) {
        const response = await axios.get(DATA_URL + '/' + object_id);
        return await response.data;
    }

    async updateObject(object: any, object_id: any) {
        return await axios.put(DATA_URL + '/' + object_id, object);
    }

    deleteObject(object_id: any) {
        return axios.delete(DATA_URL + '/' + object_id);
    }

    async getFilmsViewDESC() {
        const response = await axios.get(BACKEND_URL + '/filmsDESC');
        return await response.data.map((item: any) => item);
    }

    async updateViewObject(object_id: string) {
        return await axios.put(BACKEND_URL + '/film_view/' + object_id);
    }
}

export default new FilmService();
