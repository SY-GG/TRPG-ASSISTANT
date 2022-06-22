import './App.css';
import ReplaceScript from './component/ReplaceScript';
import mainlogo from './assets/image/mainlogo(black).png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={mainlogo} alt="main logo" className="main-logo" />
      </header>
      <ReplaceScript></ReplaceScript>
    </div>
  );
}

export default App;
