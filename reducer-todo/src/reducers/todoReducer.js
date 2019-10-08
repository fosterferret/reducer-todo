export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: Date.now(),
    doBy: "October 10, 2019",
    tags: ["Coding"]
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload.todo,
          completed: false,
          id: Date.now(),
          doBy: Date.now() + 604800000,
          tags: [action.payload.tag]
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
