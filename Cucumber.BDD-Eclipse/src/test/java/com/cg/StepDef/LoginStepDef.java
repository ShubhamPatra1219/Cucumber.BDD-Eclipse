package com.cg.StepDef;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {
	
	WebDriver driver;

	@Given("^user is on Login Page$")
	public void user_is_on_Login_Page() throws Throwable {
		System.setProperty("webdriver.chrome.driver","D:\\Selenium Practices\\Required Softwares\\Browser Drivers\\Chrome Drivers\\83.0.4103.39\\chromedriver.exe");
        driver = new ChromeDriver();
		driver.get("https://www.shoppersstop.com/#login");
		driver.manage().window().maximize();
	}

	@When("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"j_username\"]")).sendKeys("rincy");
	    driver.findElement(By.xpath("//*[@id=\"j_password\"]")).sendKeys("rincy@123");
	}

	@When("^user clicks on submit button$")
	public void user_clicks_on_submit_button() throws Throwable {
	   driver.findElement(By.xpath("//*[@id=\"loginajax\"]")).click();
	   
	}

	@Then("^user is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
		Assert.assertEquals("Online Shopping India - Shop for clothes, shoes, Bags, watches @ Shoppersstop.com",driver.getTitle());
	  
	}

	
}
