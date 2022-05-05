import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import OderReview from './Components/OrderReview/OderReview';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/review" element={<OderReview />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
