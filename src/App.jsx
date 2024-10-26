import "./App.css";
import Header from "./home/header/header";
import Main from "./home/main/main";

function App() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Header />
      <Main />
    </div>
  );
}

export default App;
