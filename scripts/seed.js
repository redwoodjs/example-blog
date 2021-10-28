import { db } from '$api/src/lib/db'

export default async () => {
  try {
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
      {
        name: 'brass',
      },
    ]

    const tags = []

    for (const tag of tagData) {
      tags.push(
        await db.tag.create({
          data: tag,
        })
      )
    }

    const postData = [
      {
        title: 'Crucible Tool Lump Hammer',
        slug: 'crucible-tool-lump-hammer',
        author: 'Rob Cameron',
        postedAt: new Date('2019-08-10 12:00:00'),
        body:
          'The Crucible lump hammer has a 2.2 lb. hardened steel head and is ideal for assembly, ' +
          'mortising, setting holdfasts and dozens of other chores. Comfortable octagonal hickory ' +
          'handle with a waxed finish.\n\n' +
          'The late, great furniture maker Alan Peters often said that one of his favorite tools ' +
          'was his “lump hammer,” a British term for what Americans might call an engineer’s ' +
          'hammer or a small sledge. Peters used his lump hammer for a remarkable range of ' +
          'operations, including knocking together dovetailed carcases and drawers.\n\n' +
          'Unlike a traditional wooden mallet, the lump hammer is compact, requires less effort ' +
          'to use and packs considerable punch – a great asset when you need it. Plus, unlike a ' +
          'wooden mallet, you’ll never need to replace it.\n\n' +
          'After taking Peters’ advice on the lump hammer, we were impressed with how useful it is, ' +
          'and it has replaced the wooden mallet for many operations at the bench.\n\n' +
          'For assembling dovetailed carcases and mortise-and-tenon frames, the lump hammer has no ' +
          'equal. Choke up on the handle to administer careful taps on delicate drawers. Grip the ' +
          'handle at its end and it can deliver a wallop that can persuade joints that have ' +
          'become too tight because of the glue.\n\n' +
          'It is delicate enough to be used to strike wooden-handled chisels. Because of the weight ' +
          'of the hammer’s head, mortising requires less effort. It’s more about raising the hammer ' +
          'slightly and dropping its head on the chisel handle – low and slow. It sets and ' +
          'releases holdfasts with one authoritative blow.\n\n' +
          'The hickory handle is shorter than what you’ll find on a typical sledge, making it ' +
          'ideal for woodworking instead of breaking up rocks. The octagonal handles are ' +
          'hand-finished and then waxed.\n\n' +
          'The Crucible lump hammer weighs 2.5 lbs. overall with a 2.2 lb. head of 4140 alloy ' +
          'steel, hardened and tempered to Rc 28-32.  It is 11½” long overall with a head ' +
          'that is 1½” x 1½” x 4”. Striking faces are smooth- ground at a 5½” ' +
          'radius, and finished by hand. Designed by Raney Nelson. Made in the United States.',
        image: 'https://cdn.filestackcontent.com/uBtP96HHSsa6Kv6qjgMP',
        tags: {
          connect: [{ id: tags[0].id }, { id: tags[1].id }, { id: tags[3].id }],
        },
      },
      {
        title: 'Blue Spruce Toolworks Round Mallet',
        slug: 'blue-spruce-toolworks-round-mallet',
        author: 'Rob Cameron',
        postedAt: new Date('2019-08-15 12:00:00'),
        body:
          'There are mallets, and then there are Blue Spruce Toolworks mallets. You use ' +
          'mallets, you drool on Blue Spruce Toolworks mallets.Of course you can use the Blue ' +
          'Spruce mallets as well, but we find ourselves so enamored with them, that once we ' +
          'pick one up, we forget what we were doing anyway, lost in the reverie of a tool so ' +
          'beautiful that you could fall in love with it.\n\n' +
          'On a more practical note, the Blue Spruce mallets are actually state-of-the-art ' +
          'tools, utilizing an acrylic infused head which is exceptionally durable, while ' +
          "maintaining the beauty of natural wood.These are truly the connoisseur's mallets.\n\n" +
          'The Blue Spruce Toolworks mallets are designed to be very well balanced and durable ' +
          'to give a lifetime of service.The head of the mallet is made from beautiful curly ' +
          'maple that has been totally infused with an acrylic to fill every wood cell.This ' +
          'makes a very dense and durable head.The handle is turned from African Blackwood and ' +
          'attached to the mallet head with a stainless steel tenon.A small brass bead lends ' +
          'just a touch of elegance.These mallets will quickly become a favorite for all but ' +
          'your heaviest striking needs.',
        image: 'https://cdn.filestackcontent.com/joArZLOOQLSwqoGUGpgP',
        tags: {
          connect: [{ id: tags[0].id }, { id: tags[2].id }, { id: tags[3].id }],
        },
      },
      {
        title: 'Lie-Nielsen Cross Peen Hammer',
        slug: 'lie-nielsen-cross-peen-hammer',
        author: 'Rob Cameron',
        postedAt: new Date('2019-08-20 12:00:00'),
        body:
          'Thomas Lie-Nielsen sidled up to me with a drink in his hand, a sportscoat on his back and a sly look across his face.\n\n' +
          'He opened his green jacket to reveal… a stick.\n\n' +
          'I repressed my urge to pluck it from his jacket because I stank like a monkey’s armpit after hauling four workbenches all over the campus of Berea College for our Woodworking in America conference.\n\n' +
          'But Thomas (who raises horses and must be accustomed to large, malodorous hairy things) nodded that it was OK for me to grab the stick. I did. Then I squealed like a little girl.\n\n' +
          'It was a brass Warrington hammer and looked just like my favorite hammer of all time, the little guy shown at the top of this blog entry. I use the round end of this hammer for adjusting all my planes. A few subtle hammer taps adjust the lateral position of my iron with more accuracy than any lateral-adjust mechanism.\n\n' +
          'I’ll also use the round end to advance the irons of my planes that don’t have mechanical adjusters. Oh, and I drive small pins with this end, too.\n\n' +
          'The flat end, called the “cross pane,” is ideal for starting nails. You pinch the nail with your fingers and use the cross pane to sneak through your fingertips to strike the nail’s head. Very handy.\n\n' +
          'There are probably 100 other uses for this little hammer because I take it with me whenever I travel with my tools.\n\n' +
          'So here’s the news: Lie-Nielsen Toolworks is going to begin making this hammer in both steel and brass. I don’t have information on pricing or availability, but who cares? I’m getting a set (or two) the minute they come out.\n\n' +
          'You see, I have a hammer problem. I probably have 20 or more of them, all different. Most of them came into my hands when I wrote about hammers for Woodworking Magazine a few years back, but for some reason I can’t seem to get rid of them.\n\n' +
          'But the Warrington’s size and weight have made it my favorite shop hammer (followed quickly by my 16-ounce Maydole hammer). And soon – thanks to Lie-Nielsen – you are going to be able to see if you agree with my assessment.\n\n',
        image: 'https://cdn.filestackcontent.com/qep721l3RUCn531EBkU2',
        tags: {
          connect: [{ id: tags[0].id }, { id: tags[1].id }, { id: tags[3].id }],
        },
      },
      {
        title: "Vertias Journeyman's Brass Mallet",
        slug: 'veritas-journeymans-brass-mallet',
        author: 'Rob Cameron',
        postedAt: new Date('2019-10-01 12:00:00'),
        body:
          'This mallet can be used with a traditional grip or it can be nestled in the palm of your hand to exactly control the force used, a position preferred by carvers and sculptors or anyone doing work finer than mortising.\n\n' +
          'Unique to this type of mallet, the brass head has a blind threaded connection rather than a through hole for the handle; this gives the same feel and force to the 1 5/8" diameter top as the sides. The final turning of the handle is done after the handle is mounted, ensuring a perfectly smooth transition between brass head and cherry wood handle.\n\n' +
          'At 1¼ lb with an overall length of 6", it is as effective as it is graceful. Made in Canada.',
        image: 'https://cdn.filestackcontent.com/GHj9JiUXQTeLqOA9HlfI',
        tags: {
          connect: [{ id: tags[0].id }, { id: tags[3].id }, { id: tags[4].id }],
        },
      },
      {
        title: 'Filson Rip Hammer',
        slug: 'filson-rip-hammer',
        author: 'Rob Cameron',
        postedAt: new Date('2019-10-30 12:00:00'),
        body:
          'A classic Rip Hammer made in the USA with solid, one-piece U.S. steel construction. Its matte-black finish resists corrosion, making it ideal for outdoor use and wet conditions. Stacked leather handle with Filson logo. Heavy 24-oz. head with a versatile straight claw.\n\n' +
          '* Rugged one-piece construction – no wood handle to fail\n' +
          '* Made in USA with U.S. steel\n' +
          '* Matte - black finish on head and neck protects against rust\n' +
          '* Genuine stacked leather handle\n' +
          '* 13½” length with heavy 24-oz.head and versatile straight claw',
        image: 'https://cdn.filestackcontent.com/iDTWDVRSRmaH5Xs3M3g6',
        tags: {
          connect: [{ id: tags[0].id }, { id: tags[1].id }, { id: tags[3].id }],
        },
      },

      {
        title: "Thor's Hammer Woodworking Mallet",
        slug: 'thors-hammer-woodworking-mallet',
        author: 'Rob Cameron',
        postedAt: new Date('2019-11-21 12:00:00'),
        body:
          "We designed this piece to be a loose representation of the Legendary Thor's Hammer, Mjolnir, with hints of the Marvel Comic & Movie adaptations of his Hammer.\n\n" +
          "This is a fully functional Woodworking mallet. It is made of exotic wood in a replica of Thor's Hammer.\n\n" +
          'These mallets are built to last many lifetimes. The head is made from Lignum Vitae and the handle from Padauk.',
        image: 'https://cdn.filestackcontent.com/NEhtuXrFS4esyZUITFpr',
        tags: {
          connect: [{ id: tags[0].id }, { id: tags[1].id }, { id: tags[3].id }],
        },
      },
    ]

    const posts = []

    for (const post of postData) {
      console.log(`Creating ${post.title}...`)
      posts.push(
        await db.post.create({
          data: post,
        })
      )
    }

    console.info(`\nSeeded ${postData.length} posts\n`)
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
