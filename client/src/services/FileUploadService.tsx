import { BACKEND_URL } from '@/constants/url';
import axios from 'axios';

const DATA_URL = BACKEND_URL + '/image/fileSystem';

class FileUploadService {
    async uploadFile(image: any) {
        const formData = new FormData();
        formData.append('image', image);

        return await axios.post(DATA_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
}

export default new FileUploadService();
