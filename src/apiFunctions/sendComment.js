import { sendCommentUrl } from './apiInfo';

import axios from 'axios';

const sendComment = async ({ idPhoto }, values) => {
    const path = new URL(sendCommentUrl + '/' + idPhoto + '/comments');
    try {
        const response = await axios.post(path.toString(), values);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export default sendComment;
