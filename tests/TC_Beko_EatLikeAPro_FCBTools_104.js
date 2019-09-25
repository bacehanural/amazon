module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_FCBTools_104'],
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
            .waitForElementVisible('@contentPaneSecondElementThirdItem', 1000)
            .clickContentPaneSecondElementThirdItem()
            .waitForElementVisible('@thirdElementGrilledDishes', 1000)
            .clickCloseCookies()
            .pause(1000)
            .clickThirdElementGrilledDishes()
            .waitForElementVisible('@recipesForChildrenBanner', 1000)
            .assert.elementPresent('@recipesForChildrenBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_FCBTools_104.png')
        }
               
    }