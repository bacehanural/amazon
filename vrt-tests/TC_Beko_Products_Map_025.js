module.exports = {

    'TC_Beko_Products_Map_025'(client) {
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
           client.moveToElement('#js-plp-loader-wrapper > div:nth-child(2) > div > section > div > div:first-child > div  .ProductCardPLP__productSpecsWrapper', 0, 0);
           page
           .pause(6000)
           .plpWhereToBuyButton()
           .pause(1000)
           .findAStoreNearMeButton()
           .pause(6000);
   
           client.assert.screenshotIdenticalToBaseline(findAStoreNearMeMap, 'findAStoreNearMeMap');

    } 
 }