module.exports = {

    '@tags': ['lego299'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickCookiesFooterLink()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/legal/cookies')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego299.png')
        },
    }
