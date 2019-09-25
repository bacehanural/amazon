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
        .waitForElementVisible('@productGridFirstItemFirst', 1000)
        .openKitchenItem()
        .clickKitchenProductItem()
        .waitForElementVisible('@productPageTitle', 1000)
        .clickProductCard()
        .waitForElementVisible('@pdpMainPage', 1000)
        .assert.elementPresent('@pdpMainPage');
   
           client.saveScreenshot('tests_output/screenshots/TC_Beko_Products_012.png')

    } 
 }