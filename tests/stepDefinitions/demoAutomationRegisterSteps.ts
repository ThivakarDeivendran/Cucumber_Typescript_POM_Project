import { Given, When } from '@cucumber/cucumber';
import { page } from '../../hooks/hook';
import testData from '../../testData/demoAutomationRegister.json';
import { baseMethod } from '../../base/baseMethod';
import { demoAutomationRegisterPage } from '../../pages/demoAutomationRegisterPage';

  let  demoRegisterPage :demoAutomationRegisterPage;
  let base: baseMethod
Given('User navigate into Web Application Register Page',{timeout: 30000},async function () {
  demoRegisterPage = new demoAutomationRegisterPage(page);
    base = new baseMethod(page);
    await base.urlLaunchMethod(`${testData.registerURL}`);
  });
  Given('User enter the firstName {string} and lastName {string}', async function (firstName, lastName) {
    await base.fillMethod(await demoRegisterPage.firstNameMethod(), firstName);
    await base.fillMethod(await demoRegisterPage.lastNameMethod(), lastName);
  });
  When('User enter the address {string}', async function (address) {
    await base.fillMethod(await demoRegisterPage.addressMethod(),address)
  });
  When('User enter the emailAddress {string}', async function (emailAddress) {
    await base.fillMethod(await demoRegisterPage.emailAddressMethod(),emailAddress)
  });
  When('User enter the phone {string}', async function (phoneNumber) {
    await base.fillMethod(await demoRegisterPage.phoneNumberMethod(),phoneNumber)
  });