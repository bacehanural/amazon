module.exports = {

    '@tags': ['lego302'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickSubscribeLego()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/legal/notices-and-policies/privacy-policy')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego302.png')
        },
    }
