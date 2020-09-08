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
const cucumber_1 = require("cucumber");
var { After, Before } = require('cucumber');
Before({ tags: "@calculatortesting" }, function () {
    protractor_1.browser.manage().window().maximize();
    // This hook will be executed before scenarios tagged with @foo
});
After({ tags: "@calculatortesting" }, function () {
    console.log("Success");
    // This hook will be executed before scenarios tagged with @foo
});
Before({ tags: "@AngularTesting" }, function () {
    console.log("Started");
    // This hook will be executed before scenarios tagged with @foo
});
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Completed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsdUNBQWtDO0FBRWxDLElBQUksRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRzFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQyxFQUFFO0lBQ2pDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkMsK0RBQStEO0FBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QiwrREFBK0Q7QUFDakUsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsRUFBRTtJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLCtEQUErRDtBQUNqRSxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxVQUFlLFFBQVE7O1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSSxpQkFBTSxDQUFDLE1BQU0sRUFDMUM7WUFDRSxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=