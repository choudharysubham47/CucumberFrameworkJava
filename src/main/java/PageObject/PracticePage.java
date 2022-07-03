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

    //@FindBy(xpath = "//a[normalize-space()='PracticePage']")
    //@CacheLookup
   // WebElement button;

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

   // public void clickButton()
    //{
   //     button.click();
    //}
    public void setEmail(String uname)
    {
        try {
            email.clear();
            email.sendKeys(uname);
        }
        catch(NullPointerException e) {
            System.out.println("NullPointerException thrown!");
        }
    }
    public void setPass(String pwd)
    {
        try {
            pass.click();
            pass.sendKeys(pwd);
        }
        catch(NullPointerException e) {
            System.out.println("NullPointerException thrown!");}
    }
    public void setCompany(String comp) throws Exception
    {
        try
        {
            company.clear();
            company.sendKeys(comp);}
        catch(NullPointerException e) {
            System.out.println("NullPointerException thrown!");}
    }
    public void clickSubmitButton()
    {
            sButton.click();
    }
}
