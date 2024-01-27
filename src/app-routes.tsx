import {withNavigationWatcher} from './contexts/navigation';
import Posts from './pages/posts/posts';
import Candidates from './pages/candidates/Candidates';
import {HomePage} from './pages';
import PostDetail from './pages/postDetail/PostDetail';
import Users from './pages/users/Users';
import UserDetail from './pages/userDetail/UserDetail';
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
    element:Users
  },
  {
    path:"/users/detail/:id",
    element:UserDetail
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
