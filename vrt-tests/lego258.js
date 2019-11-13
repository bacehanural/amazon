module.exports = {

    'lego258'(client) {
        const footerGeneral = '.flex-row.navigation-footer-general';
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(10000)
                
                .acceptCookies()
                .clickTermsConditions()
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(footerGeneral, 'footerGeneral');
        }
               
    }