const { describe } = require('mocha')

describe('empty spec', () => {
	it('passes', () => {
		cy.visit('https://example.cypress.io')
	})
})
