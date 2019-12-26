module.exports = {

    'lego255'(client) {

        const email = 'burcu.ural.emakina@yopmail.com';
        const password = 'Burcu-123';

        const bottomWrapper = '.footer-bottom-wrapper:first-child';
        const page = client.page.mainPage();
    
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

        client.moveToElement('.footer-bottom-wrapper:first-child', 100, 100);
        page.pause(6000)   
        
        .checkFooterInitialElements()

        .pause(6000);       
        client.assert.screenshotIdenticalToBaseline(bottomWrapper, 'bottomWrapper');
        }
               
    }