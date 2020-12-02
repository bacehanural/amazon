module.exports = {

    'lidyana009'(client) {

        const email = 'b.acehan-ural-89@yopmail.com';
        const password = 'Burcu-123';

        const mainQuery = 'saat';
        const productBrand = '.content.container.product .brand-name';
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
            .clickFirstProductPLP()
            .pause(3000)

            client.assert.screenshotIdenticalToBaseline(productBrand, 'productBrand');
        }
               
    }