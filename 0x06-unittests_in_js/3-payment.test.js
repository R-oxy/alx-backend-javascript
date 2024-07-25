const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi function', () => {
    // Create a spy on the calculateNumber method from Utils
    let utilSpy;

    beforeEach(() => {
        utilSpy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        utilSpy.restore();
    });

    it('validate the usage of the Utils function', () => {
        const totalAmount = 100;
        const totalShipping = 20;

        // Run the function with the parameters
        sendPaymentRequestToApi(totalAmount, totalShipping);

        // Check that the spy was called exactly once
        expect(utilSpy.calledOnce).to.be.true;

        // Check that the spy was called with 'SUM' and the correct arguments
        expect(utilSpy.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
    });
});
