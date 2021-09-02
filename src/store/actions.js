import loadPhotosFromServer from '../apiFunctions/loadPhotosFromServer';
import loadPhotoInfo from '../apiFunctions/loadPhotoInfo';

export const SET_PHOTOS = 'SET_PHOTOS';
export const SET_PHOTO_INFO = 'SET_PHOTO_INFO';

const setPhotos = (payload) => ({ type: SET_PHOTOS, payload });
const setPhotoInfo = (payload) => ({
    type: SET_PHOTO_INFO,
    payload,
});

export const getPhotos = () => {
    return (dispatch) => {
        loadPhotosFromServer().then((response) => {
            dispatch(setPhotos(response));
        });
    };
};

export const getPhotoInfo = (id) => {
    return (dispatch) => {
        loadPhotoInfo(id).then((response) => {
            dispatch(setPhotoInfo(response));
        });
    };
};
