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

## Run lint

```sh
npm run lint
```

## Build the app

```sh
npm run build
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Running Cypress Tests

```sh
npx cypress open
```

## SonarQube analysis

1. To run SonarQube on your local machine, you need to download the following:

Sonarqube : https://www.sonarsource.com/products/sonarqube/downloads/
SonarQube scanner : https://docs.sonarsource.com/sonarqube/9.9/analyzing-source-code/scanners/sonarscanner/

2. Once you download SonarQube and the SonarQube scanner, extract both zip files.

3. Your first step is to start the SonarQube server. So that you need Navigate to the following path in your file explorer:

C:\sonarqube-10.3.0.82913\bin\windows-x86–64

Then it will start the SonarQube. The default port is "9000" and you can browse SonarQube at http://localhost:9000.

4. Afterward, a username and password screen will appear; use the default credentials 'admin' for both username and password. Remember to change the default password after logging in.

SonarQube is now ready for project setup. Once the password is updated, navigate to the SonarQube Dashboard.

5. After clicking ‘Create Project,’ It will navigate to the Analysis Method. Generate a token by clicking on the ‘Generate’ option. follow the steps and copy given command and paste it to terminal
   eg. sonar-scanner \
    -Dsonar.projectKey=news-article \
    -Dsonar.sources=. \
    -Dsonar.host.url=http://localhost:9000 \
    -Dsonar.token=sqp_cfa8ea8ac902e71a4198925418d54dd744629e86
6. Once its completed its shows the reports
