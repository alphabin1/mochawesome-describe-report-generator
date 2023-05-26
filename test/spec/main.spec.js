const {expect} = require('chai')
describe('Calculator', () => {
  describe('Addition', () => {
    it('should return the sum of two numbers', () => {
      const sum = 5 + 3;
      expect(sum).to.equal(8)
      // expect(sum).toBe(8);
    });

    it('should handle negative numbers correctly', () => {
      const sum = -10 + 7;
      expect(sum).to.equal(-3)
    });
  });

  describe('Multiplication', () => {
    it('should return the multiplication of two numbers', () => {
      const multiply = 4 * 2;
      expect(multiply).to.equal(10)
    });

    it('should handle multiplication by zero', () => {
      const multiply = 6 * 0;
      expect(multiply).to.equal(0);
    });
  });

  describe('Division', () => {
    it('should return the division of two numbers', () => {
      const division = 12 / 4;
      expect(division).to.equal(3);
    });

    it('should handle division by zero', () => {
      const division = 10 / 0;
      expect(division).to.equal(Infinity);
    });
  });

  describe('Subtraction', () => {
    it('should return the difference of two numbers', () => {
      const subtract = 9 - 5;
      expect(subtract).to.equal(4);
    });

    it('should handle negative results', () => {
      const subtract = 5 - 9;
      expect(subtract).to.equal(-4);
    });
  });

  describe('Modulus', () => {
    it('should return the modulus of the division', () => {
      const modulus = 10 % 3;
      expect(modulus).to.equal(1);
    });

    it('should handle zero as the remainder', () => {
      const modulus = 8 % 4;
      expect(modulus).to.equal(0);
    });
  });
});
