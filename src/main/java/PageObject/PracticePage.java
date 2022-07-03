package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PracticePage {
    public WebDriver ldriver;

    public PracticePage(WebDriver rdriver)
    {
        ldriver = rdriver;
        PageFactory.initElements(rdriver, this);
    }

    @FindBy(id ="userId")
    @CacheLookup
    WebElement email;

    @FindBy(id = "pass")
    @CacheLookup
    WebElement pass;

    @FindBy(xpath = "//div[@class='element-companyId']//input[@placeholder='Enter your company']")
    @CacheLookup
    WebElement company;

    @FindBy(xpath = "//input[@value='Submit']")
    @CacheLookup
    WebElement sButton;

    public void setEmail(String emailid)
    {
        email.clear();
        email.sendKeys(emailid);
    }
    public void setPass(String password)
    {
            pass.click();
            pass.sendKeys(password);
    }
    public void setCompany(String comp)
    {
            company.clear();
            company.sendKeys(comp);
    }
    public void clickSubmitButton()
    {
            sButton.click();
    }
}
