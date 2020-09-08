"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const pageobjects_1 = require("../pageobjects");
describe('Elements', () => {
    it('locators', () => __awaiter(void 0, void 0, void 0, function* () {
        /*browser.waitForAngularEnabled(false);
        browser.get('www.google.com');*/
        let calc = new pageobjects_1.calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstEditbox.sendKeys("2");
        yield calc.secondEditbox.sendKeys("3");
        yield calc.go.click();
        //tagnname[attribute='value']
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL2NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0M7QUFFbEMsZ0RBQTRDO0FBRTVDLFFBQVEsQ0FBQyxVQUFVLEVBQUMsR0FBRSxFQUFFO0lBRXBCLEVBQUUsQ0FBQyxVQUFVLEVBQUMsR0FBTyxFQUFFO1FBQ25CO3dDQUNnQztRQUN4QyxJQUFJLElBQUksR0FBQyxJQUFJLHdCQUFVLEVBQUUsQ0FBQztRQUVuQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDOUQsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0Qiw2QkFBNkI7UUFDN0Isd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUd2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JCLENBQUMsQ0FFQSxDQUFBO0lBQ0QsQ0FBQyxDQUFBLENBRUEsQ0FBQTtBQUNELENBQUMsQ0FBQyxDQUFBIn0=