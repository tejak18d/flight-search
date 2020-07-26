Feature: Flight search

Scenario: Successful flight search and itinerary selection
   Given User launches "chrome"  browser
   When User opens URL "https://www.cheapoair.com/"
   And Click on one way radio button
   And User enters source as "OMA" and destination as "HYD India"
   And User enters start date
   And Click on search flights
   Then Page should display fares
   When User clicks on select link
   Then Page should display cheapest and fastest itinerary
   And Close browser
   
Scenario: Successful flight search and itinerary selection
   Given User launches "safari"  browser
   When User opens URL "https://www.cheapoair.com/"
   And Click on one way radio button
   And User enters source as "OMA" and destination as "HYD India"
   And User enters start date
   And Click on search flights
   Then Page should display fares
   When User clicks on select link
   Then Page should display cheapest and fastest itinerary
   And Close browser