/// <reference types="cypress"/>

//run basic tests on remove nikud.

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {

    describe('basicTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
    
        
        it('Remove nikud.',()=>{
            cy.get('#nikud-text').type('מֹשֶׁה קִ⁠בֵּל תּוֹרָה מִסִּינַי')
            cy.get('[class="spinner"]').should('not.exist')
            cy.get('.results-content ').each($res=>{
                cy.get($res).should('contain','משה ק⁠בל תורה מסיני')
            })
        })
    
        
    })

})

