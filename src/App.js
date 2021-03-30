import "./App.css";
import Mensaje from "./mensaje";
function App() {
  return (
    <div className="App">
      <Mensaje color={"green"} message={"Hola Jorge"} />
      <Mensaje color={"black"} message={"Esto es React"} />
      <Mensaje color={"yellow"} message={"Lo que Aprendere al 100%"} />
    </div>
  );
}

export default App;
