package step_definitions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="resource"
	,tags = {"@aleja"}
	,plugin = {"pretty","html:testResults"}
	)

public class RunnerTest {
}