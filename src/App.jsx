// components
import Home from "./components/Home";
import DataProvider from "./components/Context/Context";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
