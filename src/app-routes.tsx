import {withNavigationWatcher} from './contexts/navigation';
import Posts from './pages/posts/posts';
import CustomizePosts from './pages/customizePosts/CustomizePosts';
const routes = [
  {
    path:"/plain/posts",
    element:Posts
  },
  {
    path:"/customize/posts",
    element:CustomizePosts
  }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
