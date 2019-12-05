module.exports = {

    'lego166'(client) {
      const exploreComponent = '.Section2C app-grid-layout:nth-child(2) > div';
      const page = client.page.mainPage();
  
          page
          .navigate()
          .maximizeWindow()
          .pause(6000)
          .acceptCookies()
          client.moveToElement('.Section2C app-grid-layout:nth-child(2) app-grid-layout > div > div > div:nth-child(3) .carousel-item p', 100, 100);
          page.pause(10000);
        client.assert.screenshotIdenticalToBaseline(exploreComponent, 'exploreComponent');
      }
             
  }