module.exports = {

    'lego216'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const cookiesRibbon = '.cookies.text-white';
        const page = client.page.register();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
                //Guest User için de header'daki Account'a hover edilecek
                .typeEmail(email)
                .typePassword(password)
                .clickSignInButton()
                .pause(6000)
                .waitForElementVisible('@cookiesRibbon', 1000)
                .assert.elementPresent('@cookiesRibbon')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(cookiesRibbon, 'cookiesRibbon');
        }
               
    }