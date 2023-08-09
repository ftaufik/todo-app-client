import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  data: [],
};

export const getTodos = createAsyncThunk('todos/getTodos', async (userId) => {
    const response = await axios.get(`http://localhost:8000/api/v1/todo/${userId}`);

    return response.data.data
})

export const toggleComplete = createAsyncThunk('todos/completeTodos', async (todoId) => {
    const response = await axios.put(`http://localhost:8000/api/v1/todo/complete/${todoId}`);

    return response.data.data
})

export const deleteTodos = createAsyncThunk('todos/deleteTodos', async (todoId) => {
    const response = await axios.delete(`http://localhost:8000/api/v1/todo/delete/${todoId}`);

    return response.data.data
})

export const editTodos = createAsyncThunk('todos/editTodos', async (props) => {
    const response = await axios.put(`http://localhost:8000/api/v1/todo/edit/${props.id}`,{
      todo: props.todo
    });

    return response.data.data
})

export const addTodos = createAsyncThunk('todos/addTodos', async (props) => {
    const response = await axios.post(`http://localhost:8000/api/v1/todo/create/${props.id}`,{
      todo: props.todo
    });

    return response.data.data
})


const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(toggleComplete.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(editTodos.fulfilled, (state, action) => {
        state.data = action.payload;
      })
  },


})

export default todoSlice.reducer;