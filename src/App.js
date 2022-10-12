import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contacto from './components/Contacto/Contacto';
import About from './components/About/About';


function App() {
  

  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path ="/contacto" element={<Contacto/>}/>
          <Route exact path ="/" element={<ItemListContainer subtitulo="BIENVENIDO A MI TIENDA"/>}/>
          {/* <Route exact path ="/categorias/carteras" element={<ItemListContainer subtitulo="Carteras"/>}/>
          <Route exact path ="/categorias/bijou" element={<ItemListContainer subtitulo="Bijou"/>}/>
          <Route exact path ="/categorias/accesorios" element={<ItemListContainer subtitulo="Accesorios"/>}/> */}
          <Route exact path ="/categorias/:categoria" element={<ItemListContainer subtitulo="Productos"/>}/>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
