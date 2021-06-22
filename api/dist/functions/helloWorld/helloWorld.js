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

// src/functions/helloWorld/helloWorld.js
__markAsModule(exports);
__export(exports, {
  handler: () => handler
});

// ../node_modules/_redwood-linked-packages/core/esbuild/apiGlobals.js
global.gql = require("graphql-tag");
var { context } = require("@redwoodjs/api");
global.context = context;

// src/lib/logger.js
var import_logger = __toModule(require("@redwoodjs/api/logger"));
var logger = (0, import_logger.createLogger)({
  options: { level: "trace", prettyPrint: true }
});

// src/functions/helloWorld/helloWorld.js
var handler = async (event, context2) => {
  logger.info("Invoked helloWorld function");
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: "helloWorld function"
    })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
