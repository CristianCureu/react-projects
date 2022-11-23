import { BrowserRouter, Routes, Route } from "react-router-dom";
import Builder from "./pages/Builder";
import Main from "./pages/Main";

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/builder" element={<Builder />} />
    </Routes>
  </BrowserRouter>
  )

}

export default Router;
