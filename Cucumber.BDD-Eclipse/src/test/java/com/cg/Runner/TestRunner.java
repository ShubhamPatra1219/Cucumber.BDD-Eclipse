package com.cg.Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="Feature",glue="com.cg.StepDef",dryRun=false,monochrome=true, plugin={"pretty","json:test-output/cucumber.json", "junit:test-output/cucumber.xml","html:test-output"},tags="@Login,@Regression")
public class TestRunner {

}
