import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.unshift(payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(4),
          }
        };
      },
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blackList: ['filter'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export const getConatcs = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export default contactsSlice.reducer;
