import * as type from './actionType';

const openSubMenu = (state = [], action) => {
    switch (action.type) {
        case type.OPENSUBMENU: 
        return [...state, action.value];
        default: 
        return [...state];
    }
};
export default openSubMenu;
