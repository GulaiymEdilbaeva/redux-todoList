const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.message],
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.id)],
      };
    case "DELETE_ALL":
      return initialState;
    case "UPDATE_TODO":
      return {
        ...state,
        data: [
          ...state.data.filter((todo) => todo.id !== action.id),
          { task: action.message, id: action.id },
        ],
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.id ? { ...todo, completed: true } : todo
        ),
      };
    default:
      return state;
  }
};

export default todos;
