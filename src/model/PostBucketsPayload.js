/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. From visualizing data to 3D printing, take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient'),
      PostBucketsPayloadAllow = require('./PostBucketsPayloadAllow');



  /**
   * The PostBucketsPayload model module.
   * @module model/PostBucketsPayload
   * @version 0.1.4
   */

   /**
    * Constructs a <code>PostBucketsPayload</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostBucketsPayload} obj Optional instance to populate.
    * @return {module:model/PostBucketsPayload} The populated <code>PostBucketsPayload</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('bucketKey')) {
        obj['bucketKey'] = ApiClient.convertToType(data['bucketKey'], 'String');
      }
      if (data.hasOwnProperty('allow')) {
        obj['allow'] = ApiClient.convertToType(data['allow'], [PostBucketsPayloadAllow]);
      }
      if (data.hasOwnProperty('policyKey')) {
        obj['policyKey'] = ApiClient.convertToType(data['policyKey'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>PostBucketsPayload</code>.
   * Bucket Payload Body Structure
   * @alias module:model/PostBucketsPayload
   * @class
   * @param bucketKey {String} Bucket key
   * @param policyKey {module:model/PostBucketsPayload.PolicyKeyEnum} [Data retention policy](https://developer.autodesk.com/en/docs/data/v2/overview/retention-policy/)  Acceptable values: `transient`, `temporary` or `persistent` 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostBucketsPayload} obj Optional instance to populate.
   */
  var exports = function(bucketKey, policyKey, theData, obj) {
    var _this = this;

    _this['bucketKey'] = bucketKey;

    _this['policyKey'] = policyKey;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>PostBucketsPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostBucketsPayload} obj Optional instance to populate.
   * @return {module:model/PostBucketsPayload} The populated <code>PostBucketsPayload</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * Bucket key
   * @member {String} bucketKey
   */
  exports.prototype['bucketKey'] = undefined;
  /**
   * 
   * @member {Array.<module:model/PostBucketsPayloadAllow>} allow
   */
  exports.prototype['allow'] = undefined;
  /**
   * [Data retention policy](https://developer.autodesk.com/en/docs/data/v2/overview/retention-policy/)  Acceptable values: `transient`, `temporary` or `persistent` 
   * @member {module:model/PostBucketsPayload.PolicyKeyEnum} policyKey
   */
  exports.prototype['policyKey'] = undefined;


  /**
   * Allowed values for the <code>policyKey</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PolicyKeyEnum = {
    /**
     * value: "transient"
     * @const
     */
    "transient": "transient",
    /**
     * value: "temporary"
     * @const
     */
    "temporary": "temporary",
    /**
     * value: "persistent"
     * @const
     */
    "persistent": "persistent"  };


  return exports;
}());


