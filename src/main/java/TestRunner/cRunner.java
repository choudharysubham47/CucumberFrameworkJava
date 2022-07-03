package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/admin/Desktop/CucumberFrameworkJava/src/main/java/Features/SelectorHub.feature", //the path of the feature files
        glue = {"stepDefinitions"}, //the path of the step definition files
        dryRun = false,
        plugin = { "pretty", "html:target/cucumber-reports" },
        monochrome = true, //display the console output in a proper readable format
        strict = true //it will check if any step is not defined in step definition file

        //to check the mapping is proper between feature file and step def file
        //tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}
)

public class cRunner {
}
