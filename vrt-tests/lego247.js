module.exports = {

    'lego216'(client) {
        const email = 'burcu.ural@yopmail.com';
        const password = 'Burcu-123';
        const searchMainPage = '#typeahead-http';
        const page = client.page.header();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
                
                .acceptCookies()
                //Guest User için de header'daki Account'a hover edilecek
                .typeEmail(email)
                .typePassword(password)
                .clickSignInButton()
                .pause(6000)
                .waitForElementVisible('@searchMainPage', 1000)
                .assert.elementPresent('@searchMainPage')
                .pause(6000);
    
               
                client.assert.screenshotIdenticalToBaseline(searchMainPage, 'searchMainPage');
        }
               
    }