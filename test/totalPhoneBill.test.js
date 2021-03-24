describe('totalPhoneBill function', () => {
    it('should return R6.15 for two calls and an sms', () => {
        assert.equal(totalPhoneBill('call, call, sms'), 'R6.15')
    });
    
    it('should return R2.75 for a call', () => {
        assert.equal(totalPhoneBill('call'), 'R2.75')
    });
    
    it('should return R0.65 for an sms', () => {
        assert.equal(totalPhoneBill('sms'), 'R0.65')
    });
});
