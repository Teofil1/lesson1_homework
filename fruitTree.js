var Color;
(function (Color) {
    Color["red"] = "red";
    Color["green"] = "green";
    Color["blue"] = "blue";
    Color["yellow"] = "yellow";
    Color["orange"] = "orange";
})(Color || (Color = {}));
var Orange = /** @class */ (function () {
    function Orange() {
        this.name = "orange";
        this.color = Color.green;
    }
    Orange.prototype.grows = function () {
        this.color = Color.orange;
    };
    return Orange;
}());
var FruitTree = /** @class */ (function () {
    function FruitTree(type) {
        this.fruits = [];
        this.type = type;
    }
    FruitTree.prototype.fructify = function (fruit) {
        fruit.grows();
        this.fruits.push(fruit);
    };
    FruitTree.prototype.getFruits = function () {
        return this.fruits;
    };
    return FruitTree;
}());
var orangeTree = new FruitTree("exotic");
var orange = new Orange();
orangeTree.fructify(orange);
orangeTree.getFruits();
