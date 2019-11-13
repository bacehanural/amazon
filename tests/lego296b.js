module.exports = {

    '@tags': ['lego296b'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickPaymentMethods()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/payment-methods')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego296b.png')
        },
    }
