module.exports = {

    'lidyana005'(client) {

        const email = 'acehan-ural89@yopmail.com';
        const password = 'Burcu-123';

        const mainQuery = 'saat';
        const wishlistFirstProduct = '.products.type2 > ul:first-child > .product-list-item:first-child';
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

            client.assert.screenshotIdenticalToBaseline(wishlistFirstProduct, 'wishlistFirstProduct');
        }
               
    }