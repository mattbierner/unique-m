/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/spec/unique.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var UniqueMonad;
    (UniqueMonad = (function(Instance, modify) {
        (Instance.prototype.unique = modify((function(y) {
            return (1 + y);
        })));
        (Instance.unique = Instance.prototype.unique);
    }));
    return UniqueMonad;
}));