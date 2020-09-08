var classdemo = /** @class */ (function () {
    function classdemo() {
    }
    classdemo.prototype.getusername = function () {
        return this.username;
    };
    classdemo.prototype.setusername = function () {
        this.username = "dhinesh";
    };
    classdemo.prototype.getssn = function () {
        return this.ssn;
    };
    classdemo.prototype.setssn = function () {
        this.ssn = 123;
    };
    return classdemo;
}());
var x = new classdemo;
x.setusername();
console.log(x.getusername());
x.setssn();
console.log(x.getssn());
