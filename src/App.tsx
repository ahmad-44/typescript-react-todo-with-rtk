import "./App.css";
import AddTodos from "./components/AddTodos";
import AllTodos from "./components/AllTodos";
import Header from "./components/Header";
function App() {
  return (
    <div className="">
      <Header />
      <AddTodos />
      <AllTodos />
    </div>
  );
}

export default App;
