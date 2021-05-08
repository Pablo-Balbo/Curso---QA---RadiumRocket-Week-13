import funcMock from './operations.mock';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation', () => {
  describe('checkEmail', () => {
    it('Check function with a string', () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('Hello Jest')).toBe('The email is invalid');
    });
    it('Check function with an email', () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('pabloabalbo@hotmail.com')).toBe('The email is valid');
    });
    it('Check email without parameter', () => { 
      expect(complexOperations.checkEmail()).toBe('The email should be a string');
    });
    it('Check email with empty string', () => {
      expect(complexOperations.checkEmail('')).toBe('The email should be a string');
    });
    it('Check email only with "@"', () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
    });
    it('Check email with a number', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail(10)).toBe('The email should be a string');
    });
    it('Check email with an invalid email', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      expect(complexOperations.checkEmail('test@.com')).toBe('The email is invalid');
    });
    it('Check email with a valid email', () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('pabloabalbo@hotmail.com')).toBe('The email is valid');
    });
  });

  describe('calculateArea', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });
    it('Check function without parameters', () => {
      expect(complexOperations.calculateArea()).toBe(`undefined is not supported`);
    });
    it('Check function with an empty string', () => {
      expect(complexOperations.calculateArea('')).toBe(`${''} is not supported`);
    });
    it('Check function with an hexagon', () => {
      expect(complexOperations.calculateArea('hexagono')).toBe('hexagono is not supported');
    });
    it('Check function with only one parameter', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('square')).toBe('number1 and number2 should be numbers');
    });
    it('Check function with a figure and only one parameter', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      expect(complexOperations.calculateArea('square', 5)).toBe(25);
    });
    it('Check function with an invalid second parameter', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('rectangle', 'hello', 10)).toBe('number1 and number2 should be numbers');
    });
    it('Check function with an invalid third parameter', () => {
      expect(complexOperations.calculateArea('triangle', 5, 'hello')).toBe('number1 and number2 should be numbers');
    });
    it('Check function with a square and a valid parameter', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      expect(complexOperations.calculateArea('square', 5, 5)).toBe(25);
    });
    it('Check function with a square and a decimal number', () => {
      expect(complexOperations.calculateArea('square', 5.5, 5.5)).toBe(25);
    });
    it('Check function with a rectangle and a valid parameter', () => {
      expect(complexOperations.calculateArea('rectangle', 5, 7)).toBe(25);
    });
    it('Check function with a rectangle and a decimal number', () => {
      expect(complexOperations.calculateArea('square', 5.5, 7.5)).toBe(25);
    });
    it('Check function with a triangle and a valid parameter', () => {
      expect(complexOperations.calculateArea('triangle', 5, 5)).toBe(10);
    });
    it('Check function with a triangle and a decimal number', () => {
      expect(complexOperations.calculateArea('triangle', 5, 3.5)).toBe(10);
    });
    it('Check function with a circle and a decimal number for parameters', () => {
      expect(complexOperations.calculateArea('circle', 5.5)).toBeCloseTo(6.28);
    });
    it('Check function with a circle and a valid parameter', () => {
      expect(complexOperations.calculateArea('circle', 10)).toBeCloseTo(6.28);
    });
    it('Check function with a circle and an invalid parameter', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('circle', 'hello')).toBe('number1 and number2 should be numbers');
    });
    it('Check function with a circle and a negative number', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      expect(complexOperations.calculateArea('circle', -10)).toBeCloseTo(6.28);
    });
  });

  describe('sumGratherThan', () => {
    it('Check function without parameters', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan()).toBe('The params should be numbers');
    });
    it('Check function with strings', () => {
      expect(complexOperations.sumGratherThan('one', 'two', 'three')).toBe('The params should be numbers');
    });
    it('Check function: sum a number with a string', () => {
      expect(complexOperations.sumGratherThan(1, 'two', 3)).toBe('The params should be numbers');
    });
    it('Check function: compare result with a string', () => {
      expect(complexOperations.sumGratherThan(1, 2, 'three')).toBe('The params should be numbers');
    });
    it('Check function without comparison parameter', () => {
      expect(complexOperations.sumGratherThan(1, 2)).toBe('The params should be numbers');
    });
    it('Check function correctly (grather)', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      expect(complexOperations.sumGratherThan(4, 5, 6)).toBe(`10 is grather than 6`);
    });
    it('Check function correctly (less)', () => {
      expect(complexOperations.sumGratherThan(4, 5, 20)).toBe(`10 is less than 20`);
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('Check function without parameters', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
    });
    it('Check function with strings', () => {
      expect(complexOperations.intersectionBetweenArrays('hello', 'world')).toBe('The params should be arrays');
    });
    it('Check function with numbers', () => {
      expect(complexOperations.intersectionBetweenArrays(6, 5)).toBe('The params should be arrays');
    });
    it('Check function with two empty arrays', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
      expect(complexOperations.intersectionBetweenArrays([],[])).toBe('There are not matching elements');
    });
    it('Check function with an empty array', () => {
      expect(complexOperations.intersectionBetweenArrays(['Ford', 'Mustang', 'Can-am'],[])).toBe('There are not matching elements');
    });
    it('Check function with no matching elements', () => {
      expect(complexOperations.intersectionBetweenArrays(['Ford', 'Mustang', 'Can-am'],['Fiat', 'Renault', 'BMW'])).toBe('There are not matching elements');
    });
    it('Check function with a match', () => {
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(['Ford']);
      expect(complexOperations.intersectionBetweenArrays(['Ford', 'Mustang', 'Can-am'], ['Fiat', 'Renault', 'BMW', 'Ford'])).toStrictEqual(['Ford']);
    });
    it('Check function with two matches', () => {
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(['Ford', 'Can-am']);
      expect(complexOperations.intersectionBetweenArrays(['Ford', 'Mustang', 'Can-am'], ['Fiat', 'Renault', 'BMW', 'Ford', 'Can-am'])).toStrictEqual(['Ford', 'Can-am']);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('Check function without parameters', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey()).toBe('The first param should be an array');
    });
    it('Check function only with a key', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('position')).toBe('The first param should be an array');
    });
    it('Check function only with an array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {name: 'Lucila'}, {name: 'Ana'}, {name: 'Emanuel'}])).toBe('The second param should be an string');
    });
    it('Check function with an empty array', () => {
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([], 'name')).toBe('Some elements in the array does not have the name property');
    });
    it('Check function when key is a number', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {name: 'Lucila'}, {name: 'Ana'}, {name: 'Emanuel'}], 6)).toBe('The second param should be an string');
    });
    it('Check function with an empty array and a number for key', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([], 6)).toBe('The second param should be an string');
    });
    it('Check function when key is an empty string', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {name: 'Lucila'}, {name: 'Ana'}, {name: 'Emanuel'}], '')).toBe('The second param should be an string');
    });
    it('Check function with diferent keys in the array', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {lastName: 'Lucila'}, {number: 'Ana'}, {years: 'Emanuel'}], 'name')).toBe('Some elements in the array does not have the name property');
    });
    it('Check function working correctly', () => {
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {name: 'Lucila'}, {name: 'Ana'}, {name: 'Emanuel'}],'name')).toBe(4);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('Check function without parameters', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers()).toBe('The param should be an array');
    });
    it('Check function with an empty string', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('')).toBe('The param should be an array');
    });
      it('Check function with a number', () => {
        expect(complexOperations.numberOfOddAndEvenNumbers(6)).toBe('The param should be an array');
      });
    it('Check function with a string', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('Pablo')).toBe('The param should be an array');
    });
    it('Check function with an array of strings', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers(['one', 'two', 'three', 'four'])).toBe('The array should have only numbers');
    });
    it('Check function with an array of numbers and strings', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 'four', 'five', 'six'])).toBe('The array should have only numbers');
    });
    it('Check function with an empty array', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([0]);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([0]);
      expect(complexOperations.numberOfOddAndEvenNumbers([])).toEqual({"even": 1, "odd": 1,});
    });
    it('Check function with an array of numbers', () => {
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([1, 3, 5]);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([2, 4, 6]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual({"even": 3, "odd":3,});
    });
    it('Check function with an array of decimal numbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1.1, 2.2, 3.3, 4.4, 5.5, 6.6])).toEqual({"even": 3, "odd": 3});
    });
  });
});