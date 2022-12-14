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


import ApiClient from "../ApiClient";
import BuyDefaultPackageSchemaResponse from '../model/BuyDefaultPackageSchemaResponse';
import CardPack from '../model/CardPack';
import CardResponse from '../model/CardResponse';
import CardsResponse from '../model/CardsResponse';
import UnauthorizedError from '../model/UnauthorizedError';
import UnexpectedError from '../model/UnexpectedError';
import UserCard from '../model/UserCard';

/**
* Cards service.
* @module api/CardsApi
* @version 1.5.4
*/
export default class CardsApi {

    /**
    * Constructs a new CardsApi. 
    * @alias module:api/CardsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cardsCardIdGet operation.
     * @callback module:api/CardsApi~cardsCardIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} cardId card id
     * @param {module:api/CardsApi~cardsCardIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CardResponse}
     */
    cardsCardIdGet(cardId, callback) {
      let postBody = null;
      // verify the required parameter 'cardId' is set
      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling cardsCardIdGet");
      }

      let pathParams = {
        'cardId': cardId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CardResponse;
      return this.apiClient.callApi(
        '/cards/{cardId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cardsGet operation.
     * @callback module:api/CardsApi~cardsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page starting by index 0
     * @param {module:api/CardsApi~cardsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CardsResponse}
     */
    cardsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CardsResponse;
      return this.apiClient.callApi(
        '/cards/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cardsPackagesCardPackNameBuyDefaultPackageGet operation.
     * @callback module:api/CardsApi~cardsPackagesCardPackNameBuyDefaultPackageGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BuyDefaultPackageSchemaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} cardPackName name of the cardpack
     * @param {module:api/CardsApi~cardsPackagesCardPackNameBuyDefaultPackageGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BuyDefaultPackageSchemaResponse}
     */
    cardsPackagesCardPackNameBuyDefaultPackageGet(cardPackName, callback) {
      let postBody = null;
      // verify the required parameter 'cardPackName' is set
      if (cardPackName === undefined || cardPackName === null) {
        throw new Error("Missing the required parameter 'cardPackName' when calling cardsPackagesCardPackNameBuyDefaultPackageGet");
      }

      let pathParams = {
        'cardPackName': cardPackName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BuyDefaultPackageSchemaResponse;
      return this.apiClient.callApi(
        '/cards/packages/{cardPackName}/buyDefaultPackage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cardsPackagesCardPackNameGet operation.
     * @callback module:api/CardsApi~cardsPackagesCardPackNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CardPack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} cardPackName name of the cardpack
     * @param {module:api/CardsApi~cardsPackagesCardPackNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CardPack}
     */
    cardsPackagesCardPackNameGet(cardPackName, callback) {
      let postBody = null;
      // verify the required parameter 'cardPackName' is set
      if (cardPackName === undefined || cardPackName === null) {
        throw new Error("Missing the required parameter 'cardPackName' when calling cardsPackagesCardPackNameGet");
      }

      let pathParams = {
        'cardPackName': cardPackName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CardPack;
      return this.apiClient.callApi(
        '/cards/packages/{cardPackName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cardsPackagesCurrentPackageCostGet operation.
     * @callback module:api/CardsApi~cardsPackagesCurrentPackageCostGetCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/CardsApi~cardsPackagesCurrentPackageCostGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */
    cardsPackagesCurrentPackageCostGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/cards/packages/currentPackageCost', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cardsPackagesGet operation.
     * @callback module:api/CardsApi~cardsPackagesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/CardsApi~cardsPackagesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    cardsPackagesGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/cards/packages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cardsUsercardsGet operation.
     * @callback module:api/CardsApi~cardsUsercardsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserCard>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/CardsApi~cardsUsercardsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserCard>}
     */
    cardsUsercardsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [UserCard];
      return this.apiClient.callApi(
        '/cards/usercards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
