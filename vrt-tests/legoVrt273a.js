module.exports = {

    'lego273a'(client) {
        const email = 'burcu.ural.emakina@yopmail.com';
        const password = 'Burcu-123';

        const accountComponentProfileEdit = '.myAccount-Component div:first-child > div > div > .section-text > a';
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
        .waitForElementVisible('@accountComponentProfileEdit', 6000)
        .assert.elementPresent('@accountComponentProfileEdit')
        .pause(6000);
               
        client.assert.screenshotIdenticalToBaseline(accountComponentProfileEdit, 'accountComponentProfileEdit');
        
    }
               
 }