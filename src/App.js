import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const user = "Gustavo";

  const Login = () => {
    setLoggedIn(true);
  };
  const Logout = () => {
    setLoggedIn(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
        ></RestrictedPage>
      </header>
    </div>
  );
}

export default App;
