import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { fromJSON } from "postcss";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Blogs from "./components/Blog/Blogs";
import Announcement from "./pages/Announcement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/announcements" element={<Announcement />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
