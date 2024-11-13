describe('b', function() {
    it('should pass, then fail', function() {
      process.nextTick(function() {
        throw new Error('uncaught!!');
      });
    });
  });
  