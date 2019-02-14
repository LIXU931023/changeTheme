import * as type from './actionTypes';

export const changeVaule = value => ({
    type: type.CHANGE_VAULE,
    value,
});

export const handleInput = (data, valueType) => ({
    type: type.HANDLEINPUT,
    data,
    valueType,
});
