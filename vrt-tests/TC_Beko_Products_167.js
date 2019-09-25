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
           .waitForElementVisible('@productGridFirstItemFirst', 1000)
           .openKitchenItem()
           .clickKitchenProductItem()
           .clickFilterButton()
           .clickCloseFilterButton()
           .pause(7000);
   
           client.assert.screenshotIdenticalToBaseline(filter, 'filter');

    } 
 }