import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SavedNews from "../SavedNews/SavedNews";
import { sampleArticles } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const location = useLocation();
  const headerTheme = location.pathname === "/" ? "dark" : "light";

  return (
    <div className="page">
      <Header theme={headerTheme} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/saved-news"
          element={<SavedNews articles={sampleArticles} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
