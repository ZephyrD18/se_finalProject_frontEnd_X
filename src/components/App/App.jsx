import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import SavedNews from "../SavedNews/SavedNews";
import { sampleArticles } from "../../utils/constants";
import { useState } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  const headerTheme = location.pathname === "/" ? "dark" : "light";
  const navigate = useNavigate();
  const isLoginRequested = Boolean(location.state?.openLogin);

  const closeModal = () => {
    navigate(location.pathname, { replace: true, state: null });
  };

  return (
    <div className="page">
      <Header theme={headerTheme} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Main />} />
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
