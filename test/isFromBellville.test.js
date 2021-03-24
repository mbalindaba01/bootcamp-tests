describe('isFromBellville function', () => {
    it('should return true for "CY 343 456"', () => {
        assert.equal(isFromBellville('CY 343 456'), true);
    });
    
    it('should return false for "CA 887 125"', () => {
        assert.equal(isFromBellville('CA 887 125'), false);
    });
    it('should return false "L 225 998"', () => {
        assert.equal(isFromBellville('L 225 998'), false);
    });
    
});


