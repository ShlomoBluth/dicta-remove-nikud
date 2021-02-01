



Cypress.Commands.add('removeNikudRequest',({url,language,status=200,message='',delaySeconds=0})=>{
    cy.intercept('POST', url, {
      delayMs:1000*delaySeconds,
      statusCode: status
    })
    if(message.length>0){
      cy.contains(message,{timeout:1000*delaySeconds}).should('not.exist')
    }  
    cy.get('#nikud-text').type('מֹשֶׁה קִ⁠בֵּל תּוֹרָה מִסִּינַי')
  
    if(delaySeconds>0){
      cy.get('[class*="spinner"]',{timeout:delaySeconds*1000}).should('not.exist')
    }else{
        cy.get('[class*="spinner"]').should('not.exist')
    }
  
    if(message.length>0){
      cy.contains(message).should('exist')
    }  
  
     
  })