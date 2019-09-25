module.exports = {

    'TC_Beko_Products_018'(client) {
      //TC_Beko_Products_017, TC_Beko_Products_018
    const selectedProductsMenu = '.JS-toggle.JS-subnav-category.SubNavProductsMenu__root.open > aside';
    const page = client.page.bekoProducts();
   
       page
       .navigate()
       .maximizeWindow()
       .closeCookies()
           .checkInitialElements()
           .assert.elementPresent('@products')
           .openProductsMenu() 
           client.moveToElement('#subnav-products-grid-category-2 .SubNavProductsGrid__top', 50, 50);
           page
           .waitForElementVisible('@productsGridThirdTitle', 1000)
           .openBuiltInSeeAll()
           .pause(6000);
   
      client.assert.screenshotIdenticalToBaseline(selectedProductsMenu, 'selectedProductsMenu');

    } 
 }