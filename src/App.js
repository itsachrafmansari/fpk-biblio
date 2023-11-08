import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MajorPage from "./pages/MajorPage";
import SemesterPage from "./pages/SemesterPage";
import PageNotFound from "./pages/PageNotFound";
import PdfViewPage from "./pages/PdfViewPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">

      <Header />

      <main className="mb-8 mx-auto px-2 w-full sm:w-4/5 grow">

        <Routes>

          <Route path="/" element={<HomePage/>} />

          <Route path="/:major/" element={<MajorPage/>} />
          <Route path="/filieres/:major/" element={<MajorPage/>} />

          <Route path="/:major/:semester/" element={<SemesterPage/>} />
          <Route path="/filieres/:major/:semester/" element={<SemesterPage/>} />

          <Route path="/media/:major/:semester/:module/:filename/" element={<PdfViewPage />} />

          <Route path="/*" element={<PageNotFound/>}/>

        </Routes>

      </main>

      <Footer/>

    </div>

  );
}

export default App;
