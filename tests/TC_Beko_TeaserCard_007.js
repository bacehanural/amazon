module.exports = {

'@tags': ['TC_Beko_TeaserCard_007'],   
    'TC_Beko_TeaserCard'(client) {
    const page = client.page.bekoHomePage();

        page
        .navigate()
        .maximizeWindow()
            .checkInitialElements()
            .closeCookies()
            .waitForElementVisible('@teaserFirstCardPicture', 1000)
            .openFirstTeaserCardPDP()
            .waitForElementVisible('@teaserCardFirstPDPBanner', 1000)
            .assert.elementPresent('@teaserCardFirstPDPBanner');

           
        client.saveScreenshot('tests_output/screenshots/TC_Beko_TeaserCard_007.png')
    }
           
}