module.exports = {

    '@tags': ['lego272'],   
        'TC_Lego_Header'(client) {
        const page = client.page.legoHeader();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickAccount()
            .pause(3000)
            .assert.elementPresent('@typeEmail')
            .assert.elementPresent('@typePassword')
            .assert.elementPresent('@signInButton');
               
            client.saveScreenshot('tests_output/screenshots/lego272.png')
        },
    }
