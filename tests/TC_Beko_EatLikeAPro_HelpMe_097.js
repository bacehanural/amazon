module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_HelpMe_097'],
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
            .assert.elementPresent('@contentPaneSecondElement')
            .pause(1000);
            client.moveToElement('#top-menu-nav > ul > li:nth-child(2)', 50, 50);
            page
            .waitForElementVisible('@contentPaneSecondElementFirstItem', 1000)
            .assert.elementPresent('@contentPaneSecondElementFirstItem')
            .assert.elementPresent('@contentPaneSecondElementSecondItem')
            .assert.elementPresent('@contentPaneSecondElementThirdItem')
            .assert.elementPresent('@contentPaneSecondElementFourthItem');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_HelpMe_097.png')
        }
               
    }