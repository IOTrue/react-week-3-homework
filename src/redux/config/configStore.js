// src/redux/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
import todosSlice from '../modules/todosSlice'


const store = configureStore({
  reducer: { todosSlice },
});

export default store;