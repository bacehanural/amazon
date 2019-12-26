module.exports = {
    
    '@tags': ['lego839'],   
        'TC_Lego_Checkout'(client) {

        const guestEmailAddress = 'burcu.ural.emakina@yopmail.com';
        const guestConfirmEmailAddress = 'burcu.ural.emakina@yopmail.com';


        const shippingSectionMobileNumber = '+971523555528';
        const shippingSectionFirstName = 'Burcu';
        const shippingSectionLastName = 'Ural';
        const shippingSectionStreet = 'Ataturk';
        const shippingSectionBuilding = 'Emakina';
        const shippingSectionFloor = '5';
        const shippingSectionAptNo = '23';

        const creditCardNumber = '5555555555554444';
        const creditCardSecurityCode = '123';
        const page = client.page.checkout();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(9000)
        .acceptCookies()        
            .pause(3000)

            client.moveToElement('.Section3 .carousel-inner > div:first-child > div:first-child .carousel-caption > a', 50, 50);

            page
            .clickFirstCardShopNow()
            .pause(6000)
            .clickAddToBagButton()

           .pause(6000)
            .clickViewBagButton()
            .pause(6000)
            .clickShoppingBagCheckoutButton()
            .pause(6000)
            .clickCheckoutContinueAsGuestButton()
            .pause(6000)

            .clickContinueAsGuestEmailAddress()
            .typeContinueAsGuestEmailAddress(guestEmailAddress)
            client.moveToElement('input[formcontrolname = "emailConfirmation"]', 50, 50);

            page
            .clickGuestConfirmEmailAddress()
            .typeGuestConfirmEmailAddress(guestConfirmEmailAddress)
            client.moveToElement('app-guest-checkout-login-register > div > div > button', 50, 50);
            page
            .clickGuestUserContinueButton()

            .pause(3000)
            .homeDeliveryButton()
            .pause(1000)

            client.moveToElement('app-custom-address > div > app-home-delivery input[formcontrolname = "cellphone"]', 50, 50);
            page
            .clickShippingSectionMobileNumber()
            .typeShippingSectionMobileNumber(shippingSectionMobileNumber)
            .clickShippingSectionFirstName()
            .typeShippingSectionFirstName(shippingSectionFirstName)
            .clickShippingSectionLastName()
            .typeShippingSectionLastName(shippingSectionLastName)
            .clickShippingSectionSelectCountry()
            .clickShippingSelectFirstCountry()
            .clickShippingSectionSelectCity()
            .clickShippingSelectFirstCity()
            .clickShippingSectionSelectArea()
            .clickShippingSelectFirstArea()
            .clickShippingSectionSelectNeighborhood()
            .clickShippingSelectFirstNeighborhood()
            .clickShippingSectionStreet()
            .typeShippingSectionStreet(shippingSectionStreet)
            .clickShippingSectionBuilding()
            .typeShippingSectionBuilding(shippingSectionBuilding)
            .clickShippingSectionFloor()
            .typeShippingSectionFloor(shippingSectionFloor)
            .clickShippingSectionAptNo()
            .typeShippingSectionAptNo(shippingSectionAptNo)
            .clickShippingSectionSaveAddressButton()

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

            client.saveScreenshot('tests_output/screenshots/lego839.png')
        },
    }


