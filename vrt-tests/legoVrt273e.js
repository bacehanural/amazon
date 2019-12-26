module.exports = {

    'lego273e'(client) {

        const accountComponentLogInOut = '#btn-logout';
        const page = client.page.header();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(9000)
        .acceptCookies()        
        .pause(6000)

        client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);
        page
        .pause(6000)

        .waitForElementVisible('@accountComponentLogInOut', 6000)
        .assert.elementPresent('@accountComponentLogInOut')
        .pause(6000);  
        
        client.assert.screenshotIdenticalToBaseline(accountComponentLogInOut, 'accountComponentLogInOut');
    }
               
}