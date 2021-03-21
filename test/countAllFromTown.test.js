describe('countAllFromTown function', () => {
    it("should return 2 for the string('CL 657 465, CL 635 998, CY 223 435', 'CL')", () => {
        assert.equal(countAllFromTown('CL 657 465,CL 635 998,CY 223 435', 'CL'), 2);
    });
    
    it("should return 0 for the string('CY 657 465,CA 635 998,CY 223 435', 'CJ')", () => {
        assert.equal(countAllFromTown('CY 657 465,CA 635 998,CY 223 435', 'CJ'), 0);
    });
    
});
