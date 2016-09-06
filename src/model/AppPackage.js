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

  var ApiClient = require('../ApiClient');



  /**
   * The AppPackage model module.
   * @module model/AppPackage
   * @version 0.1.4
   */

   /**
    * Constructs a <code>AppPackage</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AppPackage} obj Optional instance to populate.
    * @return {module:model/AppPackage} The populated <code>AppPackage</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Resource')) {
        obj['Resource'] = ApiClient.convertToType(data['Resource'], 'String');
      }
      if (data.hasOwnProperty('References')) {
        obj['References'] = ApiClient.convertToType(data['References'], ['String']);
      }
      if (data.hasOwnProperty('RequiredEngineVersion')) {
        obj['RequiredEngineVersion'] = ApiClient.convertToType(data['RequiredEngineVersion'], 'String');
      }
      if (data.hasOwnProperty('Version')) {
        obj['Version'] = ApiClient.convertToType(data['Version'], 'Integer');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('IsPublic')) {
        obj['IsPublic'] = ApiClient.convertToType(data['IsPublic'], 'Boolean');
      }
      if (data.hasOwnProperty('IsObjectEnabler')) {
        obj['IsObjectEnabler'] = ApiClient.convertToType(data['IsObjectEnabler'], 'Boolean');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>AppPackage</code>.
   * @alias module:model/AppPackage
   * @class
   * @param id {String} 
   * @param resource {String} 
   * @param references {Array.<String>} 
   * @param requiredEngineVersion {String} 
   * @param version {Integer} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppPackage} obj Optional instance to populate.
   */
  var exports = function(id, resource, references, requiredEngineVersion, version, theData, obj) {
    var _this = this;

    _this['Id'] = id;
    _this['Resource'] = resource;
    _this['References'] = references;
    _this['RequiredEngineVersion'] = requiredEngineVersion;
    _this['Version'] = version;




    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>AppPackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppPackage} obj Optional instance to populate.
   * @return {module:model/AppPackage} The populated <code>AppPackage</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {String} Resource
   */
  exports.prototype['Resource'] = undefined;
  /**
   * @member {Array.<String>} References
   */
  exports.prototype['References'] = undefined;
  /**
   * @member {String} RequiredEngineVersion
   */
  exports.prototype['RequiredEngineVersion'] = undefined;
  /**
   * @member {Integer} Version
   */
  exports.prototype['Version'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Boolean} IsPublic
   */
  exports.prototype['IsPublic'] = undefined;
  /**
   * @member {Boolean} IsObjectEnabler
   */
  exports.prototype['IsObjectEnabler'] = undefined;



  return exports;
}());


