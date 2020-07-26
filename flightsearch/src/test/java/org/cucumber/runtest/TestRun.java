package org.cucumber.runtest;

import org.junit.runner.RunWith;
import org.testng.annotations.DataProvider;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
@CucumberOptions
(
		features="./Features/scenarios.feature",
		glue="org.cucumber.stepdefs",
		dryRun=false,
		monochrome=true,
		plugin={"pretty","html:test-output"}
		
		
		)
public class TestRun extends AbstractTestNGCucumberTests {

	@Override
    @DataProvider(parallel = true)
    public Object[][] scenarios() {
          return super.scenarios();
    }
}


