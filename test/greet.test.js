describe('greet function', () => {
    it('should be able to greet Mbali', () => {
        assert.equal(greet('Mbali'), 'Hello, Mbali');
    });
    it('should be able to greet Khethiwe', () => {
        assert.equal(greet('Khethiwe'), 'Hello, Khethiwe')
    });
});
