package stepDefinitions;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.logging.Logger;

public class LoginSteps extends BaseClass{

    ChromeOptions options = new ChromeOptions();
    //options.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});

    @Given("^user is on the login page$")
    public void user_is_on_the_login_page() {

        System.setProperty("webdriver.chrome.driver","/Users/admin/Desktop/chromedriver");
        driver = new ChromeDriver(options);
        driver.get("https://www.driveu.in/");

    }
    @When("^title of the login page is$")
    public void title_of_the_login_page_is()  {

        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("No. 1 Driver Service: Hire Professional Drivers Online", title);

    }
    @Then("^close the browser$")
    public void close_the_browser(){
        driver.quit();
    }

}
