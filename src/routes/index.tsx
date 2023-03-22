import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import NewOrder from '../pages/newOrder';
import OrderList from '../pages/orderList';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newOrder" element={<NewOrder />} />
        <Route path="/orderList" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}
