function sum(a: number, b: number): number {
    if(isNaN(a) || isNaN(b)) throw new Error();
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        let decimales = 0
        if (!Number.isInteger(a)) decimales = a.toString().split(".")[1].length;
        if (!Number.isInteger(b)) decimales = b.toString().split(".")[1].length > decimales ? b.toString().split(".")[1].length : decimales;
        return parseFloat((a + b).toFixed(decimales));
    }
    return a + b
}

function sub(a: number, b: number): number {
    if(isNaN(a) || isNaN(b)) throw new Error();
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        let decimales = a.toString().split(".")[1].length;
        decimales = b.toString().split(".")[1].length > decimales ? b.toString().split(".")[1].length : decimales;
        return parseFloat((a - b).toFixed(decimales));
    }
    return a - b;
}

function multiply(a: number, b: number): number {
    if(isNaN(a) || isNaN(b)) throw new Error();
    let result = parseFloat((a * b).toFixed(10));
    if (result <= 0.0000000001) result = 0; 
    return result;
}

function div(a: number, b: number): number {
    if(isNaN(a) || isNaN(b)) throw new Error();
    if( b == 0 ) throw new Error();
    let result = parseFloat((a / b).toFixed(10));
    if (result <= 0.0000000001) result = 0; 
    return result;
}

// To Implement: subAll, multiplyAll, divAll

function sumAll(numbers: Array<number>): number {
    if (numbers.length == 0) return 0;
    return numbers.reduce( (result, number) => sum(result, number) );
}
function subAll(numbers: Array<number>): number {
    if (numbers.length == 0) return 0;
    return numbers.reduce( (result, number) => sub(result, number) );
}
function multiplyAll(numbers: Array<number>): number {
    if (numbers.length == 0) return 0;
    return numbers.reduce( (result, number) => multiply(result, number) );
}
function divAll(numbers: Array<number>): number {
    if (numbers.length == 0) return 0;
    return numbers.reduce( (result, number) => div(result, number) );
}

// To Implement: operateAll

export { sum, sub, multiply, div, sumAll, subAll, multiplyAll, divAll };