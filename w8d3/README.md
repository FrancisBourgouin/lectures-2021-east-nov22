# End-to-End Testing with Cypress

## Today's menu

- Identify the difference between Jest and Cypress
- Install and configure Cypress
- Design End-to-End tests with Cypress
- Write End-to-End tests with Cypress

## Installing Cypress

`npm install -g cypress`

to install locally

`npm install cypress --save-dev`

Add the script to `package.json`

`"cypress": "cypress open -P ."`

Add `cypress.json` to the project with the following content:

```json
{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1280,
  "viewportHeight": 1200
}
```

- Delete the exercise files in the `cypress/integration/` folder

## Create Tests

### Test template

```js
describe('Some Functionality', () => {

  it "should test something", () => {

  }

  it "should test something", () => {

  }

})
```

### Tests

Check the `cypress/integration` to find the tests we did
