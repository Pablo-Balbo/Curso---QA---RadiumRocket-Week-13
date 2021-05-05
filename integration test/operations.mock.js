import 'jest';

let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue();
let multip = jest.fn().mockReturnValue();
let division = jest.fn().mockReturnValue();
let exponent = jest.fn().mockReturnValue();
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let arrayIntersection = jest.fn().mockReturnValue(['Ford']);
let sortArrayByKey = jest.fn().mockReturnValue(true);
// Revisar sortArrayByKey
let getEvenNumbersFromArray = jest.fn().mockReturnValue([]);
let getOddNumbersFromArray = jest.fn().mockReturnValue([]);

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