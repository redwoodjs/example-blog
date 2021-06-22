"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handler = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/json/stringify"));

var _logger = require("../../lib/logger");

const handler = async (event, context) => {
  _logger.logger.info('Invoked helloWorld function');

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: (0, _stringify.default)({
      data: 'helloWorld function'
    })
  };
};

exports.handler = handler;
//# sourceMappingURL=helloWorld.js.map