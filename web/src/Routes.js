import AboutPage from 'src/pages/AboutPage'
import AdminPostsPage from 'src/pages/admin/PostsPage'
import AdminNewPostPage from 'src/pages/admin/NewPostPage'
import AdminEditPostPage from 'src/pages/admin/EditPostPage'
import ContactPage from 'src/pages/ContactPage'
import PostPage from 'src/pages/PostPage'
import HomePage from 'src/pages/HomePage'
import TaggedPostsPage from 'src/pages/TaggedPostsPage'
import SearchPage from 'src/pages/SearchPage'
import NotFoundPage from 'src/pages/NotFoundPage'

import { Router, Route } from 'src/lib/HammerRouter'

// const Routes = () => {
//   return (
//     <Router>
//       <Route path="/" page={HomePage} />
//     </Router>
//   )
// }

const Routes = () => {
  return (
    <Router>
      <Route path="/admin" page={AdminPostsPage} name="admin" />
      <Route path="/admin/new" page={AdminNewPostPage} name="adminNew" />
      <Route path="/admin/:id/edit" page={AdminEditPostPage} name="adminEdit" />

      <Route path="/" page={HomePage} name="home" />
      <Route path="/page/:page" page={HomePage} name="page" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/posts/:slug" page={PostPage} name="post" />
      <Route path="/tags/:tag" page={TaggedPostsPage} name="tag" />
      <Route path="/search/:term" page={SearchPage} name="search" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

// const Routes = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/admin" exact>
//           <AdminPostsPage />
//         </Route>
//         <Route path="/admin/new">
//           <AdminNewPostPage />
//         </Route>
//         <Route path="/admin/:id/edit">
//           <AdminEditPostPage />
//         </Route>

//         <Route path="/" exact>
//           <HomePage />
//         </Route>
//         <Route path="/page/:page" exact>
//           <HomePage />
//         </Route>
//         <Route path="/about" exact>
//           <AboutPage />
//         </Route>
//         <Route path="/contact" exact>
//           <ContactPage />
//         </Route>
//         <Route path="/posts/:slug">
//           <PostPage />
//         </Route>
//         <Route path="/tags/:tag">
//           <TaggedPostsPage />
//         </Route>
//         <Route path="/search/:term">
//           <SearchPage />
//         </Route>

//         <Route>
//           <NotFoundPage />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   )
// }

export default Routes
