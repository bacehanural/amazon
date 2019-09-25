module.exports = {

    '@tags': ['TC_Beko_EatLikeAPro_Support_092'],
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
            .clickThirdTopPaneElement()
            .secondNewWindow(client);
            page
            .assert.urlContains('https://www.beko.com/es-es/Soporte');
               
            client.saveScreenshot('tests_output/screenshots/TC_Beko_EatLikeAPro_Support_092.png')
        }
               
    }