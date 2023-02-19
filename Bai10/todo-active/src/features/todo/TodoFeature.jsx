import React, {useState} from 'react';
import TodoList from './TodoList'

function TodoFeature(props) {
  const initTodoList = [
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
  const [todoList, setTodoList] = useState(initTodoList)
  const handleTodoClick = (index) => {
    let newTodoList = structuredClone(todoList)
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'complete' ? 'New' : 'complete'
    }
    setTodoList(newTodoList)
  }
  return (
    <div>
      <TodoList list={todoList} onTodoClick={handleTodoClick}></TodoList>
    </div>
  );
}

export default TodoFeature;