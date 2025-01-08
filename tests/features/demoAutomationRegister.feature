Feature: Demo Automation Application Register Feature

  Background:
    Given User navigate into Web Application Register Page
    
  Scenario: To verify the register functionality in demo Automation Application
    Given User enter the firstName "Thivakar" and lastName "Deivendran"
    When User enter the address "RenguNagar, chennai-600001"
    And User enter the emailAddress "thivakar@test.com"
    And User enter the phone "1234567899"
