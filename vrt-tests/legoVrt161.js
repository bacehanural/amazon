module.exports = {

    'lego161'(client) {
    const carouselComponent = '.Section1 .slide:first-child';
    const page = client.page.mainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
            .checkCarouselInitialElements()
            .waitForElementVisible('@carouselComponent', 1000)
            .assert.elementPresent('@carouselComponent')
            .pause(6000);

           
            client.assert.screenshotIdenticalToBaseline(carouselComponent, 'carouselComponent');
    }
           
}