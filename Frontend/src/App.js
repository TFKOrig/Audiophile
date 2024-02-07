import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Earphone,
  Headphone,
  Home,
  Speaker,
  XX59,
  XX99Mark1,
  XX99Mark2,
  YX1,
  ZX7,
  ZX9,
} from "./pages";
import { Form } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphone />} />
          <Route path="/speakers" element={<Speaker />} />
          <Route path="/earphones" element={<Earphone />} />
          <Route path="/xx99mark1" element={<XX99Mark1 />} />
          <Route path="/xx99mark2" element={<XX99Mark2 />} />
          <Route path="/xx59" element={<XX59 />} />
          <Route path="/zx9" element={<ZX9 />} />
          <Route path="/zx7" element={<ZX7 />} />
          <Route path="/yx1" element={<YX1 />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
