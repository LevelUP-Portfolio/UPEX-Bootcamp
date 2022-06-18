const { describe } = require('mocha')

describe('US Example | TS 123 | TC1: Escenario de Caso de Prueba', () =>
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
		cy.contains('Select Menu').click()
	})
	it('Probar un Dropdown Visible', () => {
		cy.get('#oldSelectMenu').select(1) //Blue
		cy.get('#oldSelectMenu').select('Green').should('contain.text', 'Green')
	})
	it('Probar un Dropdown NO Visible con Single Option', () =>
	{
		cy.get('.css-1hwfws3').eq(1).click() // Abrir Dropdown
		cy.get('.css-11unzgr')
			.eq(0)
			.within(() =>
				// Dentro del Dropdown...
				{
					cy.get('div')
						.eq(2) // Seleccionar Option 2
						.click()
				}
			) //Verificar resultado esperado:
		cy.get('.css-1hwfws3').eq(1).should('be.visible').and('contain.text', 'Ms')
	})
	it('Probar un Dropdown NO Visible con Group Option', () =>
	{
		cy.get('.css-1hwfws3').eq(0).click() // Abrir Dropdown
		cy.get('.css-11unzgr')
			.eq(0)
			.within(() =>
				// Dentro del Dropdown...
				{
					cy.get('div')
						.eq(2)
						.within(() =>
							// Dentro del Grupo 1...
							{
								cy.get('div')
									.eq(1) // Seleccionar Option 2
									.click()
							}
						)
				}
			) //Verificar resultado esperado:
		cy.get('.css-1hwfws3')
			.eq(0)
			.should('be.visible')
			.and('contain.text', 'option 2')
	})
	it('Probar un Dropdown Visible con Multiple selección', () =>
	{
		cy.get('.css-1hwfws3').eq(2).click() // Abrir Dropdown
		cy.get('.css-11unzgr')
			.eq(0)
			.within(() =>
				// Dentro del Dropdown...
				{
					//Hay 4 Options
					cy.get('div')
						.eq(1) // Seleccionar Option 2 (Blue)
						.click() // Quedan 3 Options
					cy.get('div')
						.eq(2) // Seleccionar Option 3 (Red)
						.click()
				}
			) //Verificar resultado esperado:
		cy.get('.css-1hwfws3')
			.eq(2)
			.within(() =>
				// Dentro del Dropdown...
				{
					cy.get('div').eq(0).should('be.visible').and('contain.text', 'Blue')
					cy.get('div').should('be.visible').and('contain.text', 'Red')
				}
			)
	})
	it('Probar una Lista de selección de opciones', () =>
	{
		cy.get('#cars')
			.select(2) //Opel
			.should('contain.text', 'Opel')
	})
})

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
