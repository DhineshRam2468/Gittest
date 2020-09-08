var a = 4;
//a=5
var b = 5;
//b="hello"
var c = "dhinesh";
//c=123
var d = [1, 2, 3];
//d=1
var e = true;
//e=ab
var f = 123;
f = "hi";
f = true;
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
