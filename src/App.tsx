import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event : ChangeEvent<HTMLInputElement>) : void => {
    if (event.target.name === 'task'){
      setTask(event.target.value);
    }else{
      setDeadLine(Number(event.target.value));
    } 
  };

  const addTask = () : void => {
    const newTask = {taskName: task, deadline: deadLine}
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadLine(0);
  }

  const removeTask = (taskNameToDelete : string) :void =>{
    setTodoList(todoList.filter(task => task.taskName !== taskNameToDelete));
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
           name="task"
           value={task}
           type="text" 
           placeholder="Task..." 
           onChange={handleChange} />
          <input
            name="deadline" 
            value={deadLine}
            type="text"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task : ITask, key : number) => {
          return <TodoTask key={key} task={task} removeTask={removeTask} />
        })}
      </div>
    </div>
  );
};

export default App;
