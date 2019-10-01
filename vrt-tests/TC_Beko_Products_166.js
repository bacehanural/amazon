module.exports = {

    'TC_Beko_Products_166'(client) {
        const filterTechnology = '#modal-filter-bottom-buttons';
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
           .pause(6000)
           .clickFirstTechnologyButton()
           .pause(7000);
   
           client.assert.screenshotIdenticalToBaseline(filterTechnology, 'filterTechnology');

    } 
 }