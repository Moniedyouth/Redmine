class Keywords_page {
    
    get keywords_navbar_link() {
        return cy.get('.glyphicon.glyphicon-record');
    }
    get new_keyword_package_button() {
        return cy.get('.btn.btn-success.ng-scope');
    }
    
    click_keywords_navbar_link() {
        this.keywords_navbar_link.click();
    }
    
}
module.exports = new Keywords_page();