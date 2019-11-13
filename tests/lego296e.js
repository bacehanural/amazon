module.exports = {

    '@tags': ['lego296e'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickTermsConditions()
            .pause(3000)
            .assert.elementPresent('@termsConditionsHeader')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego296e.png')
        },
    }
