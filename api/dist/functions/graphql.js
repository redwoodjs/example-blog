var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/functions/graphql.js
__markAsModule(exports);
__export(exports, {
  handler: () => handler
});

// ../node_modules/_redwood-linked-packages/core/esbuild/apiGlobals.js
global.gql = require("graphql-tag");
var { context: context2 } = require("@redwoodjs/api");
global.context = context2;

// src/functions/graphql.js
var import_api3 = __toModule(require("@redwoodjs/api"));

// src/graphql/posts.sdl.js
var posts_sdl_exports = {};
__export(posts_sdl_exports, {
  schema: () => schema
});
var schema = gql`
  type Post {
    id: ID!
    title: String!
    slug: String!
    body: String!
    author: String!
    image: String
    postedAt: DateTime
    tags: [Tag]
  }

  type PostsSet {
    posts: [Post]!
    count: Int!
  }

  type Query {
    allPosts(page: Int, limit: Int): PostsSet
    findPostById(id: ID): Post
    findPostBySlug(slug: String): Post
    findPostsByTag(tag: String): [Post]
    searchPosts(term: String): [Post]
  }

  input PostInput {
    title: String!
    slug: String!
    author: String!
    body: String!
    image: String
    postedAt: DateTime
  }

  type Mutation {
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    hidePost(id: ID!): Post
    deletePost(id: ID!): Post
  }
`;

// src/graphql/tags.sdl.js
var tags_sdl_exports = {};
__export(tags_sdl_exports, {
  schema: () => schema2
});
var schema2 = gql`
  type Tag {
    id: ID!
    name: String
  }

  type Query {
    tags: [Tag]
  }
`;

// glob-imports:src/graphql/**/*.{js,ts}
var __default = {
  src_graphql_po_sdl_js: posts_sdl_exports,
  src_graphql_tags_sdl: tags_sdl_exports
};

// src/services/posts/posts.js
var posts_exports = {};
__export(posts_exports, {
  allPosts: () => allPosts,
  createPost: () => createPost,
  deletePost: () => deletePost,
  findPostById: () => findPostById,
  findPostBySlug: () => findPostBySlug,
  findPostsByTag: () => findPostsByTag,
  hidePost: () => hidePost,
  postsCount: () => postsCount,
  searchPosts: () => searchPosts,
  updatePost: () => updatePost
});
var import_api2 = __toModule(require("@redwoodjs/api"));

// src/lib/db.js
var import_client = __toModule(require("@prisma/client"));
var import_logger2 = __toModule(require("@redwoodjs/api/logger"));

// src/lib/logger.js
var import_logger = __toModule(require("@redwoodjs/api/logger"));
var logger = (0, import_logger.createLogger)({
  options: { level: "trace", prettyPrint: true }
});

// src/lib/db.js
var db = new import_client.PrismaClient({
  log: (0, import_logger2.emitLogLevels)(["info", "warn", "error"])
});
(0, import_logger2.handlePrismaLogging)({
  db,
  logger,
  logLevels: ["info", "warn", "error"]
});

// src/lib/auth.js
var import_api = __toModule(require("@redwoodjs/api"));
var getCurrentUser = async (jwt) => {
  return jwt;
};
var requireAuth = () => {
  if (!context.currentUser) {
    throw new import_api.AuthenticationError();
  }
};

// src/services/posts/posts.js
var validate = (input) => {
  if (input.slug && !input.slug.match(/^\S+$/)) {
    throw new import_api2.UserInputError("Can't create new post", {
      messages: {
        slug: ["contains invalid characters (no spaces allowed)"]
      }
    });
  }
};
var allPosts = async ({
  page = 1,
  limit = 100,
  order = { postedAt: "desc" }
}) => {
  logger.debug({ page, limit, order }, "In all posts");
  const offset = (page - 1) * limit;
  return {
    posts: db.post.findMany({
      include: { tags: true },
      take: limit,
      skip: offset,
      orderBy: order
    }),
    count: db.post.count()
  };
};
var findPostById = ({ id }) => {
  logger.debug({ id }, "In findPostById");
  return db.post.findUnique({
    where: { id: parseInt(id) },
    include: { tags: true }
  });
};
var findPostBySlug = ({ slug }) => {
  logger.debug({ slug }, "In findPostBySlug");
  return db.post.findUnique({
    where: { slug },
    include: { tags: true }
  });
};
var findPostsByTag = ({ tag }) => {
  return db.tag.findUnique({
    where: { name: tag }
  }).posts({ include: { tags: true } });
};
var searchPosts = ({ term }) => {
  logger.debug({ term }, "In searchPosts");
  return db.post.findMany({
    where: {
      OR: [{ title: { contains: term } }, { body: { contains: term } }]
    },
    include: { tags: true }
  });
};
var postsCount = () => {
  return db.post.count().then((count) => ({ count }));
};
var createPost = ({ input }, { context: { currentUser } }) => {
  requireAuth();
  validate(input);
  return db.post.create({ data: input });
};
var updatePost = ({ id, input }, { context: { currentUser } }) => {
  requireAuth();
  validate(input);
  return db.post.update({ data: input, where: { id: Number(id) } });
};
var hidePost = ({ id }, { context: { currentUser } }) => {
  requireAuth();
  return db.post.update({
    data: { postedAt: null },
    where: { id: parseInt(id) }
  });
};
var deletePost = ({ id }, { context: { currentUser } }) => {
  requireAuth();
  return db.post.delete({
    where: { id: Number(id) }
  });
};

// src/services/tags/tags.js
var tags_exports = {};
__export(tags_exports, {
  tags: () => tags
});
var tags = () => db.tag.findMany();

// glob-imports:src/services/**/*.{js,ts}
var __default2 = {
  src_services_po_posts_js: posts_exports,
  src_services_tags_tags: tags_exports
};

// src/functions/graphql.js
var handler = (0, import_api3.createGraphQLHandler)({
  getCurrentUser,
  schema: (0, import_api3.makeMergedSchema)({
    schemas: __default,
    services: (0, import_api3.makeServices)({ services: __default2 })
  }),
  onException: () => {
    db.$disconnect();
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
