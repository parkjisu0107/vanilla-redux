import { createAction, createReducer } from "@reduxjs/toolkit";
import { createStore } from "redux";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

// The object notation for `createReducer` is deprecated,
// and will be removed in RTK 2.0. Please use the 'builder callback' notation
// instead: https://redux-toolkit.js.org/api/createReducer 해결
const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    })
    .addCase(deleteToDo, (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    });
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
