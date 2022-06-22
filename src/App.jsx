import "./App.scss";
import { AppProvider } from "./context";
import Home from "./pages/Home";
function App() {
  return (
    <AppProvider className="App">
      <Home />
    </AppProvider>
  );
}

export default App;
