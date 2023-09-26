import { sum, sub, multiply, div, sumAll, subAll, multiplyAll, divAll } from '../src/math-operators';
import * as mockMathOperators from '../src/math-operators';

describe('sum operation', () => {
    test('sums two integer numbers', () => {
        expect(sum(2, 1)).toStrictEqual(3);
        expect(sum(90, 10)).toStrictEqual(100);
    });

    test('sums an integer and a float number', () => {
        expect(sum(2, 1.0)).toStrictEqual(3);
        expect(sum(90.0, 10)).toStrictEqual(100);
    });

    test('sums two floating point numbers', () => {
        expect(sum(2.0, 1.0)).toStrictEqual(3.0);
        expect(sum(0.2, 0.1)).toStrictEqual(0.3);
        expect(sum(0.02, 0.0001)).toStrictEqual(0.0201);
        expect(sum(90.3, 10.7)).toStrictEqual(101);
    });

    test('sums two integer negative numbers', () => {
        expect(sum(-90, -10)).toStrictEqual(-100);
    });

    test('sums two negative floating point numbers', () => {
        expect(sum(-2.0, -1.0)).toStrictEqual(-3.0);
        expect(sum(-90.3, -10.7)).toStrictEqual(-101);
    });

    test('sums a number and a NaN. Should throw an Error.', () => {
        expect(() => sum(NaN, 0)).toThrow();
    });
});

describe('sub operation', () => {
    test('substracts two integer numbers', () => {
        expect(sub(2, 1)).toStrictEqual(1);
        expect(sub(90, 10)).toStrictEqual(80);
    });

    test('substracts two floating point numbers', () => {
        expect(sub(2.0, 1.0)).toStrictEqual(1.0);
        expect(sub(90.3, 10.1)).toStrictEqual(80.2);
    });

    test('substracts two integer negative numbers', () => {
        expect(sub(-90, -10)).toStrictEqual(-80);
    });

    test('substracts two negative floating point numbers', () => {
        expect(sub(-2.0, -1.0)).toStrictEqual(-1.0);
        expect(sub(-90.3, -10.1)).toStrictEqual(-80.2);
    });

    test('substracts a number and a NaN. Should throw an Error.', () => {
        expect(() => sub(NaN, 0)).toThrow();
    });
});

describe('multiply operation', () => {
    test('multiply two integer numbers', () => {
        expect(multiply(2, 1)).toStrictEqual(2);
        expect(multiply(90, 10)).toStrictEqual(900);
    });

    test('multiply two floating point numbers', () => {
        expect(multiply(2.0, 1.0)).toStrictEqual(2);
        expect(multiply(0.02, 0.01)).toStrictEqual(0.0002);
        expect(multiply(0.00002, 0.00001)).toStrictEqual(0.0000000002);
        expect(multiply(0.0000002, 0.0000001)).toStrictEqual(0);
        expect(multiply(0.2000000, 0.1000000)).toStrictEqual(0.02);
        expect(multiply(90.0, 10.1)).toStrictEqual(909);
    });

    test('multiply two integer negative numbers', () => {
        expect(multiply(-90, -10)).toStrictEqual(900);
    });

    test('multiply two negative floating point numbers', () => {
        expect(multiply(-2.0, -1.0)).toStrictEqual(2);
        expect(multiply(-90.0, -10.1)).toStrictEqual(909);
    });

    test('multiply a number and a NaN. Should throw an Error.', () => {
        expect(() => multiply(NaN, 0)).toThrow();
    });
});

describe('divide operation', () => {
    test('divide two integer numbers', () => {
        expect(div(2, 1)).toStrictEqual(2.0);
        expect(div(90, 10)).toStrictEqual(9.0);
    });

    test('divide two floating point numbers', () => {
        expect(div(2.0, 1.0)).toStrictEqual(2.0);
        expect(div(90.1, 10.0)).toStrictEqual(9.01);
    });

    test('divide using big numbers', () => {
        expect(div(1, 100000000000)).toStrictEqual(0);
        expect(div(100000000000, 1)).toStrictEqual(100000000000);
    });

    test('divide by 0', () => {
        expect(() => div(1, 0)).toThrow();
        expect(() => div(0, 0)).toThrow();
    });

    test('divide two integer negative numbers', () => {
        expect(div(-90, -10)).toStrictEqual(9.0);
    });

    test('divide two negative floating point numbers', () => {
        expect(div(-2.0, -1.0)).toStrictEqual(2.0);
        expect(div(-90.1, -10.0)).toStrictEqual(9.01);
    });

    test('divide a number by 0. Should throw an Error.', () => {
        expect(() => div(2, 0)).toThrow();
    });

    test('divide a number and a NaN. Should throw an Error.', () => {
        expect(() => div(NaN, 0)).toThrow();
    });
});



describe('sumAll operation', () => {
    // Tests de IntegraciÃ³n
//  test('sum many integer numbers', () => {
//      expect(sumAll([1, 2, 3])).toStrictEqual(6);
//      expect(sumAll([1, 2, 3, 4, 5, 6])).toStrictEqual(21);
//      expect(sumAll([2, 1.0, 0.05])).toStrictEqual(3.05);
//      expect(sumAll([-1, 3, -1.1])).toStrictEqual(0.9);
//      expect(() => sumAll([NaN, NaN, 12, 0])).toThrow();
//  });
    test('sum less than three numbers', () => {
        expect(sumAll([1, 2])).toStrictEqual(3);
        expect(sumAll([1])).toStrictEqual(1);
    });
    test('sum an empty array should return 0', () => {
        expect(sumAll([])).toStrictEqual(0);
    });
});

describe('subAll operation', () => {
    test('sub less than three numbers', () => {
        expect(subAll([1, 2])).toStrictEqual(-1);
        expect(subAll([1])).toStrictEqual(1);
    });
    test('sub an empty array should return 0', () => {
        expect(subAll([])).toStrictEqual(0);
    });
});

describe('multiplyAll operation', () => {
    test('multiply less than three numbers', () => {
        expect(multiplyAll([1, 2])).toStrictEqual(2);
        expect(multiplyAll([1])).toStrictEqual(1);
    });
    test('multiply an empty array should return 0', () => {
        expect(multiplyAll([])).toStrictEqual(0);
    });
});

describe('divAll operation', () => {
    test('div more than two numbers to check operation number', () => {
        expect(divAll([12,2,3])).toStrictEqual(2);
    });
    test('div one number should return that number', () => {
        expect(divAll([1])).toStrictEqual(1);
    });
    test('div an empty array should return 0', () => {
        expect(divAll([])).toStrictEqual(0);
    });
    test('div an array that contains 0s', () => {
        expect(() => divAll([1, 0, 2, 0])).toThrow();
    });
});

/*
jest.mock('../src/math-operators', () => ({
    sum: jest.fn(() => {throw new Error();})
}))

describe('sumAll mock test', () => {
    test('sum many integer numbers', () => {
        expect(() => sumAll([1])).toThrow();
    });
});
*/