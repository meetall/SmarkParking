'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {


  it('should automatically redirect to /landing when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/landing");
  });


  describe('landing', function () {

    beforeEach(function () {
      browser.get('index.html#!/landing');
    });


    it('should render landing when user navigates to /landing', function () {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('register', function () {

    beforeEach(function () {
      browser.get('index.html#!/register');
    });


    it('should render register when user navigates to /register', function () {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
