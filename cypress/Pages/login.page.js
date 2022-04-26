class Login_page {
    get login_button() {
        return cy.get('[type="submit"]');
    }

    open_site() {
        cy.visit('http://localhost:8080');
    }
    click_login_button() {
        this.login_button.click();
    }
}
module.exports = new Login_page();