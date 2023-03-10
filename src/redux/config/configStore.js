// src/redux/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
import todos from '../modules/todosSlice'
import todo from '../modules/todoSlice'
import comment from '../modules/comment';


const store = configureStore({
  reducer: { todos, todo, comment },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;