module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_085'],
    //TC_Beko_EatLikeAPro_084, TC_Beko_EatLikeAPro_085 
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
            .assert.elementPresent('@teaserCard')
            .clickTeaserCardButton()
            .pause(1000)
            .waitForElementVisible('@openedTeaserCardBanner', 1000)
            .assert.elementPresent('@openedTeaserCardBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_085.png')
        }
               
    }