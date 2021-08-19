/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import auth from "redux/reducers/auth";
import event from "redux/reducers/event";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import loading from "redux/reducers/loading";
// import loading from "redux/reducers/loading.js";
const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: ["auth"],
};
const authPersistConfig = {
    key: "auth",
    storage: storage,
    blacklist: ['error', 'statusText', 'headers', 'config', 'request'],
};
const eventPersistConfig = {
    key: "event",
    storage: storage,
    whitelist: ['detail_team']
};

const appReducer = combineReducers({
    event: event,
    loading: loading,
    auth: persistReducer(authPersistConfig, auth)
});
const rootReducer = (state: any, action: any) => {
    if (action.type === "DO_LOGOUT") {
        localStorage.removeItem("token");
        localStorage.removeItem("persist:root");
        localStorage.removeItem("persist:auth");
        state = undefined;
    }

    return appReducer(state, action);
};
export default rootReducer
// export default persistReducer(persistConfig, rootReducer)
