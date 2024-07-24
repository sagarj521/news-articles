describe('ArticleList Component', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('Article list should be visible', () => {
		cy.get('.article-list').should('be.visible');
	});
});
