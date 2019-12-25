module.exports = {
    
    '@tags': ['lego963'],   
        'TC_Lego_Checkout'(client) {
        let paymentOrderTotal = 'AED0.00';
        const email = 'b.ural@yopmail.com';
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
            .pause(9000)
            .homeDeliveryButton()
            .pause(1000)
            client.moveToElement('.flex-column > div > ng-select', 50, 50);

            page
            .pause(6000)
            .clickSavedAddressDropDown()
            .selectFirstAddressOption()
            .clickShippingSectionSaveAddressButton()

            .pause(5000)
            .clickShippingMethodDropDown()
            .selectFirstShippingMethod()
            .pause(5000)
            .clickDeliveryTimeDropDown()
            .selectFirstDeliveryTime()
            .pause(6000)

            client.moveToElement('app-custom-contact-information > div > div > div > label > span', 50, 50);
            page
            
            .useSameInformationAsShipping()
            .pause(3000)
            .clickSaveContactInformationButton()
            .pause(6000)


            client.moveToElement('app-custom-checkout-order-summary > app-custom-order-summary > div > div:nth-child(6) > div', 50, 50);
            paymentOrderTotal = page
            .checkPaymentMethodOrderTotal(paymentOrderTotal);
            page
            .assert.value(paymentOrderTotal)


            client.moveToElement('input[formcontrolname = "cardNumber"]', 50, 50);
            page
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
            .clickProceedToPaymentButton(paymentOrderTotal)
            .pause(9000)
            
            .orderConfirmationOrderTotal(paymentOrderTotal)
            .pause(3000);

            client.saveScreenshot('tests_output/screenshots/lego963.png')

        },
    }


