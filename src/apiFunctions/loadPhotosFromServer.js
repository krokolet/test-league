import { photosUrl } from './apiInfo';
import axios from 'axios';

import { normalizeData } from './normalizeData';

const loadPhotosFromServer = async () => {
    const path = new URL(photosUrl);

    try {
        const response = await axios.get(path.toString());
        return normalizeData(response.data);
    } catch (err) {
        throw err;
    }
};

export default loadPhotosFromServer;
