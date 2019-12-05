module.exports = {

    'lego388'(client) {
    const facetFilterFirstOption = '.ProductLeftRefinements > app-custom-product-facet-navigation .flex-column:first-child > div:nth-child(3) > div:nth-child(2) #collapseExample1 div:first-child > label:first-child';
    const page = client.page.mainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
        client.moveToElement('.NavigationBar .navWrapper > div:first-child > button', 50, 50);
            page
            .pause(3000)
            .clickFirstMegaFirstItem()
            .clickFacetFilterFirstOption()
            .pause(6000)
        client.assert.screenshotIdenticalToBaseline(facetFilterFirstOption, 'facetFilterFirstOption');
    }
           
}