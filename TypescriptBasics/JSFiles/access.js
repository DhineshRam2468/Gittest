"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constructors_1 = require("./constructors");
let m = new constructors_1.classconst(789);
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
let bmw = {
    color: "red",
    engine: 100,
    camera: true
};
let benz = {
    color: "green",
    engine: 200,
    camera: false
};
validatecar(bmw);
validatecar(benz);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYWNjZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQTBDO0FBUTFDLElBQUksQ0FBQyxHQUFHLElBQUkseUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDN0IsYUFBYTtBQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFFeEIsU0FBUyxRQUFRLENBQUMsS0FBWTtJQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFcEIsU0FBUyxXQUFXLENBQUMsR0FBVztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUUzQixDQUFDO0FBRUQsSUFBSSxHQUFHLEdBQUM7SUFDUixLQUFLLEVBQUMsS0FBSztJQUNYLE1BQU0sRUFBQyxHQUFHO0lBQ1YsTUFBTSxFQUFDLElBQUk7Q0FFVixDQUFBO0FBRUQsSUFBSSxJQUFJLEdBQUM7SUFDTCxLQUFLLEVBQUMsT0FBTztJQUNiLE1BQU0sRUFBQyxHQUFHO0lBQ1YsTUFBTSxFQUFDLEtBQUs7Q0FFZixDQUFBO0FBQ0QsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9