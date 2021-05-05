import * as complexOperations from './complexOperations';

describe('complexOperation', () => {
  describe('checkEmail', () => {
    it('Check email without parameter', () => {
      expect(complexOperations.checkEmail()).toBe('The email should be a string');
    });
    it('Check email with empty string', () => {
      expect(complexOperations.checkEmail('')).toBe('The email should be a string');
    });
    it('Check email only with "@"', () => {
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
    });
    it('Check email with a number', () => {
      expect(complexOperations.checkEmail(10)).toBe('The email should be a string');
    });
    it('Check email with an invalid email', () => {
      expect(complexOperations.checkEmail('test@.com')).toBe('The email is invalid');
    });
    it('Check email with a valid email', () => {
      expect(complexOperations.checkEmail('pabloabalbo@hotmail.com')).toBe('The email is valid');
    });
  });

  describe('calculateArea', () => {
    it('Check function without parameters', () => {
      expect(complexOperations.calculateArea()).toBe(`undefined is not supported`);
    });
    it('Check function with an empty string', () => {
      expect(complexOperations.calculateArea('')).toBe(`${''} is not supported`);
    });
    it('Check function with only one parameter', () => {
      expect(complexOperations.calculateArea('square')).toBe('number1 and number2 should be numbers');
    });
    it('Check function with a figure and only one parameter', () => {
      expect(complexOperations.calculateArea('square', 5)).toBe(0);
    });
    it('Check function with an invalid second parameter', () => {
      expect(complexOperations.calculateArea('rectangle', 'hello', 10)).toBe('number1 and number2 should be numbers');
    });
    it('Check function with an invalid third parameter', () => {
      expect(complexOperations.calculateArea('triangle', 5, 'hello')).toBe('number1 and number2 should be numbers');
    });
    it('Check function with a square and a valid parameter', () => {
      expect(complexOperations.calculateArea('square', 5, 5)).toBe(25);
    });
    it('Check function with a square and a decimal number', () => {
      expect(complexOperations.calculateArea('square', 5.5, 5.5)).toBe(30.25);
    });
    it('Check function with a rectangle and a valid parameter', () => {
      expect(complexOperations.calculateArea('rectangle', 5, 7)).toBe(35);
    });
    it('Check function with a rectangle and a decimal number', () => {
      expect(complexOperations.calculateArea('square', 5.5, 7.5)).toBe(41.25);
    });
    it('Check function with a triangle and a valid parameter', () => {
      expect(complexOperations.calculateArea('triangle', 5, 5)).toBe(12.5);
    });
    it('Check function with a triangle and a decimal number', () => {
      expect(complexOperations.calculateArea('triangle', 5, 3.5)).toBe(8.75);
    });
    it('Check function with a circle and a decimal number for parameters', () => {
      expect(complexOperations.calculateArea('circle', 5.5)).toBeCloseTo(95.03);
    });
    it('Check function with a circle and a valid parameter', () => {
      expect(complexOperations.calculateArea('circle', 10)).toBeCloseTo(314.16);
    });
    it('Check function with a circle and an invalid parameter', () => {
      expect(complexOperations.calculateArea('circle', 'hello')).toBe('number1 and number2 should be numbers');
    });
    it('Check function with an hexagon', () => {
      expect(complexOperations.calculateArea('hexagono', 5, 10)).toBe('hexagono is not supported');
    });
    // it('Check function with a circle and a negative number', () => {
    //   expect(complexOperations.calculateArea('circle', -10)).toBeCloseTo(314.16);
    // });
    // puedo probar esta funcion con numeros negativos?
  });

  describe('sumGratherThan', () => {
    it('Check function without parameters', () => {
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
      expect(complexOperations.sumGratherThan(4, 5, 6)).toBe(`${9} is grather than ${6}`);
    });
    it('Check function correctly (less)', () => {
      expect(complexOperations.sumGratherThan(4, 5, 20)).toBe(`${9} is less than ${20}`);
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('Check function without parameters', () => {
      expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
    });
    it('Check function with strings', () => {
      expect(complexOperations.intersectionBetweenArrays('hello', 'world')).toBe('The params should be arrays');
    });
    it('Check function with numbers', () => {
      expect(complexOperations.intersectionBetweenArrays(6, 5)).toBe('The params should be arrays');
    });
    it('Check function with two empty arrays', () => {
      expect(complexOperations.intersectionBetweenArrays([],[])).toBe('There are not matching elements');
    });
    it('Check function with an empty array', () => {
      expect(complexOperations.intersectionBetweenArrays(['Ford', 'Mustang', 'Can-am'],[])).toBe('There are not matching elements');
    });
    it('Check function with no matching elements', () => {
      expect(complexOperations.intersectionBetweenArrays(['Ford', 'Mustang', 'Can-am'],['Fiat', 'Renault', 'BMW'])).toBe('There are not matching elements');
    });
    it('Check function with a match', () => {
      expect(complexOperations.intersectionBetweenArrays(['Ford', 'Mustang', 'Can-am'], ['Fiat', 'Renault', 'BMW', 'Ford'])).toStrictEqual(['Ford']);
    });
    it('Check function with two matches', () => {
      expect(complexOperations.intersectionBetweenArrays(['Ford', 'Mustang', 'Can-am'], ['Fiat', 'Renault', 'BMW', 'Ford', 'Can-am'])).toStrictEqual(['Ford', 'Can-am']);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('Check function without parameters', () => {
      expect(complexOperations.sortArrayOfObjectsByKey()).toBe('The first param should be an array');
    });
    it('Check function only with an array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {name: 'Lucila'}, {name: 'Ana'}, {name: 'Emanuel'}])).toEqual('The second param should be an string');
    });
    it('Check function only with a key', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('position')).toEqual('The first param should be an array');
    });
    it('Check function with an empty array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([], 'name')).toEqual([]);
    });
    it('Check function when key is a number', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {name: 'Lucila'}, {name: 'Ana'}, {name: 'Emanuel'}], 6)).toEqual('The second param should be an string');
    });
    it('Check function when key is an empty string', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {name: 'Lucila'}, {name: 'Ana'}, {name: 'Emanuel'}], '')).toEqual('The second param should be an string');
    });
    // POR QUE FUNCIONA SI EL SEGUNDO PARAMETRO ES UN STRING, PERO VACIO?
    it('Check function with diferent keys in the array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {lastName: 'Lucila'}, {number: 'Ana'}, {years: 'Emanuel'}], 'name')).toEqual('Some elements in the array does not have the name property');
    });
    it('Check function working correctly', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Pablo'}, {name: 'Lucila'}, {name: 'Ana'}, {name: 'Emanuel'}],'name')).toEqual([{name: 'Ana'}, {name: 'Emanuel'}, {name: 'Lucila'}, {name: 'Pablo'}]);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('Check function without parameters', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers()).toBe('The param should be an array');
    });
    it('Check function with an empty string', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('')).toBe('The param should be an array');
    });
    it('Check function with a string', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('Pablo')).toBe('The param should be an array');
    });
    it('Check function with a number', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(6)).toBe('The param should be an array');
    });
    it('Check function with an array of strings', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(['one', 'two', 'three', 'four'])).toBe('The array should have only numbers');
    });
    it('Check function with an array of numbers and strings', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 'four', 'five', 'six'])).toBe('The array should have only numbers');
    });
    // it('Check function with an array of decimal numbers', () => {
    //   expect(complexOperations.numberOfOddAndEvenNumbers([1.5, 2.5, 3.5, 4.5, 5.5, 6.5])).toBe(???);
    // });
    // it('Check function with an array of numbers', () => {
    //   expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(???);
    // });
    // QUE DEVUELVE LA FUNCION?
  });
});