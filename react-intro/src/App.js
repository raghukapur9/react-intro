import './App.css';
import Header from './components/Header';

function App() {
  const name = "Raghu";
  return (
    <div className="Container">
      <Header title = "Prop Added"/>
      <h1> Hello from Activity Tracker</h1>
      <h2>Greetings from {name}</h2>
    </div>
  );
}

export default App;
