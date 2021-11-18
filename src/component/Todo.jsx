import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";

function Todo() {
  const [query, setQuery] = useState("");
  const [todo, setTodo] = useState([]);
  function handleClick(e) {
    const { value } = e.target;
    setQuery(value);
  }

  const addTasks = () => {
    const payload = {
      id : uuid(),
      title: query,
      status: false,
    };
    let newTasks = [...todo, payload];
    setTodo(newTasks);
  };

  const handleStatus = (id) => {
    console.log(id);
    const updatesTodo = todo.map((item) => 
         item.id === id ? {...item , status : !item.status } : item 
    );
  setTodo(updatesTodo);
  };

  return (
    <div className="App">
      <div>
        {todo.map((item) => {
          return <TodoList 
          id= {item.id}
           title={item.title}
           status={item.status}
           handleStatus={handleStatus}
          />;
        })}
      </div>
      <input value={query} placeholder="Write Something" onChange={handleClick} className="input" />
      <button onClick={addTasks} className="buttonadd">+</button>
      
    </div>
  );
}

export { Todo };
