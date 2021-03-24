describe('findItemsOver20 function', () => {
    it('should return all objects with quantity of over 20 items', () => {
        assert.deepEqual(findItemsOver20([
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        ]), [ {name : 'pears', qty : 37} ])
    });
    it('should return an empty array if there are no objects with a quantity exceeding 20 in the smaple provided', () => {
        assert.deepEqual(findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 14}]), [])
    });
    
});