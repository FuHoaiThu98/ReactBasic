import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TodoList.css';

TodoList.propTypes = {
  list: PropTypes.array,
  onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
  list: [],
  onTodoClick: null
};

function TodoList(props) {
  const {list, onTodoClick} = props; 
  const handleCLickItem = (index) => {
    if(!onTodoClick) return;
    onTodoClick(index)
  }
  return (
    <ul className='todo-list'>
      {list.map((todo, index) => (
        <li key={todo.id} className={classnames({'todo-item': true, 'todo-item--completed': todo.status === 'complete'})} onClick={() => handleCLickItem(index)}>{todo.name}</li>
      ))}
    </ul>
  );
}

export default TodoList;