
import { legacy_createStore as createStore } from 'redux';
//legacy_createStore
import rootReducer from '../reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default store;