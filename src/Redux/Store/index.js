import { createStore } from 'redux';
import reducer from '../Reducer/User';

const store = createStore(reducer);

export {
    store
}