import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CoursesPage from "./pages/Course";
import ChapterPage from "./pages/ChapterPage";
import AboutUs from "./pages/AboutUs";
 

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:subject/:chapter" element={<ChapterPage />} />
           <Route path="/About-us" element={< AboutUs />} />
            
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
