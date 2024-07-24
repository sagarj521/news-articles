// cypress/integration/articleLink.spec.js
describe('ArticleLink Component', () => {
	const article = {
		id: 1,
		title: 'Test Article',
		abstract: 'This is a test article.',
		media: [
			{
				'media-metadata': [{ url: 'http://example.com/image.jpg' }]
			}
		]
	};

	beforeEach(() => {
		const articles = [
			{ id: 1, title: 'Article 1' },
			{ id: 2, title: 'Article 2' }
		];

		cy.intercept('GET', '**/mostpopular/v2/viewed/1.json', (req) => {
			console.log('Intercepting request:', req);
			req.reply({
				statusCode: 200,
				body: { results: articles }
			});
		}).as('getArticlesSuccess');

		cy.visit('http://localhost:3000/');
	});

	it('should navigate to detail page when link is clicked', () => {
		cy.intercept('GET', '/news-detail', (req) => {
			req.reply((res) => {
				res.send({ state: { article: JSON.stringify(article) } });
			});
		}).as('navigateToDetail');

		cy.get('.article-link').eq(0).click();

		cy.url().should('include', '/news-detail');
	});
});
