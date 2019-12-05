module.exports = {

    'lego164'(client) {
    const productCarousel = '.Section3 .carousel';
    const page = client.page.mainPage();

        page
        .navigate()
        .maximizeWindow()
        .pause(6000)
        .acceptCookies()
        client.moveToElement('.Section3 .carousel', 100, 100);
        page.pause(3000);
        
        client.assert.screenshotIdenticalToBaseline(productCarousel, 'productCarousel');
    }
           
}