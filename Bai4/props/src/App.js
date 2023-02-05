import './App.css';
import ColorBox from './components/ColorBox';

function App() {
  return (
    <div className="App">
      <ColorBox color="red" circle="false"></ColorBox>
      <ColorBox color="green"></ColorBox>
      <ColorBox color="blue"></ColorBox>
      <ColorBox color="yellow" circle = "false"></ColorBox>
    </div>
  );
}

export default App;
