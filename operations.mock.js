import 'jest';

let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(6);
let multip = jest.fn().mockReturnValue(25);
let division = jest.fn().mockReturnValue(25);
let exponent = jest.fn().mockReturnValue(100);
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let arrayIntersection = jest.fn().mockReturnValue(['apple']);
let sortArrayByKey = jest.fn().mockReturnValue(true);
let getEvenNumbersFromArray = jest.fn().mockReturnValue([2, 4, 6, 8]);
let getOddNumbersFromArray = jest.fn().mockReturnValue([5, 7]);

const funcMock = jest.mock('./basicOperations.js', () => {
  return {
    isNumber,
    isArray,
    isString,
    validateEmail,
    sum,
    multip,
    division,
    exponent,
    isSupportedFigure,
    arrayElementsAreObjectWithKey,
    arrayIntersection,
    sortArrayByKey,
    getEvenNumbersFromArray,
    getOddNumbersFromArray,
  }
});

export default funcMock;