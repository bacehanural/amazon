module.exports = {

    '@tags': ['lego1185'],   

        'TC_Lego_Header'(client) {
        const page = client.page.header();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(6000)
            .acceptCookies()
            client.moveToElement('.SiteTopHeaderRight .myAccount-Component .collapseButton', 50, 50);

            page
            .clickGuestOrderStatus()
            .pause(6000)
            .assert.containsText('@guestOrderStatusBreadcrumbOrderStatus', 'Order Status')
            client.saveScreenshot('tests_output/screenshots/lego1185.png')
        },
    }


