module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_FCBTools_102'],
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
            .waitForElementVisible('@thirdItemFirstVideo', 1000)
            .playThirdItemFirstVideo()
            .pause(1000)
            .assert.elementPresent('@thirdElementFirstVideoVerification')
            .expect.element('@thirdElementFirstVideoVerification').to.have.attribute('src');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_FCBTools_102.png')
        }
               
    }