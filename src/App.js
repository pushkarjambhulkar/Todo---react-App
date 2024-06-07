import React, { useState } from 'react';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState([]);

  const saveToDoList = (event) => {
    event.preventDefault();
    
    const toname = event.target.todo.value;
    if (!todolist.includes(toname)) {
      const finalDolist = [...todolist, toname];
      setTodolist(finalDolist);
    } else {
      alert("ToDo Name Already exists...");
    }

    event.target.todo.value = "";  // Clear the input field after submission
  };

  const deleteToDo = (index) => {
    const newTodolist = todolist.filter((_, i) => i !== index);
    setTodolist(newTodolist);
  };

  const List = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        deleteToDo={deleteToDo}
      />
    );
  });

  return (
    <div className="App">
      <center>
        <h1>ToDo List</h1>
      </center>
      
      <form onSubmit={saveToDoList}>
        <input type="text" name="todo" placeholder="Enter a task" />
        <button type="submit">Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {List}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, deleteToDo }) {
  let [status,setStatus]=useState(false)
  let checkStatus=()=>{
    setStatus(!status)
  }
  return (
  
    <li className={(status)? 'completetodo':''} onClick={checkStatus}>
      {value}
      <span onClick={() => deleteToDo(indexNumber)} style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }}>
        &times;
      </span>
    </li>
  );
}
