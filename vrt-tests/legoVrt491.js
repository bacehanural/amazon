module.exports = {

    'lego491'(client) {
        const emptyBagFirstDescription = '.EmptyCartMiddleContent > cx-paragraph > p > h1';
        const page = client.page.mainPage();
        
        page
        .navigate()
        .maximizeWindow()
        .pause(9000)
        .acceptCookies()        
        .pause(6000)

        client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);
        page
        .pause(6000)
        .clickLogInOut()
        .pause(6000)
            
        .typeEmail(email)
        .typePassword(password)
        .clickSignInButton()
        .pause(6000)

        .clickMiniCart()
        .checkGuestEmptyBagInitialElements()
        .assert.elementNotPresent('@emptyBagGuestSecondDescription')
        .assert.elementNotPresent('@emptyBagGuestSignIn')
        .pause(3000)

        client.assert.screenshotIdenticalToBaseline(emptyBagFirstDescription, 'emptyBagFirstDescription');
    }

}