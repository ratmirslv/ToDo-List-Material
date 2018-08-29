import { TOGGLE_TODO, DELETE_TODO, ADD_TODO } from "../actions";
import todosdata from "../todos";

export default function todos(state = todosdata, action) {
  switch (action.type) {
    case DELETE_TODO:
      const deleteItem = state.filter(todo => todo.id !== action.id);
      return [...deleteItem];
    case ADD_TODO:
      const todo = {
        id: action.id,
        title: action.title,
        completed: false
      };
      return [...state, todo];
    case TOGGLE_TODO:
      let modifiedTodos = state.map(todo => {
        if (todo.id === action.id)
          return Object.assign({}, todo, { completed: !todo.completed });
        return todo;
      });

      return [...modifiedTodos];

    default:
      return state;
  }
}
