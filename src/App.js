import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div className="App">
      <Header/>
      <ItemListContainer 
        greeting = 'Bienvenidos a Paddle Sport' 
        subtitulo = 'Nuestra tienda online de productos de Paddle'
      />
    </div>
  );
}

export default App;
