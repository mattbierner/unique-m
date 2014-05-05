/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("akh")["identity"],
    UniqueT = require("./trans/unique"),
    Unique;
(Unique = UniqueT(Identity));
var x = UniqueT.runUniqueT,
    y = Identity.runIdentity;
(Unique.runUnique = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = Unique);