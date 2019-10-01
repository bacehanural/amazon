module.exports = {

'@tags': ['TC_Beko_ResponsiveLayout_Products_115'],
    'TC_Beko_ResponsiveLayout_Products'(client) {
    const page = client.page.bekoProducts();
   
    page
    .navigate()
    .resizeWindow(1024, 768)
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
        .waitForElementVisible('@pdpMainPage', 1000)
        .assert.elementPresent('@pdpMainPage');
   
           client.saveScreenshot('tests_output/screenshots/TC_Beko_ResponsiveLayout_Products_115.png')

    } 
 }