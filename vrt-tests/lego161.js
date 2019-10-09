module.exports = {

    'lego161'(client) {
    const carouselComponent = '.Section1 .slide:first-child';
    const page = client.page.legoMainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
            .checkInitialElements()
            .waitForElementVisible('@carouselComponent', 1000)
            .assert.elementPresent('@carouselComponent');

           
            client.assert.screenshotIdenticalToBaseline(carouselComponent, 'carouselComponent');
    }
           
}