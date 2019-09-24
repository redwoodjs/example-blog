# HammerFramework's `create-hammer-app`

In order to figure out what Hammer should be
like, we're first developing a simple apps
([invoice](https://github.com/hammerframework/billable) and [todo](https://github.com/hammerframework/todo) with the technology stack we want and
seeing how it feels. Eventually, the things we learn here will be codified in the
Hammer "architectural style" and a set of command line tools will help generate
various things you need during a Hammer development cycle.

## Getting Started

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do
this in the root directory:

```terminal
yarn install
```

Generate a SQLite database and ORM client:

```terminal
yarn db:up
```

### Fire it up

```terminal
yarn dev
```

Run `yarn open` to open your browser on `http://localhost:8910`.

Browse to `http://localhost:8910` to see the web app. Lambda functions run on
`localhost:8911` but are proxied to `localhost:8910/api/functions/*`.

## Development

### Database

We're using Prisma's [Photon ORM](https://github.com/prisma/prisma2/blob/master/docs/photon/api.md) and [Lift Migration Engine](https://github.com/prisma/prisma2/blob/master/docs/data-modeling.md).

Prisma2 is [not ready for production](https://isprisma2ready.com) at the moment.

To create a development database:

```terminal
yarn db:up
```

Will read the schema definition in `api/prisma/schema.prisma` and generate a
sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn db:save` to generate a migration, and
`yarn db:up` to apply the migration/ generate a new ORM client.
