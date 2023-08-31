import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BlogPage from "./pages/blog/BlogPage";
import AboutPage from "./pages/about/AboutPage";
import DatePage from "./pages/date/DatePage";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import { useWillChange } from "framer-motion";
import useWindowSize from "./hooks/useWindowSize";
import BlogDetails from "./pages/blog/BlogDetails";
import { Helmet } from "react-helmet";
function App() {
  const size = useWindowSize().width

  return (
    <div>
      
      <Router>
        <Helmet>
          <title>Avukat Ayşenur Ertan</title>
          <meta  name="description"
          content="Avukat Ayşenur Ertan website"
          >
          
          </meta>
          <meta name="keywords" content="Avukat, Ayşenur Ertan, AyşenurErtan, Avukat Ayşenur Ertan, Avukat Sayfası , Randevu, Blog, Hakkımda, Ertan Hukuk , Hukuk ,  "></meta>
        </Helmet>
      {size<=768 ?   <Sidebar></Sidebar> : <Navbar></Navbar>}
        <Routes>

          <Route
            path="/"
            element={
          <HomePage></HomePage>
            }
          ></Route>
          <Route
            path="/about"
            element={
          <AboutPage></AboutPage>
            }
          ></Route>
          <Route
            path="/date"
            element={
          <DatePage></DatePage>
            }
          ></Route>
          <Route
            path="/blog"
            element={
          <BlogPage></BlogPage>
            }
          ></Route>
          <Route
            path="/blog/:id"
            element={
          <BlogDetails></BlogDetails>
            }
          ></Route> 
        </Routes>
  <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
