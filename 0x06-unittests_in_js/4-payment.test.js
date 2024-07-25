const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi function', () => {
    let consoleSpy;
    let calculateNumberStub;

    beforeEach(() => {
        // Stub the calculateNumber method from Utils to always return 10
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Create a spy on console.log
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the stub and spy
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it('should call calculateNumber with SUM and correct arguments and log the correct message', () => {
        const totalAmount = 100;
        const totalShipping = 20;

        // Run the function with the parameters
        sendPaymentRequestToApi(totalAmount, totalShipping);

        // Check that the stub was called with 'SUM', 100, and 20
        expect(calculateNumberStub.calledOnceWith('SUM', totalAmount, totalShipping)).to.be.true;

        // Check that console.log was called with 'The total is: 10'
        expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
    });
});
