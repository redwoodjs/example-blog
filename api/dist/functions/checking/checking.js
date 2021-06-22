"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handler = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/json/stringify"));

var _logger = require("../../lib/logger");

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
const handler = async (event, context) => {
  _logger.logger.info('Invoked checking function');

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: (0, _stringify.default)({
      data: 'checking function'
    })
  };
};

exports.handler = handler;
//# sourceMappingURL=checking.js.map