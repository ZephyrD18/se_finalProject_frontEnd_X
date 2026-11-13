import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { searchNews } from "../../utils/newsApi";
import {
  sampleArticles,
  SEARCH_STORAGE_KEY,
  TOKEN_KEY,
} from "../../utils/constants";
import { useEffect, useState } from "react";
import { readJson, writeJson } from "../../utils/storage";
import { authorize, checkToken, register } from "../../utils/auth";

import LoginModal from "../LoginModal/LoginModal";
import SavedNews from "../SavedNews/SavedNews";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import SuccessModal from "../SuccessModal/SuccessModal";

import "./App.css";

const emptySearch = { status: "idle", keyword: "", articles: [] };

function getStoredSearch() {
  const search = readJson(SEARCH_STORAGE_KEY, null);
  return search?.status === "success" ? search : emptySearch;
}

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(
    () => !localStorage.getItem(TOKEN_KEY),
  );
  const [modalError, setModalError] = useState("");
  const [search, setSearch] = useState(getStoredSearch);
  const [activeModal, setActiveModal] = useState("");

  const isLoggedIn = Boolean(currentUser);
  const location = useLocation();
  const headerTheme = location.pathname === "/" ? "dark" : "light";
  const navigate = useNavigate();
  const isLoginRequested = Boolean(location.state?.openLogin);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return;
    checkToken(token)
      .then((user) => setCurrentUser(user))
      .catch(() => localStorage.removeItem(TOKEN_KEY))
      .finally(() => setIsAuthChecked(true));
  }, []);
  const currentModal = activeModal || (isLoginRequested ? "login" : "");

  const openModal = (name) => {
    setModalError("");
    setActiveModal(name);
  };

  const closeModal = () => {
    setModalError("");
    setActiveModal("");
    if (isLoginRequested)
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

  const handleLogin = (values) => {
    authorize(values)
      .then(({ token }) => {
        localStorage.setItem(TOKEN_KEY, token);
        return checkToken(token);
      })
      .then((user) => {
        setCurrentUser(user);
        closeModal();
      })
      .catch((err) => setModalError(err.message));
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setCurrentUser(null);
    navigate("/");
  };

  const handleRegister = (values) => {
    register(values)
      .then(() => openModal("success"))
      .catch((err) => setModalError(err.message));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          theme={headerTheme}
          isLoggedIn={isLoggedIn}
          onSignInClick={() => openModal("login")}
          onLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/"
            element={<Main search={search} onSearch={handleSearch} />}
          />

          <Route
            path="/saved-news"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                isAuthChecked={isAuthChecked}
              >
                <SavedNews articles={sampleArticles} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        {currentModal === "login" && (
          <LoginModal
            onClose={closeModal}
            onSubmit={handleLogin}
            onSwitch={() => openModal("register")}
            serverError={modalError}
          />
        )}
        {currentModal === "register" && (
          <RegisterModal
            onClose={closeModal}
            onSwitch={() => openModal("login")}
            onSubmit={handleRegister}
            serverError={modalError}
          />
        )}
        {currentModal === "success" && (
          <SuccessModal
            onClose={closeModal}
            onSignInClick={() => openModal("login")}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
