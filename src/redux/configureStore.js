import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./Ducks/counter";
import userReducer from "./Ducks/user";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const sagaMiddelware = createSagaMiddleware();

const middleware = [sagaMiddelware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddelware.run(watcherSaga);

export default store;
