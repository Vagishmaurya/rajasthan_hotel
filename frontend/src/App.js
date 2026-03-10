import { Route, Routes } from "react-router-dom";
import { Main } from "./components/HomePage/Main";
import { Search } from "./components/SearchPage/Search";
import { HotelDetail } from "./components/Booking_page/HotelDetail";
import { BookingConfirmation } from "./components/Booking_page/BookingConfirmation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/hotel/:id" exact element={<HotelDetail />} />
        <Route path="/booking/:id" exact element={<BookingConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
