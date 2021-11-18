import React from "react";
function TodoList({id, title, status,handleStatus }) {
  
  return (
    <div >
      <h2 className="listtext">
          <h1 >{title}</h1>
         <h1 className="status">{status ? "Done" : "Not Done"}</h1>
          <button className="toggle_btn" onClick={() => handleStatus(id)} ></button>
        </h2>
    </div>
  );
}

export default TodoList;
