describe('transportFee function', () => {
    it('should return R20 if shift is morning', () => {
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return R10 if shift is afternoon', () => {
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return "free" if shift is neither morning nor afternoon', () => {
        assert.equal(transportFee('night'), 'free');
    });
    
});
