import { BrowserRouter, Switch, Route } from '@hammerframework/hammer-web'
import { useState } from 'react'

import AdminLayout from 'src/layouts/AdminLayout'
import SingleArticlePage from 'src/pages/SingleArticlePage'
import ArticleSummariesPage from 'src/pages/ArticleSummariesPage'
import TaggedArticlesPage from 'src/pages/TaggedArticlesPage'
import NotFoundPage from 'src/pages/NotFoundPage'

import hammer1 from 'src/images/lump.png'
import hammer2 from 'src/images/mallet.png'
import hammer3 from 'src/images/peen.png'

const Routes = () => {
  const [articles] = useState([
    {
      id: 1,
      title: 'Crucible Tool Lump Hammer',
      slug: 'crucible-tool-lump-hammer',
      author: 'Rob Cameron',
      postedAt: '2019-08-20 12:00:00',
      body:
        'Lorem ipsum dolor amet single-origin coffee freegan man braid flannel flexitarian' +
        'whatever literally meh. Taiyaki vexillologist lumbersexual poke paleo fanny pack' +
        'fixie waistcoat organic roof party godard chillwave heirloom. Banjo craft beer air' +
        'plant, waistcoat jean shorts helvetica affogato literally hoodie vinyl' +
        'intelligentsia tattooed 8-bit distillery meditation. Sartorial raclette iPhone' +
        'succulents, typewriter beard PBR&B. Crucifix street art echo park beard godard' +
        'williamsburg edison bulb hell of hexagon 8-bit everyday carry etsy.\n\n' +
        'Fanny pack lyft tousled kogi.Affogato shaman everyday carry beard kombucha gentrify,' +
        'forage kinfolk normcore chillwave snackwave.Keffiyeh beard knausgaard distillery tumeric' +
        'wolf ethical, wayfarers pok pok + 1 celiac.Vape schlitz fam viral tofu sriracha. Polaroid' +
        'retro cred farm - to - table vexillologist tousled.Viral farm - to - table before they' +
        'sold out man bun neutra.Try - hard tofu flexitarian bushwick tote bag.',
      image: hammer1,
      tags: ['hammer', 'woodworking', 'steel', 'wood'],
    },
    {
      id: 2,
      title: 'Blue Spruce Toolworks Round Mallet',
      slug: 'blue-spruce-toolworks-round-mallet',
      author: 'Rob Cameron',
      postedAt: '2019-08-15 12:00:00',
      body:
        'Vaporware leggings lo-fi plaid edison bulb, cray 8-bit keffiyeh drinking vinegar health' +
        'goth ugh. Aesthetic paleo microdosing tbh, prism keytar mustache vegan flannel. Kitsch' +
        "seitan yr, cred salvia 90's actually viral microdosing +1 snackwave. Direct trade " +
        'bushwick wolf edison bulb brunch hammock raw denim ramps woke pug jean shorts ' +
        'stumptown.\n\nTumeric tacos forage mixtape listicle.Pinterest adaptogen vinyl ' +
        'lumbersexual, bitters normcore vape listicle dreamcatcher humblebrag.Knausgaard ' +
        'unicorn adaptogen celiac.Biodiesel authentic stumptown, photo booth unicorn trust ' +
        'fund woke street art knausgaard wayfarers seitan.',
      image: hammer2,
      tags: ['hammer', 'woodworking', 'acrylic', 'wood'],
    },
    {
      id: 3,
      title: 'Lie-Nielsen Cross Peen Hammer',
      slug: 'lie-nielsen-cross-peen-hammer',
      author: 'Rob Cameron',
      postedAt: '2019-08-10 12:00:00',
      body:
        'Forage adaptogen brooklyn, waistcoat PBR&B man bun shaman truffaut blog ugh. Tousled' +
        'pug blue bottle copper mug poutine ethical taiyaki craft beer helvetica. Adaptogen' +
        'poke pop-up, tattooed truffaut fam helvetica before they sold out la croix photo ' +
        'booth quinoa. Pickled echo park palo santo tumblr truffaut chicharrones snackwave ' +
        'hella prism forage listicle. Flexitarian affogato locavore try-hard, tbh kombucha ' +
        'woke echo park listicle kinfolk drinking vinegar cliche. Cold-pressed pok pok ' +
        "sartorial tousled, succulent you probably haven't heard of them gochujang selvage.",
      image: hammer3,
      tags: ['hammer', 'woodworking', 'a2', 'hardended', 'steel', 'wood'],
    },
  ])

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
