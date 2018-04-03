import {createStore, applyMiddleware, compose} from "redux";
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import thunk from 'redux-thunk';



const store = createStore(
			reducer , {} , 
			compose(applyMiddleware(thunk, createLogger()))
			)
export default store