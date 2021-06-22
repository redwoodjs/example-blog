"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.schema = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

const schema = (0, _graphqlTag.default)`
  type Tag {
    id: ID!
    name: String
  }

  type Query {
    tags: [Tag]
  }
`;
exports.schema = schema;
//# sourceMappingURL=tags.sdl.js.map