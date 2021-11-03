import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";
import "./App.css";
import "./components/RestrictedPage/style.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Théo";

  const Login = () => {
    setIsLoggedIn(true);
  };

  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <RestrictedPage
        isLoggedIn={isLoggedIn}
        user={user}
        Login={Login}
        Logout={Logout}
      />
    </div>
  );
}

export default App;
