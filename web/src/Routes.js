import { BrowserRouter, Switch, Route } from '@hammerframework/hammer-web'
import AdminLayout from 'src/layouts/AdminLayout'
import PostPage from 'src/pages/PostPage'
import PostSummariesPage from 'src/pages/PostSummariesPage'
import TaggedPostsPage from 'src/pages/TaggedPostsPage'
import NotFoundPage from 'src/pages/NotFoundPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact>
          <AdminLayout />
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

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
