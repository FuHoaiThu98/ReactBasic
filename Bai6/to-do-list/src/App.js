import TodoList from './features/todo/TodoList'

function App() {
  const todoList = [
    {
      id: 1,
      title: 'Typing'
    },
    {
      id: 2,
      title: 'Duo'
    },
    {
      id: 3,
      title: 'React js'
    },
    {
      id: 4,
      title: 'Toeic'
    },
  ]
  return (
    <div className="App">
      <TodoList data={todoList}></TodoList>
    </div>
  );
}

export default App;
