package pages;

import locators.Locators;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import support.AutomationDriver;

public class Menu {
	
	//Elements
	private static WebElement menuIcon = AutomationDriver.getDriver().findElement(By.xpath(Locators.menuIcon));
	private static WebElement aboutLink = AutomationDriver.getDriver().findElement(By.xpath(Locators.aboutLink));
	private static WebElement careersLink = AutomationDriver.getDriver().findElement(By.xpath(Locators.careersLink));
	private static WebElement ideasLink = AutomationDriver.getDriver().findElement(By.xpath(Locators.ideasLink));
	private static WebElement eventsLink = AutomationDriver.getDriver().findElement(By.xpath(Locators.eventsLink));
	private static WebElement contactLink = AutomationDriver.getDriver().findElement(By.xpath(Locators.contactLink));
	
	//Methods
	
	//Select menu options
	public static void selectCarrer() {  
		careersLink.click();
	}
	
	public static void selectContact() {  
		contactLink.click();
	}

	public static void selectAbout (){
		aboutLink.click();

	}
	
	public static void selectIdeas (){
		ideasLink.click();

	}
	
	public static void selectEvents (){
		eventsLink.click();

	}

	//Open menu
	public static void openMenu (){
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		menuIcon.click();

	}
	
}
