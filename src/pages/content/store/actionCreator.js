import * as type from './actionTypes';

// const requestData = valueType => ({
//     type: type.REQUEST_DATA,
//     valueType,
// });
const getData = (data, valueType) => ({
    type: type.GET_DATA,
    data,
    valueType,
});
export default getData;
