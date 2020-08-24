import { Router, Route } from '@redwoodjs/router'

// disables /admin routes unless USE_ADMIN=enable
const showAdmin = process.env.USE_ADMIN === 'enable' ? true : false

const Routes = () => {
  return (
    <Router>
      {showAdmin && <Route path="/admin" page={AdminPostsPage} name="admin" />}
      {showAdmin && (
        <Route path="/admin/new" page={AdminNewPostPage} name="adminNew" />
      )}
      {showAdmin && (
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
