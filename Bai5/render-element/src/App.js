import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Hoai Thu";
  const age = 25;
  const isMale = false;
  const family = {
    name: 'Fukurou'
  };
  const colorList = ['red', 'green', 'yellow'];
  return (
    <div className="App">
      <header className="App-header">
        <p>Xin chao - {family.name} - {name} - {age}</p>
        <p>{isMale ? 'Male' : 'Female'}</p>
        {isMale ? <p>Male 1</p> : <p>Female 1</p>}
        {isMale && <p>Male 2</p>}
        {!isMale && <p>Female 2</p>}
        {!isMale && (
          <>
          <p>Female 3</p>
          <p>Female 3</p>
          <p>Female 3</p>
          </>
        )}
        <ul>
          {colorList.map(color => (
            <li style={{color}}>{color}</li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
