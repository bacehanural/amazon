module.exports = {

    '@tags': ['lidyana004'],   

        'TC_Lidyana_MainPage'(client) {
        const email = 'burcu-softtech@yopmail.com';
        const password = 'Burcu-123';
        const mainQuery = 'saat';
        const page = client.page.mainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(3000)
        .checkInitialElements()
        .acceptCookies()

        .clickLogin()
        .pause(3000)
        .typeEmail(email)
        .typePassword(password)
        .clickSignInButton()
        .pause(3000)

        .clickSearch()
        .searchMainPage(mainQuery)
        .clickSearchOptionFirstCategory()
        .pause(3000)
        

            .assert.elementPresent('@categoryBreadcrumb')
            .assert.elementPresent('@categoryHeader');
               
            client.saveScreenshot('tests_output/screenshots/lidyana004.png')
        }
    }


