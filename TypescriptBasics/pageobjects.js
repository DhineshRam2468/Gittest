"use strict";
exports.__esModule = true;
exports.calculator = void 0;
var protractor_1 = require("protractor");
var calculator = /** @class */ (function () {
    function calculator() {
        this.firsttextbox = protractor_1.element(protractor_1.by.model("first"));
        this.secondtextbox = protractor_1.element(protractor_1.by.model('second'));
        this.gobutton = protractor_1.element(protractor_1.by.model('gobutton'));
        this.result = protractor_1.element(protractor_1.by.model('result in memory'));
    }
    return calculator;
}());
exports.calculator = calculator;
