import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <Header theme="dark" />
      <SearchForm />
      <About />
      <Footer />
    </div>
  );
}

export default App;
