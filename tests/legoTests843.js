module.exports = {
    
    '@tags': ['lego843'],   
        'TC_Lego_Checkout'(client) {

        const email = 'burcu.ural_emakina@yopmail.com';
        const password = 'Burcu-123';

        const storeLocationFirstName = 'Burcu';
        const storeLocationLastName = 'Ural';
        const storeLocationMobileNumber = '00971527765432';

        const billingSectionMobileNumber = '00971527765432';
        const billingSectionFirstName = 'Test';
        const billingSectionLastName = 'Emakina';
        const billingSectionStreet = 'Ataturk';
        const billingSectionBuilding = 'Emakina';
        const billingSectionFloor = '5';
        const billingSectionAptNumber = '64';
   
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
            .clickThirdCardShopNow()
            .pause(6000)
            .clickAddToBagButton()

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
            .clickAndCollectButton()
            .pause(1000)

            client.moveToElement('app-custom-address app-pick-up div:first-child > ng-select', 50, 50);
            page

            .clickStoreLocationStoreDropDown()
            .selectStoreLocationFirstStore()

            .clickStoreLocationFirstName()
            .typeStoreLocationFirstName(storeLocationFirstName)
            .clickStoreLocationLastName()
            .typeStoreLocationLastName(storeLocationLastName)
            .clickStoreLocationMobileNumber()
            .typeStoreLocationMobileNumber(storeLocationMobileNumber)

            .clickStoreLocationSaveButton()

            .pause(6000)

            client.moveToElement('app-custom-contact-information form div:nth-child(2) input[formcontrolname = "cellphone"]', 50, 50);
            page

            .clickBillingSectionMobileNumber()
            .typeBillingSectionMobileNumber(billingSectionMobileNumber)
            .clickBillingSectionFirstName()
            .typeBillingSectionFirstName(billingSectionFirstName)
            .clickBillingSectionLastName()
            .typeBillingSectionLastName(billingSectionLastName)
            .clickBillingSectionSelectCountry()
            .selectBillingSectionFirstCountry()
            .clickBillingSectionSelectCity()
            .selectBillingSectionFirstCity()
            .clickBillingSectionSelectArea()
            .selectBillingSectionFirstArea()
            .clickBillingSectionSelectNeighborhood()
            .selectBillingSectionFirstNeighborhood()
            .clickBillingSectionStreet()
            .typeBillingSectionStreet(billingSectionStreet)
            .clickBillingSectionBuilding()
            .typeBillingSectionBuilding(billingSectionBuilding)
            .clickBillingSectionFloor()
            .typeBillingSectionFloor(billingSectionFloor)
            .clickBillingSectionAptNumber()
            .typeBillingSectionAptNumber(billingSectionAptNumber)
            .clickSaveBillingDetailsButton()

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

            client.moveToElement('app-custom-payment-method-component > app-payment-form > div > .cx-checkout-btns > div > button', 100, 100);
            page
            .clickProceedToPaymentButton()
            .pause(9000)

            .checkOrderConfirmationBreadcrumb()
            .assert.containsText('@orderConfirmationBreadcrumb', 'Order Confirmation')
            .checkOrderConfirmationThankYouOrderNmb()
            .checkOrderConfirmationThankYouEmail()
            .pause(3000)
            client.moveToElement('app-custom-order-totals > .order-total-section > .order-totals > .order-total-box > .total > .total-value', 100, 100);
            page
            .checkOrderConfirmationReceiptTotalAmount()
            .assert.containsText('@orderConfirmationReceiptTotalAmount', 'AED')
            .pause(3000);

            client.saveScreenshot('tests_output/screenshots/lego843.png')

        },
    }
