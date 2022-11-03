import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contacto from './components/Contacto/Contacto';
import About from './components/About/About';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import Carrito from './components/Carrito/Carrito';
import UseCartContext from './context/CartContext'
import { firestoreInit } from './services/firebaseService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
firestoreInit()

function App() {
  

  return (
    <Router>
      <UseCartContext>
        <div className="App">
          <NavBar></NavBar>
          <Routes>
          <Route exact path ="/" element={<Home/>}/>
            <Route exact path ="/productos" element={<ItemListContainer subtitulo="TODOS NUESTROS PRODUCTOS"/>}/>
            <Route exact path ="/categorias/:categoria" element={<ItemListContainer/>}/>
            <Route exact path ="/items/:id" element={<ItemDetailContainer />}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path ="/contacto" element={<Contacto/>}/>
            <Route exact path ="/cart" element={<Carrito/>}/>
          </Routes>
          <Footer></Footer>
        </div>
      </UseCartContext>
    </Router>
  );
}

export default App;
