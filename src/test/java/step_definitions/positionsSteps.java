package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import data_pool.Data;
import org.junit.Assert;
import pages.Careers;
import pages.TechonologyCareer;

public class positionsSteps {
	


	@When("^open the link 'Bogota' from technology page$")
	public void open_the_link_Bogota_from_technology_page() throws Throwable {
		Careers.selectTechnology();
		Thread.sleep(2000);
		TechonologyCareer.selectBogota(AutomationDriver.getDriver());
	}

	@Then("^(\\d+) open position for QA rol are shown$")
	public void open_position_for_QA_rol_are_shown(int arg1) throws Throwable {
		int openPosition = TechonologyCareer.reviewQAPositions(Data.positionSearched, TechonologyCareer.totalOpenPositions );
		Assert.assertEquals("The number of open positions on HUGE is different to the value mentioned in test", arg1, openPosition);
		Thread.sleep(4000);
	}

	
}
