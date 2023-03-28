/* eslint-disable import/prefer-default-export */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../pages/home';
import NewOrder from '../pages/newOrder';
import { NotFound } from '../pages/notFound';
import OrderDetails from '../pages/orderDetails';
import OrderList from '../pages/orderList';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route path="/" element={<Home />} />
      <Route path="/newOrder" element={<NewOrder />} />
      <Route path="/orderList" element={<OrderList />} />
      <Route path="/:orderArrayId" element={<OrderDetails />} />
    </Route>
  )
);
