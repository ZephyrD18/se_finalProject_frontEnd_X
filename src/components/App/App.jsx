import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { searchNews } from "../../utils/newsApi";
import { sampleArticles, SEARCH_STORAGE_KEY } from "../../utils/constants";
import { useState } from "react";
import { readJson, writeJson } from "../../utils/storage";

import LoginModal from "../LoginModal/LoginModal";
import SavedNews from "../SavedNews/SavedNews";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import "./App.css";

const emptySearch = { status: "idle", keyword: "", articles: [] };

function getStoredSearch() {
  const search = readJson(SEARCH_STORAGE_KEY, null);
  return search?.status === "success" ? search : emptySearch;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [search, setSearch] = useState(getStoredSearch);
  const location = useLocation();
  const headerTheme = location.pathname === "/" ? "dark" : "light";
  const navigate = useNavigate();
  const isLoginRequested = Boolean(location.state?.openLogin);

  const closeModal = () => {
    navigate(location.pathname, { replace: true, state: null });
  };

  const handleSearch = (keyword) => {
    setSearch({ status: "loading", keyword, articles: [] });
    searchNews(keyword)
      .then((articles) => {
        const result = { status: "success", keyword, articles };
        setSearch(result);
        writeJson(SEARCH_STORAGE_KEY, result);
      })

      .catch(() => setSearch({ status: "error", keyword, articles: [] }));
  };

  return (
    <div className="page">
      <Header theme={headerTheme} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={<Main search={search} onSearch={handleSearch} />}
        />

        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews articles={sampleArticles} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      {isLoginRequested && (
        <LoginModal onClose={closeModal} onSwitch={() => {}} />
      )}
    </div>
  );
}

export default App;
