import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MajorPage from "./pages/MajorPage";
import SemesterPage from "./pages/SemesterPage";
import PdfViewPage from "./pages/PdfViewPage";
import Error404Page from "./pages/Error404Page";

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

          <Route path="/*" element={<Error404Page/>}/>

        </Routes>

      </main>

      <Footer/>

    </div>

  );
}

export default App;
