const _ = require("lodash");

let env = {};

try {
  env = require("./config/env.js");
} catch (e) { }


_.forEach(env, (value, variable) => { process.env[variable] = value })