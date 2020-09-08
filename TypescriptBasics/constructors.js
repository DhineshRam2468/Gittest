"use strict";
exports.__esModule = true;
exports.classconst = void 0;
var classconst = /** @class */ (function () {
    /*    constructor()
        {
            console.log("typescript")
        }*/
    function classconst(ssn) {
        this.ssn = ssn;
    }
    classconst.prototype.getusername = function () {
        return this.username;
    };
    classconst.prototype.setusername = function (username) {
        this.username = username;
    };
    classconst.prototype.getssn = function () {
        return this.ssn;
    };
    return classconst;
}());
exports.classconst = classconst;
//create objects of class and using that objects call methods/properties in that class
/*let m = new classconst(789);
m.setusername("dhin");
console.log(m.getusername());
//m.setssn();
console.log(m.getssn());*/ 
