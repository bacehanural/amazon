module.exports = {

    'lego255'(client) {
        const bottomWrapper = '.footer-bottom-wrapper:first-child';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
                .acceptCookies()
                
                //burada sign in olduktan sonra footer kontrolü yapılmalı;

                .checkFooterInitialElements()
                client.moveToElement('.footer-bottom-wrapper:first-child', 100, 100);
                page.pause(6000);
               
                client.assert.screenshotIdenticalToBaseline(bottomWrapper, 'bottomWrapper');
        }
               
    }