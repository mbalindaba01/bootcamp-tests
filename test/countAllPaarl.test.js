describe('countAllPaarl function', () => {
    it("should return two for ('CJ 657 465, CJ 998 436, CY 745 009, CA 112 546')", () => {
        assert.equal(countAllPaarl('CJ 657 465, CJ 998 436, CY 745 009, CA 112 546'), 2);
    });

    it("should return zero for ('CA 657 465, CP 998 436, CY 745 009, CA 112 546'),", () => {
        assert.equal(countAllPaarl('CA 657 465, CP 998 436, CY 745 009, CA 112 546'), 0);
    });
});

