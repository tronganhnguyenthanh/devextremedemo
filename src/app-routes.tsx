import {withNavigationWatcher} from './contexts/navigation';
import Posts from './pages/posts/posts';
import CustomizePosts from './pages/customizePosts/CustomizePosts';
import Candidates from './pages/candidates/Candidates';
const routes = [
  {
    path:"/posts",
    element:Posts
  },
  {
    path:"/users",
    element:CustomizePosts
  },
  {
    path:"/candidates/list",
    element:Candidates
  }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
