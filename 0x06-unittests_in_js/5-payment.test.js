const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi function', () => {
    let consoleSpy;

    beforeEach(() => {
        // Set up a spy on console.log
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the spy
        consoleSpy.restore();
    });

    it('should log "The total is: 120" when called with 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log was called with "The total is: 120"
        expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
    });

    it('should log "The total is: 20" when called with 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        // Verify that console.log was called with "The total is: 20"
        expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
    });
});
