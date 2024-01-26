import {withNavigationWatcher} from './contexts/navigation';
import Posts from './pages/posts/posts';
import CustomizePosts from './pages/customizePosts/CustomizePosts';
import Candidates from './pages/candidates/Candidates';
import {HomePage} from './pages';
import PostDetail from './pages/postDetail/PostDetail';
const routes = [
  {
    path:"/home",
    element:HomePage
  },
  {
    path:"/posts",
    element:Posts
  },
  {
    path:"/post/detail/:id",
    element:PostDetail
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
