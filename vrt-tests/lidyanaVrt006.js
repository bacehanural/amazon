module.exports = {

    'lidyana006'(client) {

        const email = 'burcu.acehan-1989@yopmail.com';
        const password = 'Burcu-123';

        const mainQuery = 'saat';
        const continueShoppingButtonWishlistPage = '.wishlist-header.empty-wishlist .btn-primary';
        const page = client.page.mainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(3000)
            .checkInitialElements()
            .acceptCookies()

            .clickLogin()
            .pause(3000)
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(3000)

            .clickSearch()
            .searchMainPage(mainQuery)
            .clickSearchOptionFirstCategory()
            .pause(3000)

            .clickFirstProductPLPWishlistIcon()
            .clickModalPageOk()
            .clickWishlistIcon()
            .pause(3000)
            .clickFirstProductWishlistPageWishlistIcon()
            .pause(3000)

            client.assert.screenshotIdenticalToBaseline(continueShoppingButtonWishlistPage, 'continueShoppingButtonWishlistPage');
        }
               
    }