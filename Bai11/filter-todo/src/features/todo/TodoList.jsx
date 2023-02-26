import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TodoList.css';

TodoList.propTypes = {
  list: PropTypes.array,
  updateStatusTodo: PropTypes.func,
  curStatus: PropTypes.string
};
TodoList.defaultProps = {
  list: [],
  updateStatusTodo: null,
  curStatus: 'all'
}

function TodoList(props) {
  const {list, updateStatusTodo, curStatus} = props;
  const filterList = list.filter(data => curStatus === 'all' || data.status === curStatus)
  const handleClickItem = (index) => {
    if(!updateStatusTodo) return;
    updateStatusTodo(index);
  }
  return (
    <div>
      {filterList.map((todo, index) => (
        <li className={classnames({'todo-item': true, 'item--complete': todo.status === 'complete'})} key={todo.id} onClick={() => handleClickItem(index)}>{todo.name}</li>
      ))}
    </div>
  );
}

export default TodoList;