import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      {/* disables /admin routes unless USE_ADMIN=true
      TODO replace with Redwood Authentication */}
      {process.env.USE_ADMIN === 'true' && (
        <Route path="/admin" page={AdminPostsPage} name="admin" />
      )}
      {process.env.USE_ADMIN === 'true' && (
        <Route path="/admin/new" page={AdminNewPostPage} name="adminNew" />
      )}
      {process.env.USE_ADMIN === 'true' && (
        <Route
          path="/admin/{id}/edit"
          page={AdminEditPostPage}
          name="adminEdit"
        />
      )}
      <Route path="/" page={HomePage} name="home" />
      <Route path="/page/{page}" page={HomePage} name="page" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/posts/{slug}" page={PostPage} name="post" />
      <Route path="/tags/{tag}" page={TaggedPostsPage} name="tag" />
      <Route path="/search/{term}" page={SearchPage} name="search" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
