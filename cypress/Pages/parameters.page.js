class Parameters_page {
    get parameters_navbar_link() {
        return cy.get('.glyphicon.glyphicon-list-alt');
    }
    get new_parameters_button() {
        return cy.get('.btn.btn-success');
    }

    click_parameters_navbar_link() {
        this.parameters_navbar_link.click();
    }
    
}
module.exports = new Parameters_page();