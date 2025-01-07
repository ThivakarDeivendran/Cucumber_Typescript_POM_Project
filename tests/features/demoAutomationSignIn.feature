Feature: Feature file contain Adactin Application login Functionality

Background: 
  Given User navigate into Web Application
@Test
Scenario: Verify  login Functionality for invalid inputs
 When User enter the username "Test"
 And User enter the password "Test"
 And User click the login Button
 Then User Observe that Error message displays
@Test
Scenario: Verify login Functionality for no inputs
 When User click the login Button
 Then User Observe that Error message displays
@Test
Scenario: Verify login Functionality for valid inputs
 When User enter the username "Thivakar"
 And User enter the password "Suryadevi12!@"
 And User click the login Button
 Then User Observe that Main page displays