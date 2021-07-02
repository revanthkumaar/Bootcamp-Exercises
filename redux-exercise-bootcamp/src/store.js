import { applyMiddleware, createStore } from 'redux'

import { createLogger } from 'redux-logger'
import bookReducer from './redux/reducers/bookReducer'
const logger = createLogger({
    //options
});

export default function configureStore(state){
    return createStore(bookReducer,state,applyMiddleware(logger))
}