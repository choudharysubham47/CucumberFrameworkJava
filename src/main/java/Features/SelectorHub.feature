Feature: Automate SelectorHub Practice Page
  Scenario: Launch SelectorHub Website
    Given user is on the login page
    When  title of the homepage is
    Then  close the browser

  Scenario Outline: Automate Practice page
    Given user is on the login page
    When  title of the homepage is
    Then   User navigate to practice page
    And   User enter emailId as "<email>"
    And     user enter password as "<password>"
    And     user enter company name as "<company_name>"
    And    click on Submit button
    Then   close the browser
    Examples:
      | email | password | company_name |
      | subham@TCS.in | Tcs@123 | TCS  |
