module.exports = {

    'TC_Beko_Products_028'(client) {
        const comparePage = '.CompareCardsSlider__center';
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
            .clickPlpFirstCompare()
            .pause(1000)
            .clickPlpSecondCompare()
            .pause(1000)
            .clickPlpThirdCompare()
            .pause(1000)
            .clickPlpHeaderCompare()
            .pause(6000)
            client.moveToElement('.ToggleBtn__title', 50, 50)
            page.pause(6000)
           .clickRemoveButton()
           .pause(6000);
   
           client.assert.screenshotIdenticalToBaseline(comparePage, 'comparePage');

    } 
 }