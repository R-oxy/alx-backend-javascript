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

  describe('GET /cart/:id', () => {
    it('should return status code 200 and the correct body when :id is a number', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);

        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return status code 404 when :id is not a number', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);

        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
