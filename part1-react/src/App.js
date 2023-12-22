import './App.css';
import Mensaje from './Mensaje.js'


function App() {
  const mensaje = "Hola "
  const a = 2
  const b = 3

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      {/* <Description /> */}


    </div>
  );
}

export default App;
