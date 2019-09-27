/* eslint-disable no-console */

const Photon = require('../generated/photon')
const photon = new Photon({ debug: true })

async function asyncForEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function main () {
  const tagData = [
    {
      name: 'wood',
    },
    {
      name: 'steel',
    },
    {
      name: 'acrylic',
    },
    {
      name: 'woodworking',
    },
  ]

  const tags = []

  await asyncForEach(tagData, async (tag) => {
    tags.push(
      await photon.tags.create({
        data: tag,
      })
    )
  })

  const postData = [
    {
      title: 'Crucible Tool Lump Hammer',
      slug: 'crucible-tool-lump-hammer',
      author: 'Rob Cameron',
      postedAt: new Date('2019-08-20 12:00:00'),
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
      image: 'lump.png',
      tags: {
        connect: [{ id: tags[0].id }, { id: tags[1].id }, { id: tags[2].id }],
      },
    },
    {
      title: 'Blue Spruce Toolworks Round Mallet',
      slug: 'blue-spruce-toolworks-round-mallet',
      author: 'Rob Cameron',
      postedAt: new Date('2019-08-15 12:00:00'),
      body:
        'Vaporware leggings lo-fi plaid edison bulb, cray 8-bit keffiyeh drinking vinegar health' +
        'goth ugh. Aesthetic paleo microdosing tbh, prism keytar mustache vegan flannel. Kitsch' +
        "seitan yr, cred salvia 90's actually viral microdosing +1 snackwave. Direct trade " +
        'bushwick wolf edison bulb brunch hammock raw denim ramps woke pug jean shorts ' +
        'stumptown.\n\nTumeric tacos forage mixtape listicle.Pinterest adaptogen vinyl ' +
        'lumbersexual, bitters normcore vape listicle dreamcatcher humblebrag.Knausgaard ' +
        'unicorn adaptogen celiac.Biodiesel authentic stumptown, photo booth unicorn trust ' +
        'fund woke street art knausgaard wayfarers seitan.',
      image: 'mallet.png',
      tags: {
        connect: [{ id: tags[0].id }, { id: tags[2].id }, { id: tags[3].id }],
      },
    },
    {
      title: 'Lie-Nielsen Cross Peen Hammer',
      slug: 'lie-nielsen-cross-peen-hammer',
      author: 'Rob Cameron',
      postedAt: new Date('2019-08-10 12:00:00'),
      body:
        'Forage adaptogen brooklyn, waistcoat PBR&B man bun shaman truffaut blog ugh. Tousled' +
        'pug blue bottle copper mug poutine ethical taiyaki craft beer helvetica. Adaptogen' +
        'poke pop-up, tattooed truffaut fam helvetica before they sold out la croix photo ' +
        'booth quinoa. Pickled echo park palo santo tumblr truffaut chicharrones snackwave ' +
        'hella prism forage listicle. Flexitarian affogato locavore try-hard, tbh kombucha ' +
        'woke echo park listicle kinfolk drinking vinegar cliche. Cold-pressed pok pok ' +
        "sartorial tousled, succulent you probably haven't heard of them gochujang selvage.",
      image: 'peen.png',
      tags: {
        connect: [{ id: tags[0].id }, { id: tags[1].id }, { id: tags[3].id }],
      },
    },
  ]

  const posts = []

  await asyncForEach(postData, async (post) => {
    posts.push(
      await photon.posts.create({
        data: post,
      })
    )
  })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
