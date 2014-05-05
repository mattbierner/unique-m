/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh/identity", "./trans/unique"], (function(require, exports, Identity, UniqueT) {
    "use strict";
    var Unique;
    (Unique = UniqueT(Identity));
    var x = UniqueT.runUniqueT,
        y = Identity.runIdentity;
    (Unique.runUnique = (function() {
        return y(x.apply(null, arguments));
    }));
    return Unique;
}));