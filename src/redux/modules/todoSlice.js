import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { serverUrl } from ".";


const initialState = {
  todos:[],
  isLoading: false,
  error: null
};


export const __getTodoDetail = createAsyncThunk( //투두 상세 get
  "todos/GET_TODO_DETAIL",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.get(`${serverUrl}/todos/${payload}`)
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const __updateTodoDetail = createAsyncThunk( //투두 상세 수정
  "todos/UPDATE_TODO_DETAIL",
  async (payload, thunkAPI) => {
    try{
      await axios.patch(`${serverUrl}/todos/${payload.id}`, payload)
      return thunkAPI.fulfillWithValue(payload)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodoDetail.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodoDetail.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodoDetail.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    //업데이트
    [__updateTodoDetail.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__updateTodoDetail.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__updateTodoDetail.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;