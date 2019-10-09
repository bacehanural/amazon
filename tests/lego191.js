module.exports = {

    '@tags': ['lego191'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@signupNewsletterTitle')
                .assert.elementPresent('@signupNewsletterDescription')
                .clickSignupNewsletterButton()
                .pause(3000)
                .assert.urlContains('https://lego.maf.demo.emakina.ae/subscribe')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego191.png')

        } 
    }