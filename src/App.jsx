import "./App.css";
import Center from "./components/Center";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen">
      <header className="bg-linen float-left fixed w-1/5 align-middle">
        <Sidebar />
      </header>
      <main className="bg-linen float-right w-4/5  p-2">
        <Center />
      </main>
    </div>
  );
}

export default App;
