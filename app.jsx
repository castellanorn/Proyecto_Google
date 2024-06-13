import { useState } from "react";
import { FooterNet, FooterPolicy } from "./components/FootRed";

import NavLogo from "../src/img/google-logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="www.google.com" target="_blank">
          <img src={NavLogo} className="logo" alt="Google logo" />
        </a>
      </div>
      <h1>Hola Equipo Las Riak</h1>

      <FooterPolicy />

      <FooterNet />
    </>
  );
}

export default App;