// An abstract class is a blueprint for other classes. It can have some code, but it leaves some parts 
// (called abstract methods) unfinished, so other classes must fill in the missing parts. You can’t create objects 
// from it directly.
// Imagine:
// You're a game developer. You’re creating a game with different shapes that can appear on the screen: 
// rectangles, circles, triangles, etc.You know that every shape must have an area, but how to calculate that 
// area is different for each one.So you do this:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.describe = function () {
        return "The area  = ".concat(this.getArea());
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var rect = new Rectangle(5, 10);
console.log(rect.describe()); // I’m a shape with area = 50
