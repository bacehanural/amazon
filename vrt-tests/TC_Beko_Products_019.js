module.exports = {

    'TC_Beko_Products_019'(client) {
        const selectedProductsMenu = '.JS-toggle.JS-subnav-category.SubNavProductsMenu__root.open > aside';
        const page = client.page.bekoProducts();
   
       page
       .navigate()
       .maximizeWindow()
       .closeCookies()
           .checkInitialElements()
           .assert.elementPresent('@products')
           .openProductsMenu() 
           client.moveToElement('#subnav-products-grid-category-2 .SubNavProductsGrid__top .SubNavProductsGrid__title', 0, 0);
           page
           .waitForElementVisible('@productGridThirdItemFirst', 1000)
           .openBuiltInItem()
           .pause(6000);
   
           client.assert.screenshotIdenticalToBaseline(selectedProductsMenu, 'selectedProductsMenu');

    } 
 }