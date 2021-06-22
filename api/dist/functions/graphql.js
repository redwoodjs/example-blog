"use strict";

var _WeakMap = require("@babel/runtime-corejs3/core-js/weak-map");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptor");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handler = void 0;

var _api = require("@redwoodjs/api");

var schemas_po_sdl_js = _interopRequireWildcard(require("../graphql/posts.sdl"));

var schemas_tags_sdl = _interopRequireWildcard(require("../graphql/tags.sdl"));

var services_po_posts_js = _interopRequireWildcard(require("../services/posts/posts"));

var services_tags_tags = _interopRequireWildcard(require("../services/tags/tags"));

var _auth = require("../lib/auth.js");

var _db = require("../lib/db");

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let schemas = {};
schemas.po_sdl_js = schemas_po_sdl_js;
schemas.tags_sdl = schemas_tags_sdl;
let services = {};
services.po_posts_js = services_po_posts_js;
services.tags_tags = services_tags_tags;
const handler = (0, _api.createGraphQLHandler)({
  getCurrentUser: _auth.getCurrentUser,
  schema: (0, _api.makeMergedSchema)({
    schemas,
    services: (0, _api.makeServices)({
      services
    })
  }),
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    _db.db.$disconnect();
  }
});
exports.handler = handler;
//# sourceMappingURL=graphql.js.map