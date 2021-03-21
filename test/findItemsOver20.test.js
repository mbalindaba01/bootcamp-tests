describe('findItemsOver20 function', () => {
    it('should return {name: pears, qty: 27} for ({name: apples, qty: 10}, {name: pears, qty: 27})', () => {
        assert.deepEqual(findItemsOver20([
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        ]), [ {name : 'pears', qty : 37} ])
    });
    it('should return an empty array for ({name: apples, qty: 10}, {name: pears, qty: 14})', () => {
        assert.deepEqual(findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 14}]), [])
    });
    
});