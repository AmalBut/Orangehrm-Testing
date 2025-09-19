import { APP_MOUDLES, MODULES_URL_FREG } from "../enums/modules-enums";

const LOCATORS = {
    mainMenuItem : '.oxd-main-menu-item',
    headerH : 'h6.oxd-topbar-header-breadcrumb-module'
}

class AdminPage{

    openFromMenu(){
        cy.contains(LOCATORS.mainMenuItem,APP_MOUDLES.Admin).click();
    }

    checkHeader(){ 
        cy.get(LOCATORS.headerH).should('contain',APP_MOUDLES.Admin);
    }

    checkUrl(){
        cy.url().should('include',MODULES_URL_FREG.Admin);
    }
}
export const adminPage = new AdminPage();