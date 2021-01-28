/// <reference types="cypress"/>

//run basic tests on remove nikud.

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://removenikud.dicta.org.il/')
    })

    
    it('Remove nikud.',()=>{
        cy.get('#nikud-text').type('מֹשֶׁה קִ⁠בֵּל תּוֹרָה מִסִּינַי')
        cy.get('[class="spinner"]').should('not.exist')
        cy.get('.results-content ').each($res=>{
            cy.get($res).should('contain','משה קי⁠בל תורה מסיני')
        })
    })

    
})