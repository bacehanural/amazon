module.exports = {

    '@tags': ['lego301'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickTermsOfUse()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/legal/notices-and-policies/legal-notice')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego301.png')
        },
    }
