import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";
import { calculator } from "./pageObjects/calculator";
import { ahp } from "./pageObjects/Angular";

describe('Chain locat ors demo', () => {


    it('Open Angular js website', async () => {

        let calc = new calculator();


        await browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        await calc.firstEditbox.sendKeys("3");
        await calc.secondEditbox.sendKeys("5");
         await calc.go.click();
         calc.getResult.getText().then(function (text) {
             console.log(text);
        })


        //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    })


    it('Angular home page title validation', async () => {
        let ah = new ahp();
        await browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await browser.sleep(3000);
        await ah.search.sendKeys("hello");

    })
})
