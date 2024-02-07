import {withNavigationWatcher} from './contexts/navigation';
import {HomePage} from './pages';
import Users from './pages/users/Users';
import UserDetail from './pages/userDetail/UserDetail';
import Products from './pages/products/products';
import ProductDetail from './pages/productDetail/ProductDetail';
const routes = [
  {
    path:"/home",
    element:HomePage
  },
  {
    path:"/product",
    element:Products
  },
  {
    path:"/product/detail/:id",
    element:ProductDetail
  },
  {
    path:"/users",
    element:Users
  },
  {
    path:"/users/detail/:id",
    element:UserDetail
  }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
