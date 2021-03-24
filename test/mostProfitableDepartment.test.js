describe('mostProfitableDepartment function', () => {
    it('must return "hardware" if the hardware department produces the most profit', () => {
        assert.deepEqual(mostProfitableDepartment([
        {department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'}]), 'hardware');
    });

    it('must return "outdoor" if the outdoor department produces more profit', () => {
        assert.deepEqual(mostProfitableDepartment([
           {department: 'hardware', sales: 1200, day: 'Monday'},
           {department: 'outdoor', sales: 1500, day: 'Monday'}]), 'outdoor');
       }); 
});
