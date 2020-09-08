"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
const protractor_1 = require("protractor");
class tmp {
    constructor() {
        this.firstEditbox = protractor_1.element(protractor_1.by.id('UserName'));
        this.secondEditbox = protractor_1.element(protractor_1.by.id('Password'));
        this.submit = protractor_1.element(protractor_1.by.id('submit'));
    }
}
exports.tmp = tmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG1wcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90bXBwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxHQUFHO0lBTVo7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUV6QyxDQUFDO0NBQ0o7QUFaRCxrQkFZQyJ9