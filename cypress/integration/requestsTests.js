/// <reference types="cypress"/>



////run tests on requests from remove nikud run 

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {

    

    describe('RequestsTests',()=>{
    
        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
        
      
    
        it('Error message for tipsoundplay response with status code 500 when clicking the run button of wordplay page'
        ,()=>{
           cy.removeNikudRequest({
               url:'/api',
               status:500,
               message: 'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
           })
        })
    
        
        it('Error message for tipsoundplay response with a delay of 3 minutes when clicking the run button'+
        ' of wordplay page',()=>{
            cy.removeNikudRequest({
                url:'/api',
                message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
                delaySeconds: 60*3
            })
        })
    })
})

