module.exports = {

    'lego273b'(client) {
        const email = 'burcu.ural.emakina@yopmail.com';
        const password = 'Burcu-123';

        const accountComponentOrderStatus = '.myAccount-Component div:nth-child(2) > div > div > .section-text > a';
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

        client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);
        page
        .pause(6000)
        .waitForElementVisible('@accountComponentOrderStatus', 6000)
        .assert.elementPresent('@accountComponentOrderStatus')
        .pause(6000);
    
               
        client.assert.screenshotIdenticalToBaseline(accountComponentOrderStatus, 'accountComponentOrderStatus');

    }
               
}