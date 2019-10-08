import React, { useReducer } from "react";

const initialState = {
  todo: "",
  tag: "",
  doBy: ""
};

const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
const RESET = "RESET"

function reducer(state, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case RESET:
        return {...initialState}
    default:
      return state;
  }
}

const tags = ["Coding", "Home", "Work", "Leisure", "Study"];

export default function TodoForm(props) {
  const [formValues, formDispatch] = useReducer(reducer, initialState);
  
  console.log(formValues.doBy)

  const onValueChange = event => {
    formDispatch({
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
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <input
          name="doBy"
          type="date"
          value={formValues.doBy}
          placeholder="Enter a todo..."
          onChange={onValueChange}
        />

        <button
          onClick={e => {
            e.preventDefault();
            props.dispatch({
              type: "ADD_TODO",
              payload: { todo: formValues.todo, tag: formValues.tag, doBy: formValues.doBy }
            });
            formDispatch({
                type: "RESET"
            })
            // setTodo("");
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}
