module.exports = {

    'lidyana011'(client) {

        const email = 'burcuacehan-softtech@yopmail.com';
        const password = 'Burcu-123';

        const addressTitle = 'Ev';
        const addressFirstName = 'Burcu';
        const addressLastName = 'Ural';
        const addressPhoneNumber = '5071680216';
        const addressAddress = 'Kılıç Reis Mahallesi';
        const addressPostCode = '35150';
        const mainQuery = 'saat';
        const creditCardName = 'Burcu Ural';
        const creditCardNo = '4111111111111111';
        const cvv = '123';
        const modalPage = '.modal.scrollable';
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

            .clickLogin()
            .clickAccountInformation()
            .clickAddressMenuBar()
            .clickNewAddress()
            .pause(3000)

            .typeAddressTitle(addressTitle)
            .typeAddressFirstName(addressFirstName)
            .typeAddressLastName(addressLastName)
            .typeAddressPhoneNumber(addressPhoneNumber)
            .typeAddressAddress(addressAddress)
            .clickAddressCountry()
            .selectAddressCountry()
            .clickAddressCity()
            .selectAddressCity()
            .clickAddressDistrict()
            .selectAddressDistrict()
            .typeAddressPostCode(addressPostCode)

            .clickAddressSubmitButton()

            .pause(3000)
            
            
            .clickSearch()
            .searchMainPage(mainQuery)
            .clickSearchOptionFirstCategory()
            .clickFirstProductPLP()
            .clickAddToBag()
            .clickShoppingBag()
            .clickApproveShoppingBag()
            .clickCheckoutButton()
            .clickShippingAddress()
            .typeCreditCardName(creditCardName)
            .typeCreditCardNo(creditCardNo)
            .clickCreditCardExpirationMonth()
            .selectCreditCardExpirationJanuary()
            .clickCreditCardExpirationYear()
            .selectCreditCardExpirationSecond()
            .typeCvv(cvv)
            .clickCheckoutSubmitButton()
            .pause(3000)
            
            client.assert.screenshotIdenticalToBaseline(modalPage, 'modalPage');
        }
               
    }
    