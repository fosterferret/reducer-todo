import React, { useReducer } from "react";

const initialState = {
  todo: "",
  tag: ""
};

const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";

function reducer(state, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
}

const tags = ["Coding", "Home", "Work", "Leisure", "Study"];

export default function TodoForm(props) {
  const [formValues, dispatch] = useReducer(reducer, initialState);

  const onValueChange = event => {
    dispatch({
      type: ON_INPUT_CHANGE,
      payload: { name: event.target.name, value: event.target.value }
    });
  };

  return (
    <form>
      <div className="input-bar">
        <input
          name="todo"
          type="text"
          value={formValues.todo}
          placeholder="Enter a todo..."
          onChange={onValueChange}
        />

        <select onChange={onValueChange} name="tag">
          <option>Select a tag</option>
          {tags.map((tag, index) => (
            <option key={index} name="tag" value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <button
          onClick={e => {
            e.preventDefault();
            props.dispatch({
              type: "ADD_TODO",
              payload: { todo: formValues.todo, tag: formValues.tag }
            });
            // setTodo("");
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}