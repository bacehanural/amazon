module.exports = {

    'lego231'(client) {
        const email = 'burcu.ural.emakina@yopmail.com';
        const password = 'Burcu-123';

        const accountComponentDisplayedMail = '.myAccount-Component div:first-child .section-text > span';
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
        .waitForElementVisible('@accountComponentDisplayedMail', 6000)
        .assert.elementPresent('@accountComponentDisplayedMail')
        .pause(6000);
               
        client.assert.screenshotIdenticalToBaseline(accountComponentDisplayedMail, 'accountComponentDisplayedMail');
        
    }
               
 }