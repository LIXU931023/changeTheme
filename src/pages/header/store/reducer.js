import * as type from './actionTypes';

const changeData = (state = { collapsed: false }, action) => {
    switch (action.type) {
        case type.CHANGE_VAULE: 
        return { ...state, ...action.value };
        case type.HANDLEINPUT: 
        return { ...state, data: 3 };
        default: 
        return { ...state };
    }
};
export default changeData;
