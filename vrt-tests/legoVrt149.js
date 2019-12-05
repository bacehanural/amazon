module.exports = {

    'lego149'(client) {
    const breadcrumb = 'app-custom-breadcrumb > div';
    const page = client.page.mainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
        client.moveToElement('.NavigationBar .navWrapper > div:nth-child(2) > button', 50, 50);
        client.moveToElement('app-header-mega-dropdown > div.navWrapper > div:nth-child(2)  div:nth-child(1) > div > div > button', 50, 50);
            page
            .pause(3000)
            .clickShopBySeeAll()
            .pause(6000)
        client.assert.screenshotIdenticalToBaseline(breadcrumb, 'breadcrumb');
    }
           
}