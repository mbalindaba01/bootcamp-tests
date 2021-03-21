describe('yearsAgo function', () => {
    it('should return 15 if 2006 is passed as a parameter', () => {
        assert.equal(yearsAgo(2006), 15)
    });

    it('should return 26 if 1995 is passed as a parameter', () => {
        assert.equal(yearsAgo(1995), 26)
    });
});
