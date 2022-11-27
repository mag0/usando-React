import './App.css';
import Mensaje from './mensaje.js';

function Description () {
  return <p>esta es la descripcion</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color = 'red' message = 'estamos trabajando' />
      <Mensaje color = 'green' message = 'en un curso' />
      <Mensaje color = 'yellow' message = 'de React' />
      <Description></Description>
    </div>
  );
}

export default App;
