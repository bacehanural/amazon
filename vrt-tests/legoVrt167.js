module.exports = {

    'lego167'(client) {
        const newSetsComponent = '.Section4 .category-carousel-wrapper';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.Section4 .category-carousel-wrapper > h3', 100, 100);
            page
            .pause(6000);
         client.assert.screenshotIdenticalToBaseline(newSetsComponent, 'newSetsComponent');
        }
               
    }