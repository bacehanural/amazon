module.exports = {

    'lego214'(client) {
        const cookiesRibbon = '.cookies.text-white';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
                .waitForElementVisible('@cookiesRibbon', 1000)
                .assert.elementPresent('@cookiesRibbon')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(cookiesRibbon, 'cookiesRibbon');
        }
               
    }