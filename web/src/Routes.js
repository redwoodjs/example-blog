import { Router, Private, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Route path="/admin" page={AdminPostsPage} name="admin" />
        <Route path="/admin/new" page={AdminNewPostPage} name="adminNew" />
        <Route
          path="/admin/{id}/edit"
          page={AdminEditPostPage}
          name="adminEdit"
        />
      </Private>

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
