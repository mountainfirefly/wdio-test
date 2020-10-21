const Page = require('./page');

class LoginPage extends Page {
  get crownLogo() {
    // eslint-disable-next-line no-undef
    return $('//div[@class="jss1233"]');
  }
  get loginTag() {
    // eslint-disable-next-line no-undef
    return $('//h4[@class="MuiTypography-root jss1240"]');
  }
  get welcomeHeading() {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line no-undef
    return $('//h3[@class="MuiTypography-root jss1241 MuiTypography-h3 MuiTypography-colorPrimary"]');
  }
  get loginImage() {
    // eslint-disable-next-line no-undef
    return $('//div[@id="bgimg"]');
  }
  get userIcon() {
    // eslint-disable-next-line no-undef
    return $(
      '(//div[@class="MuiInputAdornment-root MuiInputAdornment-filled MuiInputAdornment-positionStart"])[1]',
    );
  }
  get username() {
    // eslint-disable-next-line no-undef
    return $('//input[@id="username"]');
  }
  get pwdIcon() {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line no-undef
    return $('(//div[@class="MuiInputAdornment-root MuiInputAdornment-filled MuiInputAdornment-positionStart"])[2]');
  }
  get password() {
    // eslint-disable-next-line no-undef
    return $('//input[@id="password"]');
  }
  get byLogginText() {
    // eslint-disable-next-line no-undef
    return $('//p[@class="MuiTypography-root jss1242 MuiTypography-body2"]');
  }
  get privacyLink() {
    // eslint-disable-next-line no-undef
    return $('//a[contains(text(),"Privacy Statement & Terms of use.")]');
  }
  get forgotLink() {
    // eslint-disable-next-line no-undef
    return $('//a[contains(text(),"Forgot password?")]');
  }
  get loginBtn() {
    // eslint-disable-next-line no-undef
    return $('//button[@id="btn-login"]');
  }
  get copyrightText() {
    // eslint-disable-next-line no-undef
    return $(
      '//span[contains(text(),"Copyright 2020 Crown Worldwide Group | ")]',
    );
  }
  get footerPrivacyLink() {
    // eslint-disable-next-line no-undef
    return $('//li//a[contains(text(),"Privacy Policy")]');
  }
  get userValidation() {
    // eslint-disable-next-line no-undef
    return $('//span[@class="jss1256 errorText error-username"]');
  }
  get pwdValidation() {
    // eslint-disable-next-line no-undef
    return $('//span[@class="jss1256 errorText error-password"]');
  }
  open() {
    super.open('login');
    this.loginImage.waitForDisplayed({
      timeout: 50000,
    });
  }
  setLoginDetails(usrName, pwd) {
    this.username.click();
    this.username.setValue(usrName);
    this.password.click();
    this.password.setValue(pwd);
  }
  clickLogin() {
    this.loginBtn.click();
    // eslint-disable-next-line no-undef
    browser.pause(15000);
  }
}

module.exports = new LoginPage();
