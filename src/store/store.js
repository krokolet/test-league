import { combineReducers } from 'redux';

import { SET_PHOTOS, SET_PHOTO_INFO } from './actions';

const photoCollection = (state = {}, { type, payload }) => {
    switch (type) {
        case SET_PHOTOS:
            return payload;
        default:
            return state;
    }
};

const photoInfoCollection = (state = {}, { type, payload }) => {
    switch (type) {
        case SET_PHOTO_INFO:
            const { id, ...info } = payload;
            return { ...state, [id]: { ...info } };
        default:
            return state;
    }
};

const photoIds = (state = [], { type, payload }) => {
    switch (type) {
        case SET_PHOTOS:
            return Object.keys(payload);
        default:
            return state;
    }
};

const reducer = combineReducers({
    photoCollection,
    photoInfoCollection,
    photoIds,
});

export default reducer;
