module.exports = {

    'TC_Beko_Products_169'(client) {
        const matchingProducts = '#static-filters .ProductFilters__buttons';
        const page = client.page.bekoProducts();
   
       page
       .navigate()
       .maximizeWindow()
       .closeCookies()
           .checkInitialElements()
           .assert.elementPresent('@products')
           .openProductsMenu() 
           .waitForElementVisible('@productGridFirstItemFirst', 1000)
           .openKitchenItem()
           .clickKitchenProductItem()
           .clickFilterButton()
           .pause(6000)
           .clickFirstTechnologyButton()
           .pause(6000)
           .seeMatchingProductsButton()
           .pause(7000);
   
           client.assert.screenshotIdenticalToBaseline(matchingProducts, 'matchingProducts');

    } 
 }