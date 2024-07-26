import './App.css';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';
import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes >
      <Route path="Little-Lemon/" element={ <HomePage /> }/>
      <Route path='Little-Lemon/Booking' element={ <BookingPage/> } />
    </Routes>
    </>
  );
}
export default App;