import Header from "./Components/Header/Header";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div className="App">
      <Header/>
      <ItemListContainer 
        greeting = 'Bienvenidos a Paddle Sport' 
        subtitulo = 'Nuestra tienda online de productos de Paddle'
      />
      <ItemDetailContainer greeting='DETALLE DEL PRODUCTO'/>
    </div>
  );
}

export default App;
