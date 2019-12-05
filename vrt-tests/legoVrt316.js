module.exports = {

    'lego316'(client) {
    const carouselComponent = '.Section1 .slide:first-child';
    const page = client.page.mainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
            .checkCarouselInitialElements()
            .waitForElementVisible('@carouselComponent', 1000)
            .assert.elementPresent('@carouselComponent');

           
            client.assert.screenshotIdenticalToBaseline(carouselComponent, 'carouselComponent');
    }
           
}