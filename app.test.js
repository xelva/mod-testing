const { forEach, map } = require('./app.js');
const assert = require('assert');

//helper function before Mocha
/* const test = (desc, fn) => {
    console.log('------', desc);
    try {
        fn();
    } catch (err) {
        console.log(err);
    }
}; */

//forEach
it('test the forEach function', () =>{
    let sum = 0;
    forEach([1,2,3], value => {
    sum += value;
    });

    assert.strictEqual(sum, 6, 'Expected to equal 6');

    //before useing assert
    /* if (sum !== 6 ) {
        throw new Error('Expected sum to equal 6')
    }; */
});


//map
it('test the map function', () => {
    const result = map([1,2,3], value => {
        return value * 2
    });
    assert.strictEqual(result[0], 2);
    assert.strictEqual(result[1], 4);
    assert.strictEqual(result[2], 6);

    //before using assert
  /*   if (result[0] !== 2) {
        throw new Error(`Expected to find 2, but found ${result[0]}`)
    }
    if (result[1] !== 4) {
        throw new Error(`Expected to find 4, but found ${result[1]}`)
    }
    if (result[2] !== 6) {
        throw new Error(`Expected to find 6, but found ${result[2]}`)
    } */
});
