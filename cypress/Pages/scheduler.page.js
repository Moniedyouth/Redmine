class Scheduler_page {
    get sheduler_navbar_link() {
        return cy.get('.glyphicon.glyphicon-time');
    }
    get new_task_button() {
        return  cy.get ('.btn.btn-success');
    }

    click_scheduler_navbar_link() {
        this.sheduler_navbar_link.click();
    }
   
}
module.exports = new Scheduler_page();