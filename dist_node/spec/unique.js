/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/spec/unique.kep'
 * DO NOT EDIT
*/
"use strict";
var UniqueMonad;
(UniqueMonad = (function(Instance, modify) {
    (Instance.prototype.unique = modify((function(y) {
        return (1 + y);
    })));
    (Instance.unique = Instance.prototype.unique);
}));
(module.exports = UniqueMonad);