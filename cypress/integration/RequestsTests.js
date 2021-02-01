/// <reference types="cypress"/>



////run tests on requests from remove nikud run 

describe('RequestsTests',()=>{
    
    beforeEach(() => {
        cy.visit('https://removenikud.dicta.org.il/')
    })
    
  

    it('Error message for tipsoundplay response with status code 500 when clicking the run button of wordplay page'
    ,()=>{
       cy.removeNikudRequest({
           url:'/remove-nikud/api',
           status:500,
           message: 'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
       })
    })

    
    it('Error message for tipsoundplay response with a delay of 3 minutes when clicking the run button'+
    ' of wordplay page',()=>{
        cy.removeNikudRequest({
            url:'/remove-nikud/api',
            message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
            delaySeconds: 60*3
        })
    })
})