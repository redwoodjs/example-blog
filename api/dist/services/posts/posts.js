"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.deletePost = exports.hidePost = exports.updatePost = exports.createPost = exports.postsCount = exports.searchPosts = exports.findPostsByTag = exports.findPostBySlug = exports.findPostById = exports.allPosts = void 0;

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/parse-int"));

var _api = require("@redwoodjs/api");

var _db = require("../../lib/db");

var _logger = require("../../lib/logger");

var _auth = require("../../lib/auth");

const validate = input => {
  if (input.slug && !input.slug.match(/^\S+$/)) {
    throw new _api.UserInputError("Can't create new post", {
      messages: {
        slug: ['contains invalid characters (no spaces allowed)']
      }
    });
  }
};

const allPosts = async ({
  page = 1,
  limit = 100,
  order = {
    postedAt: 'desc'
  }
}) => {
  _logger.logger.debug({
    page,
    limit,
    order
  }, 'In all posts');

  const offset = (page - 1) * limit;
  return {
    posts: _db.db.post.findMany({
      include: {
        tags: true
      },
      take: limit,
      skip: offset,
      orderBy: order
    }),
    count: _db.db.post.count()
  };
};

exports.allPosts = allPosts;

const findPostById = ({
  id
}) => {
  _logger.logger.debug({
    id
  }, 'In findPostById');

  return _db.db.post.findUnique({
    where: {
      id: (0, _parseInt2.default)(id)
    },
    include: {
      tags: true
    }
  });
};

exports.findPostById = findPostById;

const findPostBySlug = ({
  slug
}) => {
  _logger.logger.debug({
    slug
  }, 'In findPostBySlug');

  return _db.db.post.findUnique({
    where: {
      slug: slug
    },
    include: {
      tags: true
    }
  });
};

exports.findPostBySlug = findPostBySlug;

const findPostsByTag = ({
  tag
}) => {
  return _db.db.tag.findUnique({
    where: {
      name: tag
    }
  }).posts({
    include: {
      tags: true
    }
  });
};

exports.findPostsByTag = findPostsByTag;

const searchPosts = ({
  term
}) => {
  _logger.logger.debug({
    term
  }, 'In searchPosts');

  return _db.db.post.findMany({
    where: {
      OR: [{
        title: {
          contains: term
        }
      }, {
        body: {
          contains: term
        }
      }]
    },
    include: {
      tags: true
    }
  });
};

exports.searchPosts = searchPosts;

const postsCount = () => {
  return _db.db.post.count().then(count => ({
    count
  }));
};

exports.postsCount = postsCount;

const createPost = ({
  input
}, {
  context: {
    currentUser
  }
}) => {
  (0, _auth.requireAuth)();
  validate(input);
  return _db.db.post.create({
    data: input
  });
};

exports.createPost = createPost;

const updatePost = ({
  id,
  input
}, {
  context: {
    currentUser
  }
}) => {
  (0, _auth.requireAuth)();
  validate(input);
  return _db.db.post.update({
    data: input,
    where: {
      id: Number(id)
    }
  });
};

exports.updatePost = updatePost;

const hidePost = ({
  id
}, {
  context: {
    currentUser
  }
}) => {
  (0, _auth.requireAuth)();
  return _db.db.post.update({
    data: {
      postedAt: null
    },
    where: {
      id: (0, _parseInt2.default)(id)
    }
  });
};

exports.hidePost = hidePost;

const deletePost = ({
  id
}, {
  context: {
    currentUser
  }
}) => {
  (0, _auth.requireAuth)();
  return _db.db.post.delete({
    where: {
      id: Number(id)
    }
  });
};

exports.deletePost = deletePost;
//# sourceMappingURL=posts.js.map