$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "DriveU Login",
  "description": "",
  "id": "driveu-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User Successful Login",
  "description": "",
  "id": "driveu-login;user-successful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the login page is",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 9495056898,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_the_login_page_is()"
});
formatter.result({
  "duration": 28007568,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 385955889,
  "status": "passed"
});
});