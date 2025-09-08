
describe('Login Cases', () => {
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    })

    it('TC01: Should login successfuly with valid username and password', () => {
        cy.get('input[name=username]').type("Admin");
        cy.get('input[name=password]').type("admin123");
        cy.get("button:submit").click();
        cy.url().should("include","/dashboard");
    });

    it('TC02: Should show an error for valid username and invalid password', () => {
        cy.get('input[name=username]').type("Admin");
        cy.get('input[name=password]').type("admin12345");
        cy.get("button:submit").click();
        cy.contains("Invalid credentials").should("be.visible");
    });

    it('TC03: Should show an error for invalid username and valid password', () => {
        cy.get('input[name=username]').type("Admin12");
        cy.get('input[name=password]').type("admin123");
        cy.get("button:submit").click();
        cy.contains("Invalid credentials").should("be.visible");
    });

    it('TC04: Should show an error for invalid username and invalid password', () => {
        cy.get('input[name=username]').type("Admin@12");
        cy.get('input[name=password]').type("admin123@");
        cy.get("button:submit").click();
        cy.contains("Invalid credentials").should("be.visible");
    });  
    
    it('TC05: Should show required message when username is empty and password is valid', () => {
        cy.get('input[name=password]').type("admin123");
        cy.get("button:submit").click();
        cy.contains(".oxd-form-row","Username").find(".oxd-input-field-error-message").should("contain","Required").and("be.visible");
    });

    it('TC06: Should show required message when username is empty and password is invalid', () => {
        cy.get('input[name=password]').type("admin123@#");
        cy.get("button:submit").click();
        cy.contains(".oxd-form-row","Username").find(".oxd-input-field-error-message").should("contain","Required").and("be.visible");
    }); 
    
    it('TC07: Should show required message when password is empty and username is valid', () => {
        cy.get('input[name=username]').type("Admin");
        cy.get("button:submit").click();
        cy.contains(".oxd-form-row","Password").find(".oxd-input-field-error-message").should("contain","Required").and("be.visible");
    });
    
    it('TC08: Should show required message when password is empty and username is invalid', () => {
        cy.get('input[name=username]').type("Admin@12");
        cy.get("button:submit").click();
        cy.contains(".oxd-form-row","Password").find(".oxd-input-field-error-message").should("contain","Required").and("be.visible");
    });
    
    it('TC09: Should show required messages when both username and password are empty', () => {
        cy.get("button:submit").click();
        cy.contains(".oxd-form-row","Username").find(".oxd-input-field-error-message").should("contain","Required").and("be.visible");
        cy.contains(".oxd-form-row","Password").find(".oxd-input-field-error-message").should("contain","Required").and("be.visible");
    });
    
    it('TC10: Should mask password input by default', () => {
       cy.get('input[name=password]').should("have.attr","type","password");
    });
});