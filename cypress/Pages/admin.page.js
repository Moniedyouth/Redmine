class Admin_page {
    get admin_navbar_link() {
        return cy.get(".nav>li>a .glyphicon.glyphicon-cog");
    }
    get add_user_button() {
        return cy.get ('[ng-click="addUser()"]')
    }
   
    click_admin_navbar_link(){
        this.admin_navbar_link.click();
    }
    
}
module.exports = new Admin_page();