import React, {useState} from "react";
import TodoList from "./TodoList";
TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initList = [
    {
      id: 1,
      name: 'Game',
      status: 'complete'
    },
    {
      id: 2,
      name: 'Typing',
      status: 'New'
    },
    {
      id: 3,
      name: 'Duo',
      status: 'New'
    },
    {
      id: 4,
      name: 'ReactJs',
      status: 'New'
    },
    {
      id: 5,
      name: 'English Toeic',
      status: 'New'
    }
  ]
  const [todoList, setTodoList] = useState(initList)
  const [curFilter, setCurFilter] = useState('all')

  const handleUpdateStatusTodo = (curIndex) => {
    let newTodoList = structuredClone(todoList)
    newTodoList[curIndex] = {
      ...newTodoList[curIndex],
      status: newTodoList[curIndex].status === 'New' ? 'complete' : 'New'
    }
    setTodoList(newTodoList)
  }
  const handleFilterList = (status) => {
    setCurFilter(status)
  }
  return (
    <div className="wrapper">
      <TodoList list={todoList} updateStatusTodo={handleUpdateStatusTodo} curStatus={curFilter}></TodoList>
      <div className="actions">
        <button onClick={() => handleFilterList('all')}>All</button>
        <button onClick={() => handleFilterList('New')}>New</button>
        <button onClick={() => handleFilterList('complete')}>Complete</button>
      </div>
    </div>
  );
}

export default TodoFeature;
