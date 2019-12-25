module.exports = {

    '@tags': ['lego250'],   

        'TC_Lego_Header'(client) {
        const email = 'burcu.ural.emakina@yopmail.com';
        const password = 'Burcu-123';
        const page = client.page.header();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);

            page
            .clickLogInOut()
            .pause(6000)
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(6000)
            client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);

            page
            .pause(3000)
            .clickOrderStatus()
            .pause(3000)
            .assert.elementPresent('@accountSelectedTab');
               
            client.saveScreenshot('tests_output/screenshots/lego250.png')
        },
    }


