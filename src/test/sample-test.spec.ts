// http://babeljs.io/docs/usage/polyfill/
// To include the babel polyfill you need to require it at the top of the entry point to your application.
import "babel-polyfill";

import {CalculatorClass} from '../lib/CalculatorClass';
import {assert} from 'chai';

describe('calculator', () => {
  it('should add numbers aynchronously', async (done) => {
    try {
      let calculator = new CalculatorClass(2, 2);
      let result = await calculator.addNumbers();

      assert.equal(result, 4);

      done();
    } catch (error) {
      done(error);
    }
  });
});
