import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contacto from './components/Contacto/Contacto';
import About from './components/About/About';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  

  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path ="/contacto" element={<Contacto/>}/>
          <Route exact path ="/" element={<ItemListContainer subtitulo="BIENVENIDO A MI TIENDA"/>}/>
          <Route exact path ="/categorias/:categoria" element={<ItemListContainer subtitulo="PRODUCTOS"/>}/>
          <Route exact path ="/items/:id" element={<ItemDetailContainer />}/>
          
    
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
