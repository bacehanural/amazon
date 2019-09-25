module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_086'],
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
            .assert.elementPresent('@bekoDropDownListBox')
            .pause(1000);
            client.moveToElement('#lblBanner7060', 50, 50);
            page
            .waitForElementVisible('@bekoDropDownListBoxFirstNavigate', 1000)
            .assert.elementPresent('@bekoDropDownListBoxFirstNavigate')
            .assert.elementPresent('@bekoDropDownListBoxSecondNavigate');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_086.png')
        }
               
    }