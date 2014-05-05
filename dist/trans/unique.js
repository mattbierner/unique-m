/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "akh/trans/state", "../spec/unique.js"], (function(require, exports, StateT, UniqueMonad) {
    "use strict";
    var UniqueT;
    (UniqueT = (function(m) {
        var Instance = StateT(m);
        UniqueMonad(Instance, Instance.modify);
        return Instance;
    }));
    (UniqueT.runUniqueT = (function(m, seed) {
        return StateT.evalStateT(m, (isNaN(seed) ? 1 : seed));
    }));
    return UniqueT;
}));