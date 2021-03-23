describe('mostProfitableDepartment function', () => {
    it('must return "hardware" for {department: "hardware", sales: 4500}, {department: "outdoor", sales: 1500}', () => {
        assert.deepEqual(mostProfitableDepartment([
        {department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'}]), 'hardware');
    });

    it('must return "outdoor" for {department: "hardware", sales: 1200}, {department: "outdoor", sales: 1500}', () => {
        assert.deepEqual(mostProfitableDepartment([
           {department: 'hardware', sales: 1200, day: 'Monday'},
           {department: 'outdoor', sales: 1500, day: 'Monday'}]), 'outdoor');
       });
    
    
});
