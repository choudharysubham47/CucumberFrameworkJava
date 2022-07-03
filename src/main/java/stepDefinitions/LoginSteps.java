package stepDefinitions;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

public class LoginSteps extends BaseClass {

    ChromeOptions options = new ChromeOptions();
    //options.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});

    @Given("^user is on the login page$")
    public void user_is_on_the_login_page() {

        System.setProperty("webdriver.chrome.driver","/Users/admin/Desktop/chromedriver");
        driver = new ChromeDriver(options);
        driver.get("https://selectorshub.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @When("^title of the homepage is$")
    public void titleOfTheHomepageIs() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Home - SelectorsHub", title);
    }
    @Then("^close the browser$")
    public void close_the_browser(){
        driver.quit();
    }

    //Login

    @Then("^User navigate to practice page$")
    public void user_navigate_to_practice_page() {
        driver.findElement(By.xpath("//a[normalize-space()='PracticePage']")).click();
    }

    @And("^User enter emailId as \"([^\"]*)\"$")
    public void userEnterEmailIdAs(String email)  {
        try{
        pp.setEmail(email);}
        catch(NullPointerException e) {
            System.out.println("NullPointerException thrown!");}
    }

    @And("^user enter password as \"([^\"]*)\"$")
    public void userEnterPasswordAs(String password)   {
        pp.setPass(password);
    }

    @And("^user enter company name as \"([^\"]*)\"$")
    public void userEnterCompanyNameAs(String company_name) throws Exception {
        pp.setCompany(company_name);
    }

    @Then("^click on Submit button$")
    public void click_on_Submit_button()  {
            pp.clickSubmitButton();
    }



}
