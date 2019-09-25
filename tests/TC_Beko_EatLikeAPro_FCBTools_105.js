module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_FCBTools_105'],
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
            .waitForElementVisible('@thirdElementHealthyFamily', 1000)
            .clickCloseCookies()
            .pause(1000)
            .clickThirdElementHealthyFamily()
            .waitForElementVisible('@thirdElementHealthyFamilyGrid', 1000)
            .clickHealthyFamilyGrid()
            .waitForElementVisible('@healthyFamilyBanner', 1000)
            .assert.elementPresent('@healthyFamilyBanner');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_FCBTools_105.png')
        }
               
    }