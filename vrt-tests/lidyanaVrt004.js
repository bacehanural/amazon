module.exports = {

    'lidyana004'(client) {

        const email = 'b.acehan-ural89@yopmail.com';
        const password = 'Burcu-123';

        const mainQuery = 'saat';
        const categoryBreadcrumb = '.breadcrumb.mobile-breadcrumb li:nth-child(2)';
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

            client.assert.screenshotIdenticalToBaseline(categoryBreadcrumb, 'categoryBreadcrumb');
        }
               
    }