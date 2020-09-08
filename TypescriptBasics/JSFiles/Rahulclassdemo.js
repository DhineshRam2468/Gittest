"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classDemo = void 0;
class classDemo {
    constructor(ssn) {
        this.ssn = ssn;
    }
    getUsername() {
        return this.username; //username property of the class
    }
    setUsername(username) {
        this.username = username; //set username property to one name
    }
    getSSN() {
        return this.ssn;
    }
}
exports.classDemo = classDemo;
//create object of the class, and using that object call the methods or properties present in that class
let cd = new classDemo(123);
cd.setUsername("Rahul");
console.log(cd.getUsername());
console.log(cd.getSSN());
function validateCar(car) {
    console.log(car.camera);
    console.log(car.engine);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFodWxjbGFzc2RlbW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9SYWh1bGNsYXNzZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLFNBQVM7SUFRdEIsWUFBWSxHQUFVO1FBRW5CLElBQUksQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxXQUFXO1FBR1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsZ0NBQWdDO0lBQ3pELENBQUM7SUFFRCxXQUFXLENBQUMsUUFBZTtRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQyxDQUFNLG1DQUFtQztJQUNqRSxDQUFDO0lBQ0QsTUFBTTtRQUVGLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBS0E7QUE5QkQsOEJBOEJDO0FBQ0Qsd0dBQXdHO0FBRXhHLElBQUksRUFBRSxHQUFDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLFNBQVMsV0FBVyxDQUFDLEdBQVc7SUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsQ0FBQyJ9