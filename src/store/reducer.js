import { combineReducers } from 'redux';
import contentReducer from '../pages/content/store/reducer';
import headerReducer from '../pages/header/store/reducer';
import siderReducer from '../pages/silder/store/reducer';


export default combineReducers({
    contentReducer,
    headerReducer,
    siderReducer,
});
