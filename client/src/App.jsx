import { Routes, Route } from "react-router";
import Footer from "./components/home/Footer";
import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";

const App = () => {
  return (
    <div className="mt-20 ">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/sign-up" element={<SignUpPage />} />

        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
