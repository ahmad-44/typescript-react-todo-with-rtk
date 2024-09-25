import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { IBaseTodo, ITodo } from "../components/Todo";
import { TStatus } from "../components/Elements/Actions";

interface InitialState {
  todos: ITodo[];
}
const initialState: InitialState = {
  todos: [],
};

interface ChangeTodoStatusPayload {
  id: string; // The ID of the todo item
  status: TStatus; // The new state
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
    addTodo: (state, action: PayloadAction<IBaseTodo>) => {
      if (!action.payload.text) return;

      const todo: ITodo = {
        ...action.payload,
        id: nanoid(),
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
      const todoToBeChanged = state.todos.find(
        (todo) => todo.id === action.payload.id
      );

      if (!todoToBeChanged) return;

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
