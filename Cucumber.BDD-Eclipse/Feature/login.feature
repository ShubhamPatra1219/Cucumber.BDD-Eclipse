Feature: Login Feature
@Smoke @Login
Scenario: Positive Login Scenario
Given user is on Login Page
When user enters username and password
And user clicks on submit button
Then user is on Home Page