$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/admin/Desktop/CucumberFrameworkJava/src/main/java/Features/SelectorHub.feature");
formatter.feature({
  "line": 1,
  "name": "Automate SelectorHub Practice Page",
  "description": "",
  "id": "automate-selectorhub-practice-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Launch SelectorHub Website",
  "description": "",
  "id": "automate-selectorhub-practice-page;launch-selectorhub-website",
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
  "name": "title of the homepage is",
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
  "duration": 74484345777,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Abhisheka.local\u0027, ip: \u0027fe80:0:0:0:461:9b98:66b7:2f9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: /var/folders/xm/44rsbdn5155...}, goog:chromeOptions: {debuggerAddress: localhost:54156}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 556674af893326bb8cf14be3f6e5860e\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat stepDefinitions.LoginSteps.user_is_on_the_login_page(LoginSteps.java:24)\n\tat ✽.Given user is on the login page(/Users/admin/Desktop/CucumberFrameworkJava/src/main/java/Features/SelectorHub.feature:3)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.titleOfTheHomepageIs()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Automate Practice page",
  "description": "",
  "id": "automate-selectorhub-practice-page;automate-practice-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of the homepage is",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User navigate to practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enter emailId as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter company name as \"\u003ccompany_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "automate-selectorhub-practice-page;automate-practice-page;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "company_name"
      ],
      "line": 17,
      "id": "automate-selectorhub-practice-page;automate-practice-page;;1"
    },
    {
      "cells": [
        "subham@TCS.in",
        "Tcs@123",
        "TCS"
      ],
      "line": 18,
      "id": "automate-selectorhub-practice-page;automate-practice-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Automate Practice page",
  "description": "",
  "id": "automate-selectorhub-practice-page;automate-practice-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of the homepage is",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User navigate to practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enter emailId as \"subham@TCS.in\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter password as \"Tcs@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter company name as \"TCS\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 4847443899,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Abhisheka.local\u0027, ip: \u0027fe80:0:0:0:461:9b98:66b7:2f9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: /var/folders/xm/44rsbdn5155...}, goog:chromeOptions: {debuggerAddress: localhost:54190}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b09d96099a8e990cefaa8d44c11a86d4\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat stepDefinitions.LoginSteps.user_is_on_the_login_page(LoginSteps.java:23)\n\tat ✽.Given user is on the login page(/Users/admin/Desktop/CucumberFrameworkJava/src/main/java/Features/SelectorHub.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.titleOfTheHomepageIs()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_practice_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "subham@TCS.in",
      "offset": 23
    }
  ],
  "location": "LoginSteps.userEnterEmailIdAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tcs@123",
      "offset": 24
    }
  ],
  "location": "LoginSteps.userEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TCS",
      "offset": 28
    }
  ],
  "location": "LoginSteps.userEnterCompanyNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.click_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});