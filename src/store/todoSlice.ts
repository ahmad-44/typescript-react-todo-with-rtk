import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
  username: string;
  status: "Active" | "Completed" | "Deleted";
}

interface InitialState {
  todos: Todo[];
}
const initialState: InitialState = {
  todos: [],
};

interface AddTodoPayload {
  text: string;
  username: string;
  status: "Active" | "Completed" | "Deleted";
}

interface ChangeTodoStatusPayload {
  id: string; // The ID of the todo item
  status: "Active" | "Completed" | "Deleted"; // The new state
}
//example data
// initialState.todos.push({
//   id: "2",
//   text: "33",
//   state: "Active",
//   username: "Khan",
// });

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      if (action.payload.text == "") return;
      const todo: Todo = {
        id: nanoid(),
        ...action.payload,
      };
      state.todos.push(todo);
    },
    // removeTodo: (state, action: PayloadAction<string>) => {
    //   state.todos = state.todos.filter((todo) => action.payload !== todo.id);
    // },
    changeTodoStatus: (
      state,
      action: PayloadAction<ChangeTodoStatusPayload>
    ) => {
      // find the todo where we have to make the changes
      const todoToBeChanged: Todo | undefined = state.todos.find(
        (todo) => todo.id === action.payload.id
      );

      if (todoToBeChanged == undefined) return;
      todoToBeChanged.status = action.payload.status;
    },
  },
});

// Export actions
export const { addTodo, changeTodoStatus } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;

// Export Selctor for ease of use in components
export const selectTodos = (state: { todos: InitialState }) =>
  state.todos.todos;
