module.exports = {

    'TC_Beko_Products_Map_026'(client) {
        const findAStoreNearMeMap = '#modal-where-to-buy-near-me > div:first-child > div > div > div > div';
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
           .waitForElementVisible('@productPageTitle', 1000)
           .clickProductCard()
           client.moveToElement('.ProductInfoParams__root .ProductInfoParams__center .container  button', 0, 0);
           page
           .pause(1000)
           .pdpWhereToBuyButton()
           .pause(1000)
           .findAStoreNearMeButton()
           .pause(6000);
   
           client.assert.screenshotIdenticalToBaseline(findAStoreNearMeMap, 'findAStoreNearMeMap');

    } 
 }