import { photoFullSizeUrl } from './apiInfo';
import axios from 'axios';

const loadPhotoInfo = async (id) => {
    const path = new URL(photoFullSizeUrl + '/' + id);

    try {
        const response = await axios.get(path.toString());
        return response.data;
    } catch (err) {
        throw err;
    }
};

export default loadPhotoInfo;
