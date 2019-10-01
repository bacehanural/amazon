module.exports = {

'@tags': ['TC_Beko_Products_011'],   
//TC_Beko_Products_008, TC_Beko_Products_009, TC_Beko_Products_011
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
           .assert.elementPresent('@selectedProductsMenu');
   
           client.saveScreenshot('tests_output/screenshots/TC_Beko_Products_011.png')

    } 
 }