import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './contactsSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'phonebook',
    storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);


export const store = configureStore({
    reducer: {
        phonebook: persistedContactsReducer,
    },
});


export const persistor = persistStore(store)

