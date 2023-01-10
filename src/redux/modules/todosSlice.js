import { createSlice } from "@reduxjs/toolkit";

let i = 2

const initialState = {
  todos:{
    id: 1,
    auth: '김준철',
    title:'리액트 툴킷',
    content:'리액트 심화 과제 양이 많쥬?'
  }
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoList: (state, action) => {
      state.todos = {
        id: i++,
        auth: action.payload.auth,
        title: action.payload.title,
        content: action.payload.content
      }
      
      console.log('state.todo : ', state.todos)
      return{
        todos: [...state.todos, state.todos]
    }
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addTodoList } = todosSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todosSlice.reducer;