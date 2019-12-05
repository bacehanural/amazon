module.exports = {

    'lego285'(client) {
    const sortBy = '.ProductListSlot > app-product-list cx-sorting';
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
            page
            .pause(6000)
            client.assert.screenshotIdenticalToBaseline(sortBy, 'sortBy');
    }
           
}