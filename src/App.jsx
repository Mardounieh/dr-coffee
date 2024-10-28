import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/UI/Header/Header";

function App() {
  return (
    <div className="w-full flex flex-col items-center gap-10 selection:bg-red-700 selection:text-white">
      <Header />
      <Home />
    </div>
  );
}

export default App;
