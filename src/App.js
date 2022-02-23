import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <ParentComp/> */}
    </div>
  );
}

export default App;
