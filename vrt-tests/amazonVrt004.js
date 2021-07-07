module.exports = {

    'amazon004'(client) {

        const regYourName = 'Burcu';
        const regEmail = 'onurburcuural@gmail.com';
        const regPassword = '$7~9k.yir*@*4LT';
        const reEnterPassword = '$7~9k.yir*@*4LT';

        const solveThisPuzzleRegistration = '#cvf-page-content';
        const page = client.page.mainPage();
    
        page
        .navigate()
        .maximizeWindow()
        .pause(3000)
        .checkInitialElements()

            .pause(1000)
            .clickRegister()
            .pause(3000)

            .checkRegistrationElements()

            .registerYourName(regYourName)
            .registerEmail(regEmail)
            .registerPassword(regPassword)
            .registerReEnterPassword(reEnterPassword)

            .clickRegisterationButton()

            .pause(3000)

            .assert.elementPresent('@solveThisPuzzleRegistration')

            .pause(3000)
            
        client.assert.screenshotIdenticalToBaseline(solveThisPuzzleRegistration, 'solveThisPuzzleRegistration');
        
    }
               
}