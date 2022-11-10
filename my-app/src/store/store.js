import { applyMiddleware, createStore, compose } from "redux";
import { checkBoxToggle} from './profile/reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(checkBoxToggle, composeEnhancers(applyMiddleware()))