describe("Get the `Name` input and type a name in it." ,
function()  
 {
   it("type in users name ",function(){
       cy.visit("http://localhost:3002/");
   }) ;
}); 

it('sanity check to make sure tests work', () => {
    // "expect" is an assertion
    // there can be several assertions per test
    expect(1 + 2).to.equal(3)
    expect(2 + 2).not.to.equal(5) // strict ===
    expect({}).not.to.equal({})   // strict ===
    expect({}).to.eql({})         // not strict
  })

  const nameInput = () => cy.get('input[name=text]')
  const emailInput = () => cy.get('input[name=email]')
  const passwordInput = () => cy.get('input[name=password]')

  it('the proper elements are showing', () => {
    textInput().should('exist')
})

it('can type in the name inputs', () => {
  nameInput()
    .should('have.value', '')
    .type('justin')
    .should('have.value', 'justin')

    it('can type in the email inputs', () => {
      emailInput()
        .should('have.value', '')
        .type('justin@justin.com')
        .should('have.value', 'justin@justin.com')

        it('can type in the password inputs', () => {
          passwordInput()
            .should('have.value', '')
            .type('1234')
            .should('have.value', '1234')
          })    



          // it('submits the form', () => {
           
          //   submitBtn().should('be.disabled')
          //   nameInput().type('justin')
          //   submitBtn().should('be.disabled')
          //   emailInput().type('justin@justin.com)
          //   submitBtn().should('be.disabled')
          //   passwordInput().type('1234')
          //   submitBtn().should('not.be.disabled')
          // })

          it("checks form valadation", () => {
            // should('have.value' '') --> to assert that an input is empty
            // click()                 --> to click on an element
            textInput().type("justin")
            emailInput().type("justin")
            passwordInput().type("1234")
            submitBtn().should('not.be.disabled')
          })
