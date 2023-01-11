import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { isDev, serverUrl } from ".";


const initialState = {
  todos:[],
  isLoading: false,
  error: null
};

export const __getTodos = createAsyncThunk(
  "todos/GET_TODOS",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.get(`${serverUrl}/todos`)
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const __addTodos = createAsyncThunk(
  "todos/ADD_TODOS",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.post(`${serverUrl}/todos`, payload)
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  "todos/DELETE_TODOS",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.delete(`${serverUrl}/todos/${payload}`)
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    //추가
    [__addTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = [...state.todos, action.payload]; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__addTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    //삭제
    [__deleteTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = state.todos.filter((todo)=>todo.id !== action.meta.arg); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { } = todosSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todosSlice.reducer;