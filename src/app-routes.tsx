import {withNavigationWatcher} from './contexts/navigation';
import Posts from './pages/posts/posts';
import CustomizePosts from './pages/customizePosts/CustomizePosts';
const routes = [
  {
    path:"/posts",
    element:Posts
  },
  {
    path:"/customize/users",
    element:CustomizePosts
  }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
