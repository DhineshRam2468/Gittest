Feature: I am going to validate Calculator App

@calculatortesting
Scenario: Calculator Add functionality testing

Given I will navigate to Calc Site
When I add two numbers "3" and "5"
Then the output displayed should be "8"

@calculatortesting
Scenario Outline: Calculator Add functionality testing no 2

Given I will navigate to "calc" page
When I add two numbers "<n1>" and "<n2>"
Then the output displayed should be "<n3>"

Examples:
    | n1   | n2 |n3|
    | 1    | 2  |5|
    |3     | 4  |7|

@AngularTesting

Scenario Outline: Angular validations
Given I will navigate to "AngularJs" page
When I clicked on header link
And you will navigate to angular page
Then you will enter "<key>" in search box

Examples:
    | key    |
    | Hello  |
    | Hey     |







