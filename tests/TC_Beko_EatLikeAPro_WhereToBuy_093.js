module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_WhereToBuy_093'],
        'TC_Beko_EatLikeAPro'(client) {
        const page = client.page.bekoEatLikeAPro();
    
            page
            .navigate()
            .maximizeWindow()
            .closeCookies()
            .openEatLikeAProPage()
            .newWindow(client);
            page
            .checkEatLikeAProElements()
            .clickFourthTopPaneElement()
            .secondNewWindow(client);
            page
            .waitForElementVisible('@headerMain', 1000)
            .assert.elementPresent('@headerMain')
            .assert.elementPresent('@heroBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_WhereToBuy_093.png')
        }
               
    }