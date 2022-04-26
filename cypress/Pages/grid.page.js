class Grid_page {
    get grid_navbar_link() {
        return cy.get('.glyphicon.glyphicon-th');
    }
    get nav_navbar() {
        return cy.get('.nav.nav-tabs');
    }

    click_grid_navbar_link() {
        this.grid_navbar_link.click();
    }
    
}
module.exports = new Grid_page();