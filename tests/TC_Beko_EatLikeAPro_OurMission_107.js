module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_OurMission_107'],
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
            .assert.elementPresent('@theMissionTop')
            .expect.element('@theMissionTop').to.have.attribute('src');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_OurMission_107.png')
        }
               
    }