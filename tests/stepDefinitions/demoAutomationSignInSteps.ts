
import  { Given, When , Then } from '@cucumber/cucumber';
import testData from '../../testData/demoAutomationSignIn.json';
import { page } from '../../hooks/hook';
import { baseMethod } from '../../base/baseMethod';
import { demoAutomationSignInPage } from '../../pages/demoAutomationSignInPage';

let demoAutomationPage :demoAutomationSignInPage;
let base: baseMethod
Given('User navigate into Web Application',{timeout: 30000},async function () {
      demoAutomationPage = new demoAutomationSignInPage(page);
      base = new baseMethod(page);
      base.urlLaunchMethod(`${testData.appURL}`)
  });
  When('User enter the username {string}', async function (username: string) {
      await base.fillMethod(await demoAutomationPage.userNameMethod(), username)
  });
  When('User enter the password {string}', async function (password :string) {
      await base.fillMethod(await demoAutomationPage.passwordMethod(), password)
  });
  When('User click the login Button', async function () {
      await base.clickMethod(await demoAutomationPage.loginButtonMethod());
  });
  Then('User Observe that Error message displays', async function () {
     await base.expectContainsMethod(await demoAutomationPage.errorMessageMethod(),`${testData.invalidUserErrorMessage}`)
  });
  Then('User Observe that Main page displays', async function () {
    console.log("execution completed");
  });
