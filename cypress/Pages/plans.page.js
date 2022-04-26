class Plans_page {
    get new_plans_button() {
        return cy.get('[ng-click="addPlan()"]');
    }
    
}
module.exports = new Plans_page();