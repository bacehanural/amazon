module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_111'],
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
            .pause(1000)
            .clickThirdElementHealthyFamily()
            .assert.elementPresent('@eatLikeAProNavigate')
            .navigateEatLikeAProHomePage()
            .waitForElementVisible('@topPane', 1000)
            .assert.elementPresent('@topPane');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_111.png')
        }
               
    }