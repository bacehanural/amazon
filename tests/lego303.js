module.exports = {

    '@tags': ['lego303'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickStayConnected()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/StayConnectedToLegoCommLink')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego303.png')
        },
    }
