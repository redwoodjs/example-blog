"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.requireAuth = exports.getCurrentUser = void 0;

var _api = require("@redwoodjs/api");

// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const currentuser = async ({ email }) => {
//     return await db.user.findUnique({ where: { email } })
//   }
const getCurrentUser = async jwt => {
  return jwt;
}; // Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.


exports.getCurrentUser = getCurrentUser;

const requireAuth = () => {
  if (!_api.context.currentUser) {
    throw new _api.AuthenticationError();
  }
};

exports.requireAuth = requireAuth;
//# sourceMappingURL=auth.js.map