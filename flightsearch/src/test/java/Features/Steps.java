package Features;

import java.util.concurrent.TimeUnit;

import org.cucumber.tests.FlightSearchPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.github.bonigarcia.wdm.WebDriverManager;;

public class Steps {

	WebDriver driver;
	FlightSearchPage fsp;

	@BeforeTest
	@Parameters("browser")
    @Given("User launches {string}  browser")
	public void user_launches_browser(String browser) {
		if (browser.equalsIgnoreCase("safari")) {
			driver = new SafariDriver();
		} else if (browser.equalsIgnoreCase("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		}

		driver.manage().window().maximize();
		
		fsp = new FlightSearchPage(driver);
	}

    
	@Test
	@When("User opens URL {string}")
	public void user_opens_URL(String url) {

		driver.get(url);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(100,TimeUnit.SECONDS);

	}

	@Test
	@When("Click on one way radio button")
	public void click_on_one_way_radio_button() {
		fsp.oneWayTrip();
	}

	@Test
	@When("User enters source as {string} and destination as {string}")
	public void user_enters_source_as_and_destination_as(String src, String dest) {
		fsp.sourceAndDestination(src, dest);

	}

	@Test
	@When("User enters start date")
	public void user_enters_start_date() {
		fsp.selectDate();
	}

	@Test
	@When("Click on search flights")
	public void click_on_search_flights() {
		fsp.searchFlights();
	}

	@Test
	@Then("Page should display fares")
	public void page_should_display_fares() {
          fsp.verifyFares();
	}

	@Test
	@When("User clicks on select link")
	public void user_clicks_on_select_link()  {
		fsp.selectFlight();
	}

	@Test
	@Then("Page should display cheapest and fastest itinerary")
	public void page_should_display_cheapest_and_fastest_itinerary() {
           fsp.verifyItinerary();
	}

	
	@AfterTest
	@Then("Close browser")
	public void close_browser() {

		driver.quit();
	}

}
