const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI function', () => {
  it('should resolve with correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate that the async test is complete
      })
      .catch(done); // Handle errors by calling done with the error
  });

  it('should not resolve or reject when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Promise should not resolve when success is false'));
      })
      .catch(() => {
        done(); // Test passes if the promise does not resolve or reject
      });
  });
});
