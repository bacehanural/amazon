module.exports = {

    'TC_Beko_Products_022'(client) {
      //TC_Beko_Products_021, TC_Beko_Products_022
    const selectedProductsMenu = '.JS-toggle.JS-subnav-category.SubNavProductsMenu__root.open > aside';
    const page = client.page.bekoProducts();
   
       page
       .navigate()
       .maximizeWindow()
       .closeCookies()
           .checkInitialElements()
           .assert.elementPresent('@products')
           .openProductsMenu() 
           client.moveToElement('#subnav-products-grid-category-3 .SubNavProductsGrid__top', 50, 50);
           page
           .waitForElementVisible('@productsGridFourthTitle', 1000)
           .openAirHomeCareSeeAll()
           .pause(6000);
   
      client.assert.screenshotIdenticalToBaseline(selectedProductsMenu, 'selectedProductsMenu');

    } 
 }