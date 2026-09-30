import { HashRouter, Routes, Route } from "react-router-dom";
import Aside from "./component/Aside.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutProjectPage from "./pages/AboutProjectPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import Footer from "./component/Footer.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";

import "./styles/main.scss";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Aside />
        <div className="app-content">
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutProject" element={<AboutProjectPage />} />
              <Route path="/componentGuide" element={<GuidePage />} />
              <Route path="/learning" element={<LearningPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
