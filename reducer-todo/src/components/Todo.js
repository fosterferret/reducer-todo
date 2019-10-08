import React from "react";
import Moment from "moment";
Moment.locale('en');

export default function Todo(props) {
  const dueDate = new Date(props.todo.doBy)
  return (
    <div>
      <h2
        style={{
          cursor: "pointer",
          textDecoration: `${props.todo.completed ? "line-through" : "none"}`,
          opacity: `${props.todo.completed ? "0.2" : "1"}`
        }}
        onClick={() =>
          props.dispatch({ type: "TOGGLE_TODO", payload: props.todo.id })
        }
      >
        {!props.todo.completed && (
          <span
            style={{
              height: "12px",
              width: "12px",
              border: "2px solid white",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "2%"
            }}
          ></span>
        )}
        {props.todo.completed && (
          <span
            style={{
              height: "12px",
              width: "12px",
              border: "2px solid white",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "2%"
            }}
          ></span>
        )}
        {props.todo.item}
      </h2>
      <p
        style={{
          color: `${Date.now() > Date.parse(dueDate) ? "red" : "white"}`
        }}
      >
       Due by: {Moment(props.todo.doBy).format('MMMM DD YYYY')} <span>{Date.now() > Date.parse(dueDate) ? "THIS TASK IS OVERDUE!" : ""}</span>
      </p>
      <p style={{color: "pink", fontSize: "16px"}}>
        Completed On:
        {props.todo.completed === true
          ? ` ${Moment().format("ddd, hA")}`
          : " Not Completed Yet"}
      </p>
      <p>
        {props.todo.tags.map(
          tag => tag !== "" && <span className="tag">{tag}</span>
        )}
      </p>
    </div>
  );
}
