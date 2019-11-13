module.exports = {

    'lego216'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const accountComponentLogOut = '#btn-logout';
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
                .waitForElementVisible('@accountComponentLogOut', 1000)
                .assert.elementPresent('@accountComponentLogOut')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(accountComponentLogOut, 'accountComponentLogOut');
        }
               
    }