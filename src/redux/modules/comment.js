import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"



const initialState = {
  comments:[],
  isLoading: false,
  error: null
};

export const __addComments = createAsyncThunk( //추가
  "todos/ADD_COMMENTS",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.post('http://localhost:3001/comments', payload)
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const __getComments = createAsyncThunk( //가져오기
  "todos/GET_COMMENTS",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.get('http://localhost:3001/comments')
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const __deleteComments = createAsyncThunk( //삭제
  "todos/DELETE_COMMENTS",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.delete(`http://localhost:3001/comments/${payload}`)
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    //추가
    [__addComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = [...state.comments, action.payload]; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    //가져오기
    [__getComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments =  action.payload.filter((comment)=>comment.paramId === action.meta.arg) // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    //삭제
    [__deleteComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deleteComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = state.comments.filter((comment)=>comment.id !== action.meta.arg)
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { } = commentsSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default commentsSlice.reducer;