import Header from "./Components/Header/Header";
import ContainerCards from "./Components/ContainerCards/ContainerCards";

function App() {


  return (
    <div className="App">
      <Header/>
      <ContainerCards 
        greeting = 'Bienvenidos a Paddle Sport' 
        subtitulo = 'Nuestra tienda online de productos de Paddle'
      />
    </div>
  );
}

export default App;
