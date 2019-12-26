module.exports = {
    
    '@tags': ['lego838'],   
        'TC_Lego_Checkout'(client) {
        const email = 'burcu.ural.emakina@yopmail.com';
        const password = 'Burcu-123';
        const creditCardNumber = '4111111111111111';
        const creditCardSecurityCode = '123';
        const page = client.page.checkout();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(9000)
        .acceptCookies()        
            .pause(3000)
            client.moveToElement('.NavigationBar .navWrapper > div:first-child > button', 50, 50);

            page
            .clickFirstMegaTwentiethItem()
            .pause(6000)

            client.moveToElement('app-product-list > div > div > .row > div:first-child button', 50, 50);

            page

            .clickFirstAddToBagButtonPLP()
            .pause(6000)
            .clickViewBagButton()
            .pause(6000)
            .clickShoppingBagCheckoutButton()
            .pause(6000)
            .clickCheckoutSignInButton()
            .pause(6000)
            .typeEmail(email)
            .typePassword(password)
            .clickSignInButton()
            .pause(3000)
            .homeDeliveryButton()
            .pause(1000)
            client.moveToElement('.flex-column > div > ng-select', 50, 50);

            page
            .pause(3000)
            .clickSavedAddressDropDown()
            .selectFirstAddressOption()
            .clickShippingSectionSaveAddressButton()

            .pause(3000)
            .clickShippingMethodDropDown()
            .selectFirstShippingMethod()
            .pause(3000)
            .clickDeliveryTimeDropDown()
            .selectFirstDeliveryTime()
            .pause(6000)

            client.moveToElement('app-custom-contact-information > div > div > div > label > span', 50, 50);
            page
            
            .useSameInformationAsShipping()
            .pause(3000)
            .clickSaveContactInformationButton()
            .pause(6000)

            client.moveToElement('input[formcontrolname = "cardNumber"]', 50, 50);
            page
            .pause(3000)
            .clickCreditCardNumber()
            .typeCreditCardNumber(creditCardNumber)
            .clickExpirationDateMonth()
            .selectFirstExpirationDateMonth()
            .clickExpirationDateYear()
            .selectFourthExpirationDateYear()
            .clickCreditCardSecurityCode()
            .typeCreditCardSecurityCode(creditCardSecurityCode)
            .paymentMethodTermsConditionsCheckbox()
            .paymentMethodPrivacyPolicyCheckbox()
            .clickProceedToPaymentButton()
            .pause(9000)

            .checkOrderConfirmationBreadcrumb()
            .assert.containsText('@orderConfirmationBreadcrumb', 'Order Confirmation');

            client.saveScreenshot('tests_output/screenshots/lego838.png')
        },
    }


