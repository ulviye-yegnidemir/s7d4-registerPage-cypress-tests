      import { errorMessages } from "../../src/components/Register";

describe("Register Page", () => {

  //describe("Error Messages", () => {

    describe("Form inputs validated", () => {
      beforeEach(() => {
 cy.visit("http://localhost:5179/");
});

      it("button enabled for validated inputs", () => {

        // Arrange
        //cy.visit("http://localhost:5181/");

        // Act
        cy.get('[data-cy="ad-input"]').type("Emre");
        cy.get('[data-cy="soyad-input"]').type("Sahiner");
        cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
        cy.get('[data-cy="password-input"]').type("1234Aa**");

        // Assert
        cy.get('[data-cy="submit-button"]').should("not.be.disabled");


        it("submits form on validated inputs", () => {
      //Arrange
  
      //Act
      cy.get('[data-cy="ad-input"]').type("Emre");
      cy.get('[data-cy="soyad-input"]').type("Sahiner");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234Aa**");

      //assert
      cy.get('[data-cy="submit-button"]').click();
      cy.get('[data-cy="responce-message"]').should("be.visible");
      cy.contains("ID:").should("be.visible");
      });

    });

    });
  });


 //   cy.visit('http://localhost:5176
 // /')
 //import { errorMessages } from "../../src/components/Register";
//describe("Register Page", () => {
  //describe("Error Messages", () => {
   // it("name input throws error for 2 chars", () => {
      //Arrange
     // cy.visit("http://localhost:5178/");
      //Act
      //cy.get('[data-cy="ad-input"]').type("em");
      //assert
      //cy.contains(errorMessages.ad);
    //});
     //it("surname input throws error for 2 chars", () => {
      //Arrange
      //cy.visit("http://localhost:5178/");
      //Act
      //cy.get('[data-cy="soyad-input"]').type("şa");
      //assert
      //cy.contains(errorMessages.soyad);
  //});
  //it("Email input throws error for mre@wit.", () => {
  //Arrange
  //cy.visit("http://localhost:5178/");

  //Act
  //cy.get('[data-cy="email-input"]').type("emre@wit.");

  //assert
  //cy.contains(errorMessages.email);
//});
//it("Password input throws error for 1234", () => {
  //Arrange
  //cy.visit("http://localhost:5178/");

  //Act
  //cy.get('[data-cy="password-input"]').type("1234");

  //assert
  //cy.contains(errorMessages.password);
//});
//it("button is disabled for unvalidated inputs.", () => {
  //Arrange
  //cy.visit("http://localhost:5178/");
//Act
  //cy.get('[data-cy="password-input"]').type("1234");
  //assert
  //cy.get('[data-cy="submit-button"]').should("be.disabled");
//});
//});
//});