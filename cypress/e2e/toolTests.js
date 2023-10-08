/// <reference types="cypress"/>

//run basic tests on remove nikud.

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
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

})

