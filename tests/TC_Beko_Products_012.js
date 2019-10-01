module.exports = {

'@tags': ['TC_Beko_Products_012'],
    'TC_Beko_Products'(client) {
    const page = client.page.bekoProducts();
   
    page
    .navigate()
    .maximizeWindow()
    .closeCookies()
        .checkInitialElements()
        .assert.elementPresent('@products')
        .openProductsMenu() 
        client.moveToElement('#subnav-products-grid-category-0 .SubNavProductsGrid__top .SubNavProductsGrid__title', 0, 0);
        page
        .openKitchenItem()
        .clickKitchenProductItem()
        .waitForElementVisible('@productPageTitle', 1000)
        .clickProductCard()
        .waitForElementVisible('@pdpMainPageDirectory', 1000)
        .assert.elementPresent('@pdpMainPageDirectory');
   
           client.saveScreenshot('tests_output/screenshots/TC_Beko_Products_012.png')

    } 
 }