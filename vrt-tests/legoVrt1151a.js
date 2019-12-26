module.exports = {

    'lego1151a'(client) {

    const email = 'burcu.ural.emakina@yopmail.com';
    const password = 'Burcu-123';

    const mainQuery = 'lego';

    const accountComponent = '.SiteTopHeaderRight .myAccount-Component .collapseButton';
    const page = client.page.header();

    page
    .navigate()
    .maximizeWindow()
    .pause(9000)
    .acceptCookies()        
        .pause(3000)

        client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);
        page
        .clickLogInOut()
        .pause(6000)

        .typeEmail(email)
        .typePassword(password)
        .clickSignInButton()
        .pause(6000)

        .clickFirstCardShopNow()
        .pause(3000)
        .clickAddToBagButton()
        .clickXModal()
        .pause(3000)
        .clickLegoReflectContainer()
        .pause(6000)

        .clickSecondCardShopNow()
        .clickAddToBagButton()
        .pause(3000)
        .clickXModal()
        .pause(3000)
        .clickLegoReflectContainer()
        .pause(6000)

        .clickThirdCardShopNow()
        .clickAddToBagButton()
        .pause(3000)
        .clickXModal()
        .pause(3000)
        .clickLegoReflectContainer()
        .pause(6000)

        .clickSearch()
        .searchMainPage(mainQuery)
        .pause(6000)

        client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);
        page
        .pause(6000)

        client.assert.screenshotIdenticalToBaseline(accountComponent, 'accountComponent');
    }
           
}