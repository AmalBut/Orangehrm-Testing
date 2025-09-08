
describe('Login Cases', () => {
    it('TC01: Should login successfuly with valid username and password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get('input[name=username]').type("Admin");
        cy.get('input[name=password]').type("admin123");
        cy.get("button:submit").click();
        cy.url().should("include","/dashboard");
    });

     it.skip('TC02: Should show an error for valid username and invalid password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get('input[name=username]').type("Admin");
        cy.get('input[name=password]').type("admin12345");
        cy.get("button:submit").click();
        cy.contains("Invalid credentials").should("be.visible");
    });
});