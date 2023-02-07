import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  data: PropTypes.array
};

TodoList.defaultProps = {
  data: []
}

function TodoList(props) {
  const {data} = props;
  return (
    <div className='list-todo'>
      <h3>To do list</h3>
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;