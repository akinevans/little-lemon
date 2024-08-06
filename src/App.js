import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import ConfirmationPage from "./pages/ConfirmationPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservations' element={<Reservations />} />
      <Route path='/order-online' element={<OrderOnline />} />
      <Route path='/login' element={<Login />} />
      <Route path='/confirmation-page' element={<ConfirmationPage />} />
    </Routes>
  );
};

export default App;
