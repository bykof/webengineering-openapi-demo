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

import ApiClient from '../ApiClient';

/**
 * The UnauthorizedError model module.
 * @module model/UnauthorizedError
 * @version 1.5.4
 */
class UnauthorizedError {
    /**
     * Constructs a new <code>UnauthorizedError</code>.
     * Unauthorized Request
     * @alias module:model/UnauthorizedError
     */
    constructor() { 
        
        UnauthorizedError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UnauthorizedError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnauthorizedError} obj Optional instance to populate.
     * @return {module:model/UnauthorizedError} The populated <code>UnauthorizedError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnauthorizedError();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UnauthorizedError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UnauthorizedError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {module:model/UnauthorizedError.CodeEnum} code
 */
UnauthorizedError.prototype['code'] = undefined;

/**
 * @member {String} message
 */
UnauthorizedError.prototype['message'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
UnauthorizedError['CodeEnum'] = {

    /**
     * value: "UnauthorizedError"
     * @const
     */
    "UnauthorizedError": "UnauthorizedError"
};



export default UnauthorizedError;

