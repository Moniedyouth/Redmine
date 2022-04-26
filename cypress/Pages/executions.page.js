class Executions_page {
    get executions_navbar_link() {
        return cy.get('.glyphicon.glyphicon-tasks');
    }
    get roll_count_select() {
        return cy.get('.form-control.input-sm');
    }
    click_executions_navbar_link() {
        this.executions_navbar_link.click();
    }
    
}
module.exports = new Executions_page();