import tokenReducer from './tokenReducer';
import routerReducer from './routerReducer';
import urlReducer from './urlReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    loginState:tokenReducer,
    router:routerReducer,
    url:urlReducer,
})

export default rootReducer