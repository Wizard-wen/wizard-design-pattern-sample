"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ConcentreteComponent = /** @class */ (function () {
    function ConcentreteComponent() {
    }
    ConcentreteComponent.prototype.operation = function () {
        return '';
    };
    return ConcentreteComponent;
}());
exports.ConcentreteComponent = ConcentreteComponent;
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
exports.Decorator = Decorator;
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorA.prototype.operation = function () {
        return "A(" + _super.prototype.operation.call(this) + ")";
    };
    return ConcreteDecoratorA;
}(Decorator));
exports.ConcreteDecoratorA = ConcreteDecoratorA;
var ConcreteDecoratorB = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorB, _super);
    function ConcreteDecoratorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorB.prototype.operation = function () {
        return "B(" + _super.prototype.operation.call(this) + ")";
    };
    return ConcreteDecoratorB;
}(Decorator));
exports.ConcreteDecoratorB = ConcreteDecoratorB;
var simple = new ConcentreteComponent();
var decorator1 = new ConcreteDecoratorA(simple);
var decorator2 = new ConcreteDecoratorB(decorator1);
console.log(1);
console.log(decorator2.operation());
