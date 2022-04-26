const login_page = require('../Pages/login.page');
const plans_page = require('../Pages/plans.page');
const keywords_page = require('../Pages/keywords.page');
const parameters_page = require('../Pages/parameters.page');
const executions_page = require('../Pages/executions.page');
const scheduler_page = require('../Pages/scheduler.page');
const grid_page = require('../Pages/grid.page');
const admin_page = require('../Pages/admin.page');

describe('Test Step-platfom site', function() {
    beforeEach(() => {
        login_page.open_site();
        login_page.click_login_button();
        });
        

    it ('Check plans page', function() {
        plans_page.new_plans_button.should('be.visible');
       
    });

    it ('Check keywords page', function() {
        keywords_page.click_keywords_navbar_link();
        keywords_page.new_keyword_package_button.should('be.visible');
       
    });

    it ('Check parameters page', function() {
        parameters_page.click_parameters_navbar_link();
        parameters_page.new_parameters_button.should('be.visible');
       
    });
    
    it ('Check executions page', function() {
        executions_page.click_executions_navbar_link();
        executions_page.roll_count_select.should('be.visible');
        
    });

    it ('Check scheduler page', function() {
        scheduler_page.click_scheduler_navbar_link();
        scheduler_page.new_task_button.should('be.visible');
        
    });

    it ('Check grid page', function() {
        grid_page.click_grid_navbar_link();
        grid_page.nav_navbar.should('be.visible');
        
    });

    it ('Check admin page', function() {
        admin_page.click_admin_navbar_link();
        admin_page.add_user_button.should('be.visible');
        
    });    
        
});