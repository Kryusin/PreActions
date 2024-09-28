// cypress/support/e2e.js

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Global configurations or hooks:
beforeEach(() => {
  // This hook will run before each test
  // Add any global setup steps here, like resetting the database or clearing cookies
  cy.log('Running before each test');
});
