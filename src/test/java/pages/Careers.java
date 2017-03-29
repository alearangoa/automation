package pages;

import locators.Locators;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import support.AutomationDriver;


public class Careers {

	private static WebElement technologyLink = AutomationDriver.getDriver().findElement(By.xpath(Locators.technologyLink));
	
	public static void selectTechnology () throws InterruptedException{
		Thread.sleep(5000);
		
		JavascriptExecutor jse = (JavascriptExecutor)AutomationDriver.getDriver();
		jse.executeScript("scroll(0, 800);");
		technologyLink.click();
	}
}
