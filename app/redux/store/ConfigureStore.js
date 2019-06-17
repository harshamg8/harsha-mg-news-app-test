import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {newsFetchReducer} from '../reducers/NewsFetchReducer'
import {newsFetchAllReducer} from '../reducers/NewsFetchAllReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    newsFetchReducer,
    newsFetchAllReducer
})

const configureStore = () => {
    return createStore(rootReducer,applyMiddleware(thunk));
}

export default configureStore;