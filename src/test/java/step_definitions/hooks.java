package step_definitions;


import cucumber.api.java.Before;
import cucumber.api.java.After;
import data_pool.Data;
import static support.AutomationDriver.*;

public class hooks {


@Before
	public void before_scenarios() throws Throwable {
		System.out.println("Before...");
		open_url(Data.urlText);
	}

@After
	public void after_scenarios(){
		System.out.println("After...");
		clear_status();
	}

}



