import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer saludo="BIENVENIDO A MI TIENDA"/>
    </div>
  );
}

export default App;
