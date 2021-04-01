import './App.css';
import InputPreview from './components/InputPreview';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <InputPreview label="username" value="janusz"/>
      <Counter />
    </div>
  );
}

export default App;
