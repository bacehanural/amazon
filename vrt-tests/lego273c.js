module.exports = {

    'lego273c'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const accountComponentLogOut = '#btn-logout';
        const page = client.page.header();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
                
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