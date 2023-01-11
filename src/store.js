import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './features/removeBackground';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, statusReducer)

export const store = configureStore({
  reducer: {
    status: persistedReducer
  },
});

export const persistor = persistStore(store)