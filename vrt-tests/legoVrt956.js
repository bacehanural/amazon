module.exports = {

    'lego956'(client) {
    const productTitle = 'app-custom-product-intro > div > span';
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
            .clickAddedFirstProduct()
            .pause(6000)
        client.assert.screenshotIdenticalToBaseline(productTitle, 'productTitle');
    }
           
}