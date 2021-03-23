describe('totalPhoneBill function', () => {
    it('should return R6.15 for "call, call, sms"', () => {
        assert.equal(totalPhoneBill('call, call, sms'), 'R6.15')
    });
    
    it('should return R2.75 for "call"', () => {
        assert.equal(totalPhoneBill('call'), 'R2.75')
    });
    
    it('should return R0.65 for "sms"', () => {
        assert.equal(totalPhoneBill('sms'), 'R0.65')
    });
    
});
