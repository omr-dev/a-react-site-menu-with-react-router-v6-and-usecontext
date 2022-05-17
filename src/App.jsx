import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import { Nav } from "./components/Nav";
import { PageLogin } from "./pages/PageLogin";
import { PageWelcome } from "./pages/PageWelcome";
import { PageRegister } from "./pages/PageRegister";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<PageWelcome />} />
        <Route path="register" element={<PageRegister />} />
        <Route path="login" element={<PageLogin />} />
      </Routes>
    </div>
  );
}

export default App;
