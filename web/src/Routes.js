import { BrowserRouter, Switch, Route } from '@hammerframework/hammer-web'
import AdminPostsPage from 'src/pages/admin/PostsPage'
import AdminNewPostPage from 'src/pages/admin/NewPostPage'
import AdminEditPostPage from 'src/pages/admin/EditPostPage'
import PostPage from 'src/pages/PostPage'
import PostSummariesPage from 'src/pages/PostSummariesPage'
import TaggedPostsPage from 'src/pages/TaggedPostsPage'
import SearchPage from 'src/pages/SearchPage'
import NotFoundPage from 'src/pages/NotFoundPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact>
          <AdminPostsPage />
        </Route>
        <Route path="/admin/new">
          <AdminNewPostPage />
        </Route>
        <Route path="/admin/:id/edit">
          <AdminEditPostPage />
        </Route>

        <Route path="/" exact>
          <PostSummariesPage />
        </Route>
        <Route path="/posts/:slug">
          <PostPage />
        </Route>
        <Route path="/tags/:tag">
          <TaggedPostsPage />
        </Route>
        <Route path="/search/:term">
          <SearchPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
