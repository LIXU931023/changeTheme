import * as type from './actionTypes';

const data = (state = {}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
        return { ...state, isLoading: true };
        case type.GET_DATA:
        return { ...state, isLoading: false };
        default:
        return { ...state };
    }
};

export default data;
