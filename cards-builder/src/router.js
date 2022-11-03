import { BrowserRouter, Routes, Route } from "react-router-dom";
import Builder from "./pages/Builder";
import Main from "./pages/Main";

function Router() {
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/builder" element={<Builder />} />
    </Routes>
  </BrowserRouter>;
}

export default Router;
