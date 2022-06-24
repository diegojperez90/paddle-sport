import Header from "./Components/Header/Header";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
