import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignInForm from "./pages/SignInForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/react-admin-dashboard/"
            index
            element={<SignInForm />}
          />
          <Route
            path="/react-admin-dashboard/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
