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
import User from './User';

/**
 * The Block model module.
 * @module model/Block
 * @version 1.5.4
 */
class Block {
    /**
     * Constructs a new <code>Block</code>.
     * The block schema
     * @alias module:model/Block
     */
    constructor() { 
        
        Block.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Block</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Block} obj Optional instance to populate.
     * @return {module:model/Block} The populated <code>Block</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Block();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('previousHash')) {
                obj['previousHash'] = ApiClient.convertToType(data['previousHash'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('foundByUser')) {
                obj['foundByUser'] = User.constructFromObject(data['foundByUser']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Block</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Block</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['hash'] && !(typeof data['hash'] === 'string' || data['hash'] instanceof String)) {
            throw new Error("Expected the field `hash` to be a primitive type in the JSON string but got " + data['hash']);
        }
        // ensure the json data is a string
        if (data['previousHash'] && !(typeof data['previousHash'] === 'string' || data['previousHash'] instanceof String)) {
            throw new Error("Expected the field `previousHash` to be a primitive type in the JSON string but got " + data['previousHash']);
        }
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }
        // validate the optional field `foundByUser`
        if (data['foundByUser']) { // data not null
          User.validateJSON(data['foundByUser']);
        }

        return true;
    }


}



/**
 * @member {String} hash
 */
Block.prototype['hash'] = undefined;

/**
 * @member {String} previousHash
 */
Block.prototype['previousHash'] = undefined;

/**
 * @member {String} data
 */
Block.prototype['data'] = undefined;

/**
 * @member {Number} timestamp
 */
Block.prototype['timestamp'] = undefined;

/**
 * @member {Number} nonce
 */
Block.prototype['nonce'] = undefined;

/**
 * @member {module:model/User} foundByUser
 */
Block.prototype['foundByUser'] = undefined;






export default Block;
