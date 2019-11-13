module.exports = {

    'lego216'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const accountComponentVIP = '#link-section-3';
        const page = client.page.legoHeader();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(10000)
                
                .acceptCookies()
                .signInPage()
                .typeEmail(email)
                .typePassword(password)
                .clickSignInButton()
                .pause(6000)
                client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);
                page
                .waitForElementVisible('@accountComponentVIP', 1000)
                .assert.elementPresent('@accountComponentVIP')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(accountComponentVIP, 'accountComponentVIP');
        }
               
    }