module.exports = {

    'TC_Beko_Products_014'(client) {
      //TC_Beko_Products_013, TC_Beko_Products_014
    const selectedProductsMenu = '.JS-toggle.JS-subnav-category.SubNavProductsMenu__root.open > aside';
    const page = client.page.bekoProducts();
   
       page
       .navigate()
       .maximizeWindow()
       .closeCookies()
           .checkInitialElements()
           .assert.elementPresent('@products')
           .openProductsMenu() 
           client.moveToElement('#subnav-products-grid-category-1 .SubNavProductsGrid__top', 50, 50);
           page
           .waitForElementVisible('@productsGridSecondTitle', 1000)
           .openLaundrySeeAll()
           .pause(6000);
   
      client.assert.screenshotIdenticalToBaseline(selectedProductsMenu, 'selectedProductsMenu');

    } 
 }