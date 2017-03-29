package pages;

import locators.Locators;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import support.AutomationDriver;

import java.util.List;

public class ContactUs {
	
	    public static String position = null;
	
	// ELEMENTS
		private static List<WebElement> helpSections = AutomationDriver.getDriver().findElements(By.xpath(Locators.helpSection));
		public static List<WebElement> helpSection = helpSections;
		 
		
		public static void reviewHelpData(List<WebElement> helpList) {
			for (WebElement data : helpList) {
				
				position = data.getText();
				//System.out.println(position);		
		
			}

}
		
		public static void reviewHelpInformation(String section) {
			
			
			if ( "Become a client." == section){
				System.out.println(position);		
				
				
			}
			else if ( "Media inquiries." == section){
				System.out.println(position);		
				
				
			}
			else if ( "Careers.	" == section){
				System.out.println(position);		
				
				
			}
			else if ("Everything else." == section){
				System.out.println(position);		
				
				
			}
			

}
	
		

}
