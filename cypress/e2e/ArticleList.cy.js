describe('ArticleList Component', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('Article list should be visible', () => {
		cy.intercept('GET', '**/mostpopular/v2/viewed/1.json').as('getArticlesSuccess');

		cy.get('.article-list').should('be.visible');
	});
});
