package step_definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import java.util.concurrent.TimeUnit;

public class AutomationDriver {

    public static WebDriver swdriver = null;

	public static WebDriver getDriver(){
		if (swdriver == null) {
			swdriver = new FirefoxDriver();
			swdriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			return swdriver;
		} else {
			return null;
		}
	}

	public static void clear_status(){
		System.out.println("Closing browser...");
			swdriver.close();
		}

		public static void open_url (String url){
            WebDriver driver = AutomationDriver.getDriver();
            System.out.println("Opening browser...");
            driver.get(url);
            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
        }

	}



