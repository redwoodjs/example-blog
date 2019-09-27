import { BrowserRouter, Switch, Route } from '@hammerframework/hammer-web'
import { useState } from 'react'

import AdminLayout from 'src/layouts/AdminLayout'
import SingleArticlePage from 'src/pages/SingleArticlePage'
import ArticleSummariesPage from 'src/pages/ArticleSummariesPage'
import TaggedArticlesPage from 'src/pages/TaggedArticlesPage'
import NotFoundPage from 'src/pages/NotFoundPage'

const Routes = () => {
  const [articles] = useState([])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact>
          <AdminLayout />
        </Route>

        <Route path="/" exact>
          <ArticleSummariesPage articles={articles} />
        </Route>
        <Route path="/posts/:slug">
          <SingleArticlePage articles={articles} />
        </Route>
        <Route path="/tags/:tag">
          <TaggedArticlesPage articles={articles} />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
