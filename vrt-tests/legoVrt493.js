module.exports = {

    'lego493'(client) {
    const emptyBagGuestSecondDescription = '.EmptyCartMiddleContent > cx-paragraph > p > h2';
    const page = client.page.mainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()        
            .pause(3000)
            .clickMiniCart()
            .checkGuestEmptyBagInitialElements()
            .pause(3000)
        client.assert.screenshotIdenticalToBaseline(emptyBagGuestSecondDescription, 'emptyBagGuestSecondDescription');
    }
           
}