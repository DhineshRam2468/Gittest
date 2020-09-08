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
const protractor_2 = require("protractor");
const calculatorpo_1 = require("./calculatorpo");
const Angular_1 = require("./Angular");
describe('Elements', () => {
    it('locators', () => __awaiter(void 0, void 0, void 0, function* () {
        /*browser.waitForAngularEnabled(false);
        browser.get('www.google.com');*/
        let calc = new calculatorpo_1.calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstEditbox.sendKeys("2");
        yield calc.secondEditbox.sendKeys("3");
        yield calc.go.click();
        //tagnname[attribute='value']
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
        /*xit("TMP Home Page",async()=>{

            let t = new tmp();
           browser.waitForAngularEnabled(false);
        
            await browser.get('https://login.talentbrew.com/');
            await t.firstEditbox.sendKeys('dram');
            await t.secondEditbox.sendKeys('Mind1990$tmp');
            await t.submit.click().then(function() {
             //browser.sleep('20000');
        
             //tagnname[attribute='value']
             element(by.css("a[class='box chq']")).click();
             
        
            })
            browser.sleep(1000);
        })*/
        it('angular', () => __awaiter(void 0, void 0, void 0, function* () {
            let angular = new Angular_1.ahp();
            yield protractor_1.browser.get('https://angularjs.org/');
            yield protractor_2.element(protractor_2.by.linkText('angular.io')).click();
            yield protractor_2.element(protractor_2.by.css('input[type="search"]')).sendKeys('Hello');
        }));
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvcnRtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NhbGN1bGF0b3J0bXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0M7QUFDbEMsMkNBQXFDO0FBQ3JDLGlEQUE0QztBQUM1Qyx1Q0FBZ0M7QUFDaEMsUUFBUSxDQUFDLFVBQVUsRUFBQyxHQUFFLEVBQUU7SUFFcEIsRUFBRSxDQUFDLFVBQVUsRUFBQyxHQUFPLEVBQUU7UUFDbkI7d0NBQ2dDO1FBQ3hDLElBQUksSUFBSSxHQUFDLElBQUkseUJBQVUsRUFBRSxDQUFDO1FBRW5CLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUM5RCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLDZCQUE2QjtRQUM3Qix3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBR3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUE7UUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkk7UUFDSixFQUFFLENBQUMsU0FBUyxFQUFDLEdBQU8sRUFBRTtZQUNsQixJQUFJLE9BQU8sR0FBRyxJQUFJLGFBQUcsRUFBRSxDQUFDO1lBQ3pCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUMzQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHcEUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDRSxDQUFDLENBQUMsQ0FBQSJ9