module.exports = {

    'lego169'(client) {
      const guaranteeComponent = '.Footer > app-grid-layout > div';
      const page = client.page.legoMainPage();
  
          page
          .navigate()
          .maximizeWindow()
          .pause(6000)
          .acceptCookies()
              .checkInitialElements()
              .waitForElementVisible('@guaranteeComponent', 1000)
              .assert.elementPresent('@guaranteeComponent');
  
             
              client.assert.screenshotIdenticalToBaseline(guaranteeComponent, 'guaranteeComponent');
      }
             
  }