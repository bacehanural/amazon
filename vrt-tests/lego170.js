module.exports = {

    'lego170'(client) {
        const signupNewsletterComponent = '.Footer .CENTER';
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .waitForElementVisible('@signupNewsletterComponent', 1000)
                .assert.elementPresent('@signupNewsletterComponent');
    
               
                client.assert.screenshotIdenticalToBaseline(signupNewsletterComponent, 'signupNewsletterComponent');
        }
               
    }