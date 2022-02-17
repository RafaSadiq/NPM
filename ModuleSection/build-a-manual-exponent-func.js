// toThePowerOf(2, 3) => 8
// reduce

const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
}

Array(3).fill(2);
// output: (3) [2, 2, 2]

//------------------------------------------------------------------------

const toThePowerOf = (num, exp) => {
    const reducer = (total, currentValue) => total + currentValue;
    const items = Array(exp).fill(num);
    return items.reduce(reducer);
}

toThePowerOf(2, 3);