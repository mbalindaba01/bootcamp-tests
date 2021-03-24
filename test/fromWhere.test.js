describe('fromWhere function', () => {
    it('should return "Bellville" for all reg numbers starting with "CY"', () => {
        assert.equal(fromWhere('CY 756 948'), 'Bellville')
    });
    it('should return "Paarl" for all reg numbers starting with "CJ"', () => {
        assert.equal(fromWhere('CJ 332 430'), 'Paarl')
    });
    it('should return "Cape Town" for all reg numbers starting with "CA"', () => {
        assert.equal(fromWhere('CA 002 365'), 'Cape Town')
    });
    it('should return "Some other place!" for all other registration numbers', () => {
        assert.equal(fromWhere('NN 758 ZN'), 'Some other place!')
    });
    
    
    
});
