// import funcMock from './basicOperations.mock';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('First test for checkEmail', () => {
      expect(complexOperations.checkEmail(10)).toBe('The email should be an string');
    });
    it('Second test for checkEmail', () => {
      expect(complexOperations.checkEmail('Narella')).toBe('The email is invalid');
    });
    it('Third test for checkEmail', () => {
      expect(complexOperations.checkEmail('narellacalvente@gmail.com')).toBe('The email is valid');
    });
  });

  describe('calculateArea', () => {
    it('First test for calculateArea', () => {
      expect(complexOperations.calculateArea('hexagon')).toBe(`${'hexagon'} is not supported`);
    });
    it('Second test for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 'five', 'ten')).toBe('number1 and number2 should be numbers');
    });
    it('Third test for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 5, 5)).toBe(25);
    });
    it('Four test for calculateArea', () => {
      expect(complexOperations.calculateArea('rectangle', 2.5, 10)).toBe(25);
    });
    it('Five test for calculateArea', () => {
      expect(complexOperations.calculateArea('triangle', 5, 10)).toBe(25);
    });
    it('Six test for calculateArea', () => {
      expect(complexOperations.calculateArea('circle', 10)).toBeCloseTo(314.16);
    });
  });

  describe('sumGratherThan', () => {
    it('First test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan('five', 'six', 'seven')).toBe('The params should be numbers');
    });
    it('Second test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(4, 5, 6)).toBe(`${9} is grather than ${6}`);
    });
    it('Third test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(2, 2, 6)).toBe(`${4} is less than ${6}`);
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('First test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays('hello', 5)).toBe('The params should be arrays');
    });
    it('Second test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['apple', 'banana', 'orange'], ['one', 'two', 'three'])).toBe('There are not matching elements');
    });
    it('Third test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['apple', 'banana', 'orange'], ['one', 'apple', 'three'])).toStrictEqual(['apple']);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('First test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('hello')).toBe('The first param should be an array');
    });
    it('Second test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([5, 6])).toBe('The second param should be an string');
    });
    it('Third test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{position: 'One'}, {position:'Two'}, {place: 'Three'}], 'position')).toEqual('Some elements in the array does not have the position property');
    });
    it('Four test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{position: 'One'}, {position:'Two'}, {position:'Three'}], 'position')).toEqual([{"position": "One"}, {"position": "Three"}, {"position": "Two"}]);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('First test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('hello')).toBe('The param should be an array');
    });
    it('Second test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(['hello', 'world'])).toBe(`The array should have only numbers`);
    });
    it('Third test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([2, 4, 5, 6, 7, 8])).toEqual({"even": 4, "odd": 2});
    });
  });
});