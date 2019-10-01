module.exports = {

    'TC_Beko_Products_167'(client) {
        const filter = '#static-filters';
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
           .clickFilterButton()
           .clickCloseFilterButton()
           .pause(7000);
   
           client.assert.screenshotIdenticalToBaseline(filter, 'filter');

    } 
 }