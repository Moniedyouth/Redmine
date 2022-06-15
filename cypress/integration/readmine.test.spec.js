const mainPage = require('../Pages/main.page');
const loginPage = require('../Pages/login.page');
const projectsPage = require('../Pages/projects.page');
const roadmapPage = require('../Pages/roadmap.page');
const downloadPage = require('../Pages/download.page');
const repositoryPage = require('../Pages/repository.page');



describe('Test Redmine website', () => {

    it('Go to the Login page', () => {
        mainPage.clickLoginButton();
        mainPage.header2Registration.should('have.text', 'Регистрация ')

    });

    it('Registrete with valid credentials', () => {
        const user = loginPage.generateRandomString(12);
        const password = 'name1295';
        const firstname = 'Name';
        const lastname = 'Second Name';
        const email = loginPage.generateRandomEmail();

        mainPage.clickLoginButton();

        loginPage.typeIntoUserInput(user);
        loginPage.typeIntoPasswordInput(password);
        loginPage.typeIntoConfirmationInput(password);
        loginPage.typeIntoFirstnameInput(firstname);
        loginPage.typeIntoLastnameInput(lastname);
        loginPage.typeIntoEmailInput(email);
        loginPage.clickCommitBtn();

        loginPage.flashNotice.should('contain', 'успешно');
    });

    it('Registrete with invalid credentials: with just 1 space', () => {
        const space = ' ';

        mainPage.clickLoginButton();

        loginPage.typeIntoUserInput(space);
        loginPage.typeIntoPasswordInput(space);
        loginPage.typeIntoConfirmationInput(space);
        loginPage.typeIntoFirstnameInput(space);
        loginPage.typeIntoLastnameInput(space);
        loginPage.typeIntoEmailInput(space);
        loginPage.clickCommitBtn();

        loginPage.errorExplanation.should('contain', 'не может быть');
        loginPage.errorExplanation.should('have.length', 6);

        loginPage.errorExplanation.should((elements) => {
            const textsFromErrorMassage = elements.map((i, e) => e.textContent);
            const arr = Array.from(textsFromErrorMassage);
            expect(arr).to.deep.eq([
                "Пользователь не может быть пустым",
                "Пользователь имеет неверное значение",
                "Имя не может быть пустым",
                "Фамилия не может быть пустым",
                "Email не может быть пустым",
                "Пароль недостаточной длины (не может быть меньше 4 символа)"
            ]);
        });
    });

    it('Check image at Projects page', () => {
        mainPage.clickMultipleProkectsSuppor();
        projectsPage.image
            .should('be.visible')
            .should('have.attr', 'src')
            .should('include', '.png');

    });

    it('Check checkboxes at Roadmap page', () => {
        roadmapPage.clickRoadmapBtn();
        roadmapPage.checkboxes.not('[disabled]')
            .should('be.checked');

        roadmapPage.uncheckCheckboxes().should('not.be.checked')

    });

    it('Scroll to footer at Roadmap page', () => {
        roadmapPage.clickRoadmapBtn();
        roadmapPage.scrollIntoViewFooterText().should('be.visible')

    });

    it('verifies download', () => {
        mainPage.clickDownloadButton();
        downloadPage.downloadZipFile();
        cy.verifyDownload('redmine-4.2.4.zip');
    });

    it('verifies radiobuttons', () => {
        mainPage.clickRepositoryButton ();
        repositoryPage.radioButton1.should('be.checked');
        repositoryPage.radioButton2.should('not.be.checked');
    });




});