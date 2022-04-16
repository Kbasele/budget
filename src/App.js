import logo from "./logo.svg";
import "./App.css";
import { Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GlobalContextProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Switch>
        <Route exact path="/" element={<HomePage />} />
      </Switch>
    </GlobalContextProvider>
  );
}

export default App;
