package pages;

import data_pool.Data;
import locators.Locators;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import step_definitions.AutomationDriver;

import java.util.List;

public class TechonologyCareer {
	

	// ELEMENTS
	private static WebElement bogotaLink = AutomationDriver.getDriver().findElement(By.xpath(Locators.bogotaLink));
	private static List<WebElement> totalOpenPosition = AutomationDriver.getDriver().findElements(By.xpath(Locators.totalOpenPosition));
	// ENCAPSULATED ELEMENTS
	public static List<WebElement> totalOpenPositions = totalOpenPosition;
	
	public static void selectBogota (WebDriver driver) throws InterruptedException{
		Thread.sleep(5000);
		
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("scroll(0, 800);");
		bogotaLink.click();
		Integer numberOfOpenPosition = totalOpenPosition.size();
		System.out.println(numberOfOpenPosition);

		
	}
	public static int reviewQAPositions(String itemSearch, List<WebElement> listSearch) {
		int numberOfQAPosition = 0;
		for (WebElement data : listSearch) {
			
			String position = data.getText();
			//int numberOfQAPosition = 0;
			if (position.toLowerCase().contains(Data.positionSearched.toLowerCase())) {
				System.out.println("The open position " + position + " Is a QA Position");
				numberOfQAPosition ++;

			} else {
				System.out.println("The open position " + position + " Isn't a QA Position");

			}
			

		}
		
		System.out.println("Huge have " + numberOfQAPosition + " open positions for QAs");
		return numberOfQAPosition;

	}
	

	
	}

