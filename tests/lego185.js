module.exports = {

    '@tags': ['lego185'],   
        'TC_Lego_MainPage'(client) {
        const page = client.page.legoMainPage();
    
            page
            .navigate()
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
                .checkInitialElements()
                .assert.elementPresent('@newSetsMainTitle')
                .assert.elementPresent('@newSetsComponent')
                .clickSeeMoreNewSets()
                .pause(3000)
                .assert.urlContains('https://www.lego.com/en-us/categories/new-sets-and-products?page=1&filters.i0.key=categories.id&filters.i0.values.i0=12ba8640-7fb5-4281-991d-ac55c65d8001')
                .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego185.png')

        } 
    }


