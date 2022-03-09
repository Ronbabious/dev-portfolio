import "./App.css";
import Center from "./components/Center";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-gray-800 h-screen overflow-y-scroll">
      <header className="bg-gray-800 float-left fixed w-1/6 align-middle">
        <Sidebar />
      </header>
      <main className="bg-gray-800 float-right w-5/6 scrollbar-hide p-2">
        <Center />
      </main>
    </div>
  );
}

export default App;
