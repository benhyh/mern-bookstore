import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<CreateBook />} />
        <Route path="" element={<ShowBook />} />
        <Route path="" element={<EditBook />} />
        <Route path="" element={<DeleteBook />} />
      </Routes>
    </>
  );
};

export default App;
