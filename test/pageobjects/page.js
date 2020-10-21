module.exports = class Page {
    constructor() {
      this.title = 'My Page';
    }
    
    open(path) {
      // eslint-disable-next-line no-undef
      browser.maximizeWindow();
      // eslint-disable-next-line no-undef
      browser.url(path);
    }
};