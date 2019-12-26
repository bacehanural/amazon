module.exports = {

    'lego247'(client) {
        const email = 'burcu.ural.emakina@yopmail.com';
        const password = 'Burcu-123';
        const searchMainPage = '#typeahead-http';
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

        client.moveToElement('#typeahead-http', 50, 50);
            page
                .waitForElementVisible('@searchMainPage', 6000)
                .assert.elementPresent('@searchMainPage')
                .pause(6000);
               
        client.assert.screenshotIdenticalToBaseline(searchMainPage, 'searchMainPage');
        }
               
    }