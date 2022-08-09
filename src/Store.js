import {createStore,applyMiddleware} from 'redux'
import reducer from './Reducer'
import thunk from 'redux-thunk';

function configureStore(state){
    return createStore(reducer,state,applyMiddleware(thunk));
}

export default configureStore
