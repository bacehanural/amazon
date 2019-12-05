module.exports = {

    'lego165'(client) {
        const themesComponent = '.theme-carousel-wrapper:first-child';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.Section2C app-grid-layout:nth-child(2) > div > span', 50, 50);
            page.pause(6000);
            client.assert.screenshotIdenticalToBaseline(themesComponent, 'themesComponent');
        }
               
    }