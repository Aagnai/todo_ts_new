import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event : ChangeEvent<HTMLInputElement>) : void => {
    if (event.target.name == 'task'){
      setTask(event.target.value);
    }else{
      setDeadLine(Number(event.target.value));
    } 
  };

  const addTask = () : void => {
    const newTask = {taskName: task, deadline: deadLine}
    setTodoList([...todoList, newTask]);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
           name="task" 
           type="text" 
           placeholder="Task..." 
           onChange={handleChange} />
          <input
            name="deadline" 
            type="text"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
          />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
