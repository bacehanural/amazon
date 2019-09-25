module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_MartinBerasategui_091'],
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
            .clickSecondTopPaneElement()
            .secondNewWindow(client);
            page
            .assert.urlContains('https://bekoencasadeberasategui.com/');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_MartinBerasategui_091.png')
        }
               
    }