// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [{ id: 1, text: "Hello World" }],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid,
//         text: action.payload,
//       };
//       state.todos.push(todo);
//     },
//     removeTodo: () => {},
//   },
// });

// todo start here

// import { createSlice, nanoid } from "@reduxjs/toolkit";

// export const initialState = {
//   todos: [{ id: 1, text: "Hello World" }],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(), // nanoid should be invoked as a function
//         text: action.payload,
//       };
//       state.todos.push(todo);
//     },

//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },

//     updateTodo: (state, action) => {
//       const { id, newText } = action.payload;
//       const todoToUpdate = state.todos.find((todo) => todo.id === id); // Use find to get a single todo
//       if (todoToUpdate) {
//         todoToUpdate.text = newText; // Update the text directly
//       }
//     },
//   },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;
// export default todoSlice.reducer;

// this is again my prictice
// import { createSlice, nanoid } from "@reduxjs/toolkit";

// export const initialState = {
//   todos: [{ id: 1, text: "Hello World" }],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid,
//         text: action.payload,
//       };
//       state.todos.push(todo);
//     },

//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },

//     updateTodo: (state, action) => {
//       const { id, newText } = action.payload;
//       const todoToUpdate = state.todos.find((todo) => todo.id === id);
//       if (todoToUpdate) {
//         todoToUpdate.text = newText;
//       }
//     },
//   },
// });

import { createSlice, nanoid } from "@reduxjs/toolkit";

export const intitialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  intitialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid,
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const updateToTodo = state.todos.find((todo) => todo.id === id);
      if (updateToTodo) {
        updateToTodo = newText;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
