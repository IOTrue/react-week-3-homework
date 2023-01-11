// src/redux/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
import todos from '../modules/todosSlice'
import todo from '../modules/todoSlice'
import comment from '../modules/comment';


const store = configureStore({
  reducer: { todos, todo, comment },
});

export default store;