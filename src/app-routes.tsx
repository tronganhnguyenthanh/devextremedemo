import {HomePage} from './pages';
import {withNavigationWatcher} from './contexts/navigation';
import Posts from './pages/posts/posts';
const routes = [
  {
    path:"/home",
    element:HomePage
  },
  {
    path:"/posts",
    element:Posts
  }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
