import NavBar from './components/NavBar/NavBar'; 
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <BrowserRouter path='/First-React' element={<ItemListContainer greeting={"Bienvenidos"}/>}>
        <NavBar />
        <Routes>

          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
