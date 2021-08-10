import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "redux/saga";
import rootReducer from "redux/reducers"; // 3 reducers -> 1. auth, 2. loading 3. project
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware)) // aktifin redux dev tools
);
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga);

export { store, persistor };