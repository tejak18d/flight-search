package org.cucumber.tests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

public class FlightSearchPage {

	public WebDriver ldriver;

	public FlightSearchPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(xpath = "//label[contains(.,'One Way')]")
	WebElement oneWayTrip;

	@FindBy(id = "from0")
	WebElement source;

	@FindBy(id = "to0")
	WebElement destination;

	@FindBy(id = "cal0")
	WebElement dateField;

	@FindBy(xpath = "//div[@class='col-12 col-sm-3']//div[2]//div[3]//div[27]//a[1]")
	WebElement fromDate;

	@FindBy(id = "searchNow")
	WebElement searchButton;

	@FindBy(className = "currency")
	WebElement fares;

	@FindBy(xpath = "//button[@class='cta-1st select__cta'][1]")
	WebElement selectButton;

	@FindBy(xpath = "//div[@class='col-xs-12 contract__trip trip-block']")
	WebElement itinerary;

	public void oneWayTrip() {
		oneWayTrip.click();
	}

	public void sourceAndDestination(String src, String dest) {
		source.sendKeys(src);
		source.sendKeys(Keys.ENTER);
		destination.sendKeys(dest);
		destination.sendKeys(Keys.ENTER);
	}

	public void selectDate() {
		dateField.click();
		fromDate.click();
	}

	public void searchFlights() {
		searchButton.click();
	}

	public void verifyFares() throws InterruptedException {
		Thread.sleep(3000);
		fares.isDisplayed();
	}

	public void selectFlight() throws InterruptedException {
		Thread.sleep(3000);
		selectButton.click();
	}

	public void verifyItinerary() throws InterruptedException {
		Thread.sleep(3000);
		itinerary.isDisplayed();
	}
}
