describe('regCheck function', () => {
    it('should return true for ("DV 23 NB GP,", "GP")', () => {
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
    });
    it('should return true for("LP 87 BN GP", "GP")', () => {
        assert.equal(regCheck('LP 87 BN GP', 'GP'), true);
    });
    

    it("should return false for ('DV 23 GP NB', 'GP')", () => {
        assert.equal(regCheck('DV 23 GP NB', 'GP'), false);
    });
    it("should return false for ('CA 564 768', 'CA')", () => {
        assert.equal(regCheck('CA 564 768', 'CA'), false);
    });
    
});
