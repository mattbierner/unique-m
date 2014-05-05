/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var StateT = require("akh")["trans"]["state"],
    UniqueMonad = require("../spec/unique.js"),
    UniqueT;
(UniqueT = (function(m) {
    var Instance = StateT(m);
    UniqueMonad(Instance, Instance.modify);
    return Instance;
}));
(UniqueT.runUniqueT = (function(m, seed) {
    return StateT.evalStateT(m, (isNaN(seed) ? 1 : seed));
}));
(module.exports = UniqueT);