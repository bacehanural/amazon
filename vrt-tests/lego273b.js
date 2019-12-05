module.exports = {

    'lego273b'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const accountComponentOrderStatus = '#link-section-2';
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
                .waitForElementVisible('@accountComponentOrderStatus', 1000)
                .assert.elementPresent('@accountComponentOrderStatus')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(accountComponentOrderStatus, 'accountComponentOrderStatus');
        }
               
    }