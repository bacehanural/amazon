module.exports = {

    'lego953'(client) {
    const miniCartDropDownMenu = '.SiteTopHeaderRight > app-mini-cart > div > div > div';
    const page = client.page.mainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()        
            .pause(3000)
            .clickFirstCardShopNow()
            .clickAddToBagButton()
            .clickXModal()
            .clickLegoReflectContainer()
            .clickSecondCardShopNow()
            .clickAddToBagButton()
            .clickXModal()
            client.moveToElement('#dropdownManual', 50, 50);
            page
            .pause(6000)
        client.assert.screenshotIdenticalToBaseline(miniCartDropDownMenu, 'miniCartDropDownMenu');
    }
           
}