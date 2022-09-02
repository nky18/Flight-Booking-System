import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home  from "./pages/home/Home"
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel"
import Booking from "./pages/bookingDetails/Booking";
// import Flight from "./components/flightsbooking/Flight";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/Booking" element={<Booking/>}/>
    </Routes>
    
    </BrowserRouter>
  
   
  );
}

export default App;
