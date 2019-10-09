module.exports = {

    'lego164'(client) {
    const productCarousel = '.Section3 .carousel';
    const page = client.page.legoMainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
            .checkInitialElements()
            .waitForElementVisible('@productCarousel', 1000)
            .assert.elementPresent('@productCarousel');

           
            client.assert.screenshotIdenticalToBaseline(productCarousel, 'productCarousel');
    }
           
}