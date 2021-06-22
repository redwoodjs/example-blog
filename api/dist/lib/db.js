"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.db = void 0;

var _client = require("@prisma/client");

var _logger = require("@redwoodjs/api/logger");

var _logger2 = require("./logger");

// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

/*
 * Instance of the Prisma Client
 */
const db = new _client.PrismaClient({
  log: (0, _logger.emitLogLevels)(['info', 'warn', 'error'])
});
exports.db = db;
(0, _logger.handlePrismaLogging)({
  db,
  logger: _logger2.logger,
  logLevels: ['info', 'warn', 'error']
});
//# sourceMappingURL=db.js.map