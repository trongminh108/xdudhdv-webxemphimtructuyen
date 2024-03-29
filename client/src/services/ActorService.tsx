import { BACKEND_URL } from '@/constants/url';
import axios from 'axios';

const DATA_URL = BACKEND_URL + '/actors';

class ActorService {
    async getObjects() {
        const response = await axios.get(DATA_URL);
        return await response.data.map((item: any) => item);
    }

    createObject(object: any) {
        return axios.post(DATA_URL, object);
    }

    getObjectById(object_id: any) {
        return axios.get(DATA_URL + '/' + object_id);
    }

    updateObject(object: any, object_id: any) {
        return axios.put(DATA_URL + '/' + object_id, object);
    }

    deleteObject(object_id: any) {
        return axios.delete(DATA_URL + '/' + object_id);
    }

    async getObjectsByIdPhim(object_id: string) {
        try {
            const response = await axios.get(
                BACKEND_URL + '/film_actors/' + object_id
            );
            return await response.data;
        } catch (ex) {
            return [];
        }
    }
}

export default new ActorService();
