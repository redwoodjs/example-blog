import { Router, Private, Route, Set } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'
import AdminLayout from 'src/layouts/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Set wrap={AdminLayout}>
          <Route path="/admin" page={AdminPostsPage} name="admin" />
          <Route path="/admin/new" page={AdminNewPostPage} name="adminNew" />
          <Route
            path="/admin/{id}/edit"
            page={AdminEditPostPage}
            name="adminEdit"
          />
        </Set>
      </Private>

      <Set wrap={BlogLayout}>
        <Route path="/" page={HomePage} name="home" prerender />
        <Route path="/page/{page}" page={HomePage} name="page" />
        <Route path="/about" page={AboutPage} name="about" prerender />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/posts/{slug}" page={PostPage} name="post" />
        <Route path="/tags/{tag}" page={TaggedPostsPage} name="tag" />
        <Route path="/search/{term}" page={SearchPage} name="search" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
