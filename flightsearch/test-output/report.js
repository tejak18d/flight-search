$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/scenarios.feature");
formatter.feature({
  "name": "Flight search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful flight search and itinerary selection",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User launches \"chrome\"  browser",
  "keyword": "Given "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_launches_browser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.cheapoair.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on one way radio button",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.click_on_one_way_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters source as \"OMA\" and destination as \"HYD India\"",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_enters_source_as_and_destination_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters start date",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_enters_start_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search flights",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.click_on_search_flights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page should display fares",
  "keyword": "Then "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.page_should_display_fares()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on select link",
  "keyword": "When "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_clicks_on_select_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page should display cheapest and fastest itinerary",
  "keyword": "Then "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.page_should_display_cheapest_and_fastest_itinerary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful flight search and itinerary selection",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User launches \"safari\"  browser",
  "keyword": "Given "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_launches_browser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.cheapoair.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on one way radio button",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.click_on_one_way_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters source as \"OMA\" and destination as \"HYD India\"",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_enters_source_as_and_destination_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters start date",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_enters_start_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search flights",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.click_on_search_flights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page should display fares",
  "keyword": "Then "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.page_should_display_fares()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on select link",
  "keyword": "When "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.user_clicks_on_select_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: \nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Tejas-MacBook-Air.local\u0027, ip: \u00272600:8804:a00:97a:0:0:0:a6d0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities {acceptInsecureCerts: false, browserName: Safari, browserVersion: 12.0.1, javascriptEnabled: true, platform: MAC, platformName: MAC, setWindowRect: true}\nSession ID: 80CA9EF1-20DF-44BC-8133-896883B3448D\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027cta-1st select__cta\u0027][1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy25.click(Unknown Source)\n\tat org.cucumber.tests.FlightSearchPage.selectFlight(FlightSearchPage.java:67)\n\tat org.cucumber.stepdefs.Steps.user_clicks_on_select_link(Steps.java:85)\n\tat ✽.User clicks on select link(file:///Users/tejakurucheti/Documents/workspace/flightbooking/./Features/scenarios.feature:23)\n",
  "status": "failed"
});
formatter.step({
  "name": "Page should display cheapest and fastest itinerary",
  "keyword": "Then "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.page_should_display_cheapest_and_fastest_itinerary()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "org.cucumber.stepdefs.Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});