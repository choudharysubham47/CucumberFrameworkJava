Feature: Automate SelectorHub Practice Page
  Scenario: Launch SelectorHub Website
    Given User is on the login page
    When  Title of the homepage is
    Then  close the browser

  Scenario: Automate Practice page
    Given User is on the login page
    When  Title of the homepage is
    Then   User navigate to practice page
    And   User enter emailId
    And     user enter password
    And     user enter company name
    And    click on Submit button
    Then   close the browser



