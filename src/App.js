import NavBar from './components/NavBar/NavBar'; 
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/NavBar/Cart/Cart';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
          
            <Route path='/First-React' element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>ç
            <Route path='/cart' element={<Cart />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
