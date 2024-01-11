import { BACKEND_URL } from '@/constants/url';
import axios from 'axios';

const DATA_URL = BACKEND_URL + '/films_categories';

class Film_Category {
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

    async deleteObject(object_id: any) {
        return await axios.delete(DATA_URL + '/' + object_id);
    }

    async deleteObjectsByIdPhim(idPhim: String) {
        return await axios.delete(BACKEND_URL + '/deleteByIdPhim/' + idPhim);
    }

    async deleteObjectsByIdTheLoai(idTheLoai: String) {
        return await axios.delete(
            BACKEND_URL + '/deleteByIdTheLoai/' + idTheLoai
        );
    }

    async addCategoriesByIdPhim(categories: Array<String>, idPhim: any) {
        await this.deleteObjectsByIdPhim(idPhim);
        for (const cate of categories) {
            await this.createObject({
                id: '0',
                idPhim: idPhim,
                idTheLoai: cate,
            });
        }
    }
}

export default new Film_Category();
