package step_definitions;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import data_pool.Data;



import java.util.concurrent.TimeUnit;

import static step_definitions.AutomationDriver.clear_status;
import static step_definitions.AutomationDriver.open_url;

public class hooks {


@Before
	public void before_scenarios() throws Throwable {
		System.out.println("Before...");

		open_url(Data.urlText);
	}
/*
@After
	public void after_scenarios(){
		System.out.println("After...");
		clear_status();
	}
*/
}



