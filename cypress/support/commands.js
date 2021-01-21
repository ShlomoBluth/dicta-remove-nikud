


Cypress.Commands.add('removenikudRequest',({url,status=200,message='',delaySeconds=0})=>{
  // cy.intercept( '', {
  //   delayMs:1000*delaySeconds,
  //   statusCode: status
  // }).as('api')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('[placeholder="הזן טקסט כאן"]').type('שֶׁ')

  // if(delaySeconds>0){
  //   cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  // }else{
  //   cy.get('[class*="spinner"]').should('not.exist')
  // }
  
  // if(message.length>0){
  //   cy.contains(message).should('exist')
  // }
})   
  
 