module.exports = {

    'lego216'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const accountComponent = '.SiteTopHeaderRight .myAccount-Component .collapseButton';
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
                .waitForElementVisible('@accountComponent', 1000)
                .assert.elementPresent('@accountComponent')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(accountComponent, 'accountComponent');
        }
               
    }