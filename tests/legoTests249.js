module.exports = {

    '@tags': ['lego249'],   

        'TC_Lego_Header'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const page = client.page.header();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            //Guest user için de Account hover edilecek sonra sign in clicklenecek
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(6000)
            client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);

            page
            .pause(3000)
            .clickProfileEdit();
            /*.pause(3000)
            .assert.elementPresent('@ProfileEditPageCannotBeDisplayed');*/
               
            client.saveScreenshot('tests_output/screenshots/lego249.png')
        },
    }


