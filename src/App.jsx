import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/landing';
import RegisterPage from './pages/RegisterPage';
import Weather from './pages/weather';
import TractorsPage from './pages/tractor';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrdersPage from './pages/OrdersPage';
import FertilizerCalculator from './pages/FertilizerCalculator';
import ExpertCards from './components/ExpertCards';
import AppointmentsPage from "./pages/AppointmentsPage";


function App() {
  const [appointments, setAppointments] = useState([]);

  const handleBookAppointment = (newAppointment) => {
    setAppointments((prev) => [...prev, newAppointment]);
  };

  return (
    <>
      {/* Background image wrapper */}
      <div className="min-h-screen bg-cover bg-[url('/bg5.jpg')] bg-center bg-no-repeat">
        <div className="bg-opacity-80 min-h-screen">
          <Navbar />
          
          {/* ✅ All routes go here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/tractors" element={<TractorsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/fertilizer" element={<FertilizerCalculator />} />
            <Route
          path="/advisor"
          element={
            <ExpertCards
              onBookAppointment={handleBookAppointment}
              appointments={appointments}
            />}/>
          <Route path="/appointments" element={<AppointmentsPage appointments={appointments} />} />

          </Routes>

          <Footer />
        </div>
      </div>

      {/* ✅ Toast container placed outside Routes */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;

