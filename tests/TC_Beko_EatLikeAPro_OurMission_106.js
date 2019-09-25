module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_OurMission_106'],
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
            .assert.elementPresent('@contentPaneThirdElement')
            .clickContentPaneThirdElement()
            .waitForElementVisible('@theMissionTop', 1000)
            .clickCloseCookies()
            .assert.elementPresent('@theMissionTop');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_OurMission_106.png')
        }
               
    }