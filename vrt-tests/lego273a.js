module.exports = {

    'lego216'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const accountComponentProfileEdit = '#link-section-1';
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
                .waitForElementVisible('@accountComponentProfileEdit', 1000)
                .assert.elementPresent('@accountComponentProfileEdit')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(accountComponentProfileEdit, 'accountComponentProfileEdit');
        }
               
    }