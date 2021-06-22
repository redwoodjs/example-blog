"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.tags = void 0;

var _db = require("../../lib/db");

const tags = () => _db.db.tag.findMany();

exports.tags = tags;
//# sourceMappingURL=tags.js.map