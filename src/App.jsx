import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/Blogs/CreateBlog";
import SingleBlog from "./pages/Blogs/SingleBlog";
import Navbar from "./components/Navbar"
import SignInCard from "./pages/auth/Signin";
const App = () => {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create_blog" element={<CreateBlog />} />
        <Route path="/single_blog?=id" element={<SingleBlog />} />
        <Route path="/signin" element={<SignInCard />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
