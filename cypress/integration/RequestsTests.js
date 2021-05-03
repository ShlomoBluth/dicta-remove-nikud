/// <reference types="cypress"/>



////run tests on requests from remove nikud run 

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {


    describe('RequestsTests',()=>{
    
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
        
      
    
        it('Error message for tipsoundplay response with status code 500 when clicking the run button of wordplay page'
        ,()=>{
           cy.removeNikudRequest({
               url:'/api',
               status:500,
               message: 'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
           })
        })
    
        
        // it('Error message for tipsoundplay response with a delay of 3 minutes when clicking the run button'+
        // ' of wordplay page',()=>{
        //     cy.removeNikudRequest({
        //         url:'/api',
        //         message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
        //         delaySeconds: 60*3
        //     })
        // })
    })
})

