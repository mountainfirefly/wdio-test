/** @format */
const lp = require('../pageObjects/login.page');

describe('login scenarios', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    lp.open();
  });
  it('Verify all the elements are present on login page', () => {
    lp.crownLogo.isDisplayed();
    // lp.loginTag.isDisplayed();
    // lp.welcomeHeading.isDisplayed();
    // lp.loginImage.isDisplayed();
    // lp.userIcon.isDisplayed();
    // lp.pwdIcon.isDisplayed();
    // lp.byLogginText.isDisplayed();
    // lp.privacyLink.isDisplayed();
    // lp.forgotLink.isDisplayed();
    // lp.loginBtn.isDisplayed();
    // lp.copyrightText.isDisplayed();
    // lp.footerPrivacyLink.isDisplayed();
  });
});