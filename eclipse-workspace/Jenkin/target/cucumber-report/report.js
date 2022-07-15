$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/CIBI/eclipse-workspace/Jenkin/src/test/resources/Login.Feature");
formatter.feature({
  "name": "Validating the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validating the login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is in login page page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_in_login_page_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters valid username and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_enters_valid_username_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should me taken to HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_should_me_taken_to_HomePage()"
});
formatter.result({
  "status": "passed"
});
});