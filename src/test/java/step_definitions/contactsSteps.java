package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ContactUs;
import pages.Menu;

public class contactsSteps {

	@Given("^a user select the option '(.*)' from huge site$")
	public void a_user_select_the_option_careers_from_huge_site(String vaina) throws Throwable {

		Menu.openMenu();
		Thread.sleep(2000);	
		if (vaina.equalsIgnoreCase("careers")){
			Menu.selectCarrer();
		}else{
			Menu.selectContact();
		}
		Thread.sleep(2000);		
	}
	
	@When("^read the information of help (.*)$")
	public void read_the_information_of_help_Become_a_client(String section) throws Throwable {
		ContactUs.reviewHelpData(ContactUs.helpSection);
	}
	
	@Then("^(.*) is shown as per legal documentation$")
	public void business_development_is_shown_as_per_legal_documentation(String area) throws Throwable {
		
		ContactUs.reviewHelpInformation(area);
	}

}



