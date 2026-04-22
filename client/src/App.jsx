import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Features from "./components/Features";
import Footer from "./components/Footer";

// Home Page
function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

// Protected Route
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Auth />;
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;