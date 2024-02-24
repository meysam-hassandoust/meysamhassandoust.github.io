import { Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Cv from "./components/CV/Cv";
import Research from "./components/Research/Research";
import Problems from "./components/Problems/Problems";
import Note from "./components/Note/Note";
import Competitions from "./components/Competitions/Competitions";

function App() {
  return (
    <>
      <div className="fixed  text-white h-full w-full ">
        <div className="h-auto min-h-[10%] bg-gray-800 flex justify-center items-center">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cv" element={<Cv></Cv>}></Route>
          <Route path="/research" element={<Research></Research>}></Route>
          <Route path="/problems" element={<Problems></Problems>}></Route>
          <Route path="/notes" element={<Note></Note>}></Route>
          <Route path="/competitions" element={<Competitions></Competitions>}></Route>



        </Routes>
      </div>
    </>
  );
}

export default App;
