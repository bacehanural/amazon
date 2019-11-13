module.exports = {

    '@tags': ['lego296f'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickShoppingPrivacyPolicy()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/privacy-and-policy')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego296f.png')
        },
    }
