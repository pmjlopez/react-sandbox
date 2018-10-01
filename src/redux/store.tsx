import { unstable_batchedUpdates } from 'react-dom'
import { applyMiddleware, compose, createStore, Store } from "redux";
import { batchedSubscribe } from 'redux-batched-subscribe'
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { IAppState } from "./appstate";
import { default as rootReducer } from "./reducers";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = (initialState: IAppState): Store<IAppState> => {
    let enhancer;
    if (process.env.NODE_ENV === 'production') {
        enhancer = compose(
            applyMiddleware(),
            batchedSubscribe(unstable_batchedUpdates)
        )
    } else {
        enhancer = composeWithDevTools(
            applyMiddleware(),
            batchedSubscribe(unstable_batchedUpdates)
        )
    }

    const store = createStore(persistedReducer, initialState, enhancer);
    const persistor = persistStore(store);
    return { store, persistor }
}
