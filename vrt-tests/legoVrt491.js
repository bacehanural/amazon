module.exports = {

    'lego491'(client) {
    const emptyBagFirstDescription = '.EmptyCartMiddleContent > cx-paragraph > p > h1';
    const page = client.page.mainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()        
            .pause(3000)
            .signInAccount()
            .pause(3000)
            //Type email address
            //Type password
            //Click SignIn button

            .clickMiniCart()
            .checkGuestEmptyBagInitialElements()
            .assert.elementNotPresent('@emptyBagGuestSecondDescription')
            .assert.elementNotPresent('@emptyBagGuestSignIn')
            .pause(3000)
        client.assert.screenshotIdenticalToBaseline(emptyBagFirstDescription, 'emptyBagFirstDescription');
    }
           
}