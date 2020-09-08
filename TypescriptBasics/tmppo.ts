import { ElementFinder,element,by } from "protractor";

export class tmp{

    firstEditbox:ElementFinder;
    secondEditbox:ElementFinder;
    submit:ElementFinder;

    constructor(){
        this.firstEditbox=element(by.id('UserName'));
        this.secondEditbox=element(by.id('Password'));
        this.submit=element(by.id('submit'));

    }
}