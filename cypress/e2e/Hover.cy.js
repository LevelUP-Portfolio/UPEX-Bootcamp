describe('US 2 | TS 2 | TC1: Escenario de Prueba', () =>
{
	it('Precondición: Usuario debe estar en página de Login', () =>
	{
		cy.visit('https://demoqa.com/')
		cy.clearCookies()
		cy.get('html').should('be.visible')
		cy.title().should('include', 'ToolsQA')
	})
	it('Abrir sección Elementos', () =>
	{
		cy.contains('Widgets').click()
		cy.wait(1000)
		cy.contains('Tool Tips').click()
	})
	it('Abrir Tooltip de botón', () =>
	{
		cy.get('#toolTipButton').trigger('mouseover')
		cy.get('.tooltip-inner').should('contain.text', 'hovered over the Button')
	})
	it('Abrir Tooltip de textfield', () =>
	{
		cy.get('#toolTipTextField').trigger('mouseover')
		cy.get('.tooltip-inner').should('contain.text','hovered over the text field')
	})
})

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})