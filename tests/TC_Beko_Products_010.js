module.exports = {

'@tags': ['TC_Beko_Products_010'],   
    'TC_Beko_Products'(client) {
    const page = client.page.bekoProducts();
   
       page
       .navigate()
       .maximizeWindow()
       .closeCookies()
           .checkInitialElements()
           .assert.elementPresent('@products')
           .openProductsMenu() 
           .waitForElementVisible('@productsGridFirstTitle', 1000)
           .openKitchenSeeAll()
           .assert.elementPresent('@selectedProductsMenu');
   
           client.saveScreenshot('tests_output/screenshots/TC_Beko_Products_010.png')

    } 
 }