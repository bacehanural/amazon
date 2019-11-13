module.exports = {

    'lego259'(client) {
        const footerGeneral = '.flex-row.navigation-footer-general';
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(10000)
                
                .acceptCookies()
                .clickThemesFirstItem()
                .clickThemesPLPFirstItem()
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(footerGeneral, 'footerGeneral');
        }
               
    }