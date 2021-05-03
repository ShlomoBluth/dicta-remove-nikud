/// <reference types="cypress"/>

//run basic tests on remove nikud.

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {

    describe('basicTests',()=>{

        beforeEach(() => {
            if (Cypress._.isArray(size)) {
                Cypress.config({
                    viewportWidth: size[0],
                    viewportHeight: size[1]
                })
                cy.viewport(size[0], size[1])
            } else {
                Cypress.config({
                    viewportWidth: 375,
                    viewportHeight: 812
                })
                cy.viewport(size)
            }
            cy.visit('/')
        })
    
        
        it('Remove nikud.',()=>{
            cy.get('#nikud-text').type('מֹשֶׁה קִ⁠בֵּל תּוֹרָה מִסִּינַי')
            cy.get('[class="spinner"]').should('not.exist')
            cy.get('.results-content ').each($res=>{
                cy.get($res).should('contain','משה קי⁠בל תורה מסיני')
            })
        })
    
        
    })

})

