describe('countRegNumber function', () => {
    it("should return 3 for ('GP 67 NB, CY 546 786, CA 068 345')", () => {
        assert.equal(countRegNumber('GP 67 NB, CY 546 786, CA 068 345'), 3)
    });
    
    it("should return 1 for ('GP 67 NB')", () => {
        assert.equal(countRegNumber('GP 67 NB'), 1)
    });
});
