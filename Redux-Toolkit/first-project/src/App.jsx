import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-[100%] h-screen flex  justify-center items-center">
        <div className="text-center bg-black w-[90%] h-56 rounded-md">
          <h1 className="text-2xl mb-3">Todo App</h1>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
