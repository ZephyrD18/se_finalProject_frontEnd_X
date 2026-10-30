import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

function App() {
  return (
    <div className="page">
      <Header theme="light" />
      <SearchForm />
      <About />
    </div>
  );
}

export default App;
