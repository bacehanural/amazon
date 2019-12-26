module.exports = {

    'lego273d'(client) {

        const guestOrderStatus = '.myAccount-Component div:first-child > div > div > .section-text > a';
        const page = client.page.header();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(9000)
        .acceptCookies()        
        .pause(6000)

        client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);
        page
        .pause(6000)
        .waitForElementVisible('@guestOrderStatus', 6000)
        .assert.elementPresent('@guestOrderStatus')
        .pause(6000);
    
               
        client.assert.screenshotIdenticalToBaseline(guestOrderStatus, 'guestOrderStatus');

    }
               
}