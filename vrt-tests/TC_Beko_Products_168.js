module.exports = {

    'TC_Beko_Products_168'(client) {
        const technologies = '.JS-Filter-Section > div:first-child';
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
           .pause(6000)
           .clickClearAllButton()
           .pause(7000);
   
           client.assert.screenshotIdenticalToBaseline(technologies, 'technologies');

    } 
 }