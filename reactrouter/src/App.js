import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

// code formatted with Prettier

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        background: "pink",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "whitesmoke",
          background: "black",
          textAlign: "center",
        }}
      >
        Welcome to React router
      </h1>
      <BrowserRouter>
        <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
