"use strict";
exports.__esModule = true;
var constructors_1 = require("./constructors");
var m = new constructors_1.classconst(789);
m.setusername("dhin");
console.log(m.getusername());
//m.setssn();
console.log(m.getssn());
function validate(value) {
    console.log(value);
}
validate("perfect");
function validatecar(car) {
    console.log(car.color);
    console.log(car.engine);
    console.log(car.camera);
}
var bmw = {
    color: "red",
    engine: 100,
    camera: true
};
var benz = {
    color: "green",
    engine: 200,
    camera: false
};
validatecar(bmw);
validatecar(benz);
