module.exports = {

    'lego216'(client) {
        const header = '#btn-logout';
        const page = client.page.legoHeader();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(10000)
                
                .acceptCookies()
                .waitForElementVisible('@header', 1000)
                .assert.elementPresent('@header')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(header, 'header');
        }
               
    }