module.exports = {

    '@tags': ['lego298'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickPrivacyPolicy()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/legal/notices-and-policies/privacy-policy')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego298.png')
        },
    }
