module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_InspireMe_096'],
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
            .assert.elementPresent('@contentPaneFirstElement')
            .pause(1000);
            client.moveToElement('#top-menu-nav > ul > li:first-child', 50, 50);
            page
            .waitForElementVisible('@contentPaneFirstElementSecondItem', 1000)
            .clickContentPaneFirstElementSecondItem()
            .waitForElementVisible('@recipesForChildrenBanner', 1000)
            .assert.elementPresent('@recipesForChildrenBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_InspireMe_096.png')
        }
               
    }