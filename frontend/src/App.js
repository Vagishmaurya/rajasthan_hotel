import { Route, Routes } from "react-router-dom";
import { Main } from "./components/HomePage/Main";
import { Search } from "./components/SearchPage/Search";
import { HotelDetail } from "./components/Booking_page/HotelDetail";
import { BookingConfirmation } from "./components/Booking_page/BookingConfirmation";
import { CarRentalsPage } from "./components/CarRentals/CarRentalsPage";
import { DesertSafariPage } from "./components/DesertSafari/DesertSafariPage";
import { PackagesPage } from "./components/Packages/PackagesPage";
import { PaymentPage } from "./components/paymentPage/PaymentPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/hotel/:id" exact element={<HotelDetail />} />
        <Route path="/payment/:id" exact element={<PaymentPage />} />
        <Route path="/booking-confirmation/:id" exact element={<BookingConfirmation />} />
        <Route path="/car-rentals" exact element={<CarRentalsPage />} />
        <Route path="/desert-safari" exact element={<DesertSafariPage />} />
        <Route path="/packages" exact element={<PackagesPage />} />
      </Routes>
    </div>
  );
}

export default App;
