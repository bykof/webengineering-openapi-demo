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
    instance = new Pokecoin.ViewsApi();
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

  describe('ViewsApi', function() {
    describe('viewsBlockchainGet', function() {
      it('should call viewsBlockchainGet successfully', function(done) {
        //uncomment below and update the code to test viewsBlockchainGet
        //instance.viewsBlockchainGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewsDashboardGet', function() {
      it('should call viewsDashboardGet successfully', function(done) {
        //uncomment below and update the code to test viewsDashboardGet
        //instance.viewsDashboardGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewsUsersGet', function() {
      it('should call viewsUsersGet successfully', function(done) {
        //uncomment below and update the code to test viewsUsersGet
        //instance.viewsUsersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
