const { expect } = require("chai");
const request = require("request");

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('should return status code 200 and the correct body', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);

        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
