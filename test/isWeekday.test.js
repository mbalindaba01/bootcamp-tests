describe('isWeekday function', () => {
    it('should return true for "Thursday"', () => {
        assert.equal(isWeekday('Thursday'), true);
    });
    it('should return true for "Monday"', () => {
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return true for "Friday"', () => {
        assert.equal(isWeekday('Friday'), true);
    });
    
    it('should return false for "Saturday"', () => {
        assert.equal(isWeekday('Saturday'), false);
    });
    it('should return false for "Sunday"', () => {
        assert.equal(isWeekday('Sunday'), false);
    });
    it('should return false for an empty string in the parameter', () => {
        assert.equal(isWeekday(''), false);
    });
    
    
});
