describe('fromWhere function', () => {
    it('should return "Bellville" for "CY 756 948"', () => {
        assert.equal(fromWhere('CY 756 948'), 'Bellville')
    });
    it('should return "Paarl" for "CJ 332 430"', () => {
        assert.equal(fromWhere('CJ 332 430'), 'Paarl')
    });
    it('should return "Cape Town" for "CA 002 365"', () => {
        assert.equal(fromWhere('CA 002 365'), 'Cape Town')
    });
    it('should return "Some other place!" for "NN 758 ZN"', () => {
        assert.equal(fromWhere('NN 758 ZN'), 'Some other place!')
    });
    
    
    
});
