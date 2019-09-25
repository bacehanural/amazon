module.exports = {

    'TC_Beko_Products_015'(client) {
        const selectedProductsMenu = '.JS-toggle.JS-subnav-category.SubNavProductsMenu__root.open > aside';
        const page = client.page.bekoProducts();
   
       page
       .navigate()
       .maximizeWindow()
       .closeCookies()
           .checkInitialElements()
           .assert.elementPresent('@products')
           .openProductsMenu() 
           client.moveToElement('#subnav-products-grid-category-1 .SubNavProductsGrid__top .SubNavProductsGrid__title', 0, 0);
           page
           .waitForElementVisible('@productGridSecondItemFirst', 1000)
           .openLaundryItem()
           .pause(6000);
   
           client.assert.screenshotIdenticalToBaseline(selectedProductsMenu, 'selectedProductsMenu');

    } 
 }