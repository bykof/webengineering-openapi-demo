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
    instance = new Pokecoin.UserCard();
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

  describe('UserCard', function() {
    it('should create an instance of UserCard', function() {
      // uncomment below and update the code to test UserCard
      //var instance = new Pokecoin.UserCard();
      //expect(instance).to.be.a(Pokecoin.UserCard);
    });

    it('should have the property cardId (base name: "cardId")', function() {
      // uncomment below and update the code to test the property cardId
      //var instance = new Pokecoin.UserCard();
      //expect(instance).to.be();
    });

    it('should have the property cardPack (base name: "cardPack")', function() {
      // uncomment below and update the code to test the property cardPack
      //var instance = new Pokecoin.UserCard();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new Pokecoin.UserCard();
      //expect(instance).to.be();
    });

  });

}));
