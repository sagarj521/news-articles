# NY Times Most Popular Articles

This project displays the most popular articles from the NY Times.

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file with your API key and api url: `REACT_APP_NYTIMES_API_KEY=your-api-key` and `REACT_APP_NYTIMES_BASE_URL=https://api.nytimes.com`

## Running the Project

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

## Running Tests

```sh
npm run test
```

Launches the test runner in the interactive watch mode.

## Running Tests coverage

```sh
npm run coverage
```

## Build the app

```sh
`npm run build`
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Running Cypress Tests

```sh
npx cypress open
```
