import shortid from "shortid";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id: id
  };
}

export function addTodo(title) {
  return {
    type: ADD_TODO,
    id: shortid.generate(),
    title: title
  };
}
