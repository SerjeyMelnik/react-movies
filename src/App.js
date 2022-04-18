
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviePage from "./components/MoviePage/MoviePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-movies">
        <Header />
        <Routes>
          <Route path="/movies" element={<Main />} exact />
          <Route path="/movies/movie=:id" element={<MoviePage />} exact />
          <Route path="*" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
