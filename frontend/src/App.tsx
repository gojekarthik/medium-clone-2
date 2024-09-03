import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { Blog } from "./pages/blog";
import { BlogHome } from "./pages/bloghome";
import { Publish } from "./pages/publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
