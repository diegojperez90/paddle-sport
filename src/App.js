import Header from "./Components/Header/Header";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { CartContextProvider } from "./context/CartContext";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={
              <ItemListContainer 
                greeting = 'Bienvenidos a Paddle Sport' 
                subtitulo = 'Nuestra tienda online de productos de Paddle'
              />
            }/>
            <Route path="/:id" element={
              <ItemDetailContainer greeting='DETALLE DEL PRODUCTO'/>
            }/>
            <Route path="/category/:marca" element={
              <ItemListContainer greeting= "Categoria"/>
            }/>
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;
