module.exports = {

    'lego166'(client) {
      const exploreComponent = '.Section2C .flex-column';
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