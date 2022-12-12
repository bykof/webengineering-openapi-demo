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
    instance = new Pokecoin.CardPack();
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

  describe('CardPack', function() {
    it('should create an instance of CardPack', function() {
      // uncomment below and update the code to test CardPack
      //var instance = new Pokecoin.CardPack();
      //expect(instance).to.be.a(Pokecoin.CardPack);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Pokecoin.CardPack();
      //expect(instance).to.be();
    });

    it('should have the property cards (base name: "cards")', function() {
      // uncomment below and update the code to test the property cards
      //var instance = new Pokecoin.CardPack();
      //expect(instance).to.be();
    });

  });

}));
