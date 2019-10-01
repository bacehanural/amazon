module.exports = {

    'TC_Beko_Products_164'(client) {
        const comparePage = '.CompareCardsSlider__center';
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
           .clickPdpCompare()
           .backToPLP()
           .pause(1000)
           .clickPlpSecondCompare()
           .pause(1000)
           .clickPlpThirdCompare()
           .pause(1000)
           .clickPlpFourthCompare()
           .pause(1000)
           .clickPlpHeaderCompare()
           .pause(6000)
           client.moveToElement('.ToggleBtn__title', 50, 50)
           page.pause(6000);
   
           client.assert.screenshotIdenticalToBaseline(comparePage, 'comparePage');

    } 
 }