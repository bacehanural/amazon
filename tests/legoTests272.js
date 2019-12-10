module.exports = {

    '@tags': ['lego272'],   
        'TC_Lego_Header'(client) {
        const page = client.page.header();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            //Guest user için de Account hover edilecek sonra sign in clicklenecek
            .pause(3000)
            .assert.elementPresent('@typeEmail')
            .assert.elementPresent('@typePassword')
            .assert.elementPresent('@signInButton');
               
            client.saveScreenshot('tests_output/screenshots/lego272.png')
        },
    }
