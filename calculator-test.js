describe('calculator is working', function(){
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 5,
    rate: 0.06
  };
  expect(calculateMonthlyPayment(values)).toEqual('166.92');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 20000,
    years: 7,
    rate: 6.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('296.99')
})
});

describe('no payments test', function(){
it('no payments', function() {
  const values = {
    amount: 20000,
    years: 0,
    rate: 0,
  };
  expect(calculateMonthlyPayment(values)).toEqual('NaN')
})

it('rejected payments', function(){
 
  expect(() => calculateMonthlyPayment(values)).toThrowError();
})
});