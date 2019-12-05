module.exports = {

    'lego216'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const accountComponentDisplayedMail = '.SiteTopHeaderRight .collapse-menu .card-body #section-1 .my-auto div:nth-child(2) span';
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
                .waitForElementVisible('@accountComponentDisplayedMail', 1000)
                .assert.elementPresent('@accountComponentDisplayedMail')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(accountComponentDisplayedMail, 'accountComponentDisplayedMail');
        }
               
    }