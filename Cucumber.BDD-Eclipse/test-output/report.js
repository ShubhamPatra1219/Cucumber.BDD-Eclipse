$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Positive Login Scenario",
  "description": "",
  "id": "login-feature;positive-login-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    },
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 9272072200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_and_password()"
});
formatter.result({
  "duration": 1684793400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 229550100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 13481800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]Online Shopping Indi...\u003e but was:\u003c[Shoppers Stop | ]Online Shopping Indi...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.cg.StepDef.LoginStepDef.user_is_on_Home_Page(LoginStepDef.java:37)\r\n\tat ✽.Then user is on Home Page(login.feature:7)\r\n",
  "status": "failed"
});
});