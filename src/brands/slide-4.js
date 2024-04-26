var __classPrivateFieldIn = (this && this.__classPrivateFieldIn) || function(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
};
var _PrivateMango_brand, _PrivateDurian_brand;
var PrivateMango = /** @class */ (function () {
    function PrivateMango(color, size) {
        this.color = color;
        this.size = size;
        _PrivateMango_brand.set(this, undefined);
    }
    PrivateMango.isMango = function (o) {
        return __classPrivateFieldIn(_PrivateMango_brand, o);
    };
    return PrivateMango;
}());
_PrivateMango_brand = new WeakMap();
var PrivateDurian = /** @class */ (function () {
    function PrivateDurian(color, size) {
        this.color = color;
        this.size = size;
        _PrivateDurian_brand.set(this, undefined);
    }
    PrivateDurian.isDurian = function (o) {
        return __classPrivateFieldIn(_PrivateDurian_brand, o);
    };
    return PrivateDurian;
}());
_PrivateDurian_brand = new WeakMap();
var privateMango = new PrivateMango("yellow", 10);
var privateDurian = new PrivateDurian("green", 10);
var privateFruit = privateDurian;
var t1 = privateMango instanceof PrivateMango; // true
console.log(t1);
var t2 = privateMango instanceof PrivateDurian; // false
console.log(t2);
var t3 = PrivateMango.isMango(privateMango); // true
console.log(t3);
var t4 = PrivateMango.isMango(privateDurian); // false
console.log(t4);
