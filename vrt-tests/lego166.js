module.exports = {

    'lego166'(client) {
      const exploreComponent = '.Section2C app-grid-layout:nth-child(2) > div';
      const page = client.page.legoMainPage();
  
          page
          .navigate()
          .maximizeWindow()
          .pause(6000)
          .acceptCookies()
              .checkInitialElements()
              .waitForElementVisible('@exploreComponent', 1000)
              .assert.elementPresent('@exploreComponent');
  
             
              client.assert.screenshotIdenticalToBaseline(exploreComponent, 'exploreComponent');
      }
             
  }