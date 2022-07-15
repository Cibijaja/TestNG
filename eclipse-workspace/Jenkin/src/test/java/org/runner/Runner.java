package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions
(
		features = {"C:\\Users\\CIBI\\eclipse-workspace\\Jenkin\\src\\test\\resources\\Login.Feature"},
		glue = {"org.stepDefinition"},
		dryRun = true,
		monochrome = true,
		plugin= {"pretty"}
)

public class Runner {
	
	


}
