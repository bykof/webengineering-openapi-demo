/**
 * Pokecoin
 * The Pokecoin documentation
 *
 * The version of the OpenAPI document: 1.5.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Pokecoin);
  }
}(this, function(expect, Pokecoin) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Pokecoin.Transaction();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Transaction', function() {
    it('should create an instance of Transaction', function() {
      // uncomment below and update the code to test Transaction
      //var instance = new Pokecoin.Transaction();
      //expect(instance).to.be.a(Pokecoin.Transaction);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new Pokecoin.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new Pokecoin.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property rewardOfBlock (base name: "rewardOfBlock")', function() {
      // uncomment below and update the code to test the property rewardOfBlock
      //var instance = new Pokecoin.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new Pokecoin.Transaction();
      //expect(instance).to.be();
    });

  });

}));