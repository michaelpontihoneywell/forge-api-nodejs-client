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
   * The JobIgesOutputPayloadAdvanced model module.
   * @module model/JobIgesOutputPayloadAdvanced
   * @version 0.1.4
   */

   /**
    * Constructs a <code>JobIgesOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobIgesOutputPayloadAdvanced} obj Optional instance to populate.
    * @return {module:model/JobIgesOutputPayloadAdvanced} The populated <code>JobIgesOutputPayloadAdvanced</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('tolerance')) {
        obj['tolerance'] = ApiClient.convertToType(data['tolerance'], 'Number');
      }
      if (data.hasOwnProperty('surfaceType')) {
        obj['surfaceType'] = ApiClient.convertToType(data['surfaceType'], 'String');
      }
      if (data.hasOwnProperty('sheetType')) {
        obj['sheetType'] = ApiClient.convertToType(data['sheetType'], 'String');
      }
      if (data.hasOwnProperty('solidType')) {
        obj['solidType'] = ApiClient.convertToType(data['solidType'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobIgesOutputPayloadAdvanced</code>.
   * Advanced options for &#x60;iges&#x60; type.
   * @alias module:model/JobIgesOutputPayloadAdvanced
   * @class
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIgesOutputPayloadAdvanced} obj Optional instance to populate.
   */
  var exports = function(theData, obj) {
    var _this = this;






    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobIgesOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIgesOutputPayloadAdvanced} obj Optional instance to populate.
   * @return {module:model/JobIgesOutputPayloadAdvanced} The populated <code>JobIgesOutputPayloadAdvanced</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * Possible values are between `0` and `1`. By default it is set at 0.001.
   * @member {Number} tolerance
   * @default 0.001
   */
  exports.prototype['tolerance'] = 0.001;
  /**
   * Possible values are `bounded`, `trimmed` and `wireframe`. By default it is set to bounded surface.
   * @member {module:model/JobIgesOutputPayloadAdvanced.SurfaceTypeEnum} surfaceType
   * @default 'bounded'
   */
  exports.prototype['surfaceType'] = 'bounded';
  /**
   * Export the sheet body to IGES. `open`, `shell`, `surface` or `wireframe`. By default, it is set to `surface`.
   * @member {module:model/JobIgesOutputPayloadAdvanced.SheetTypeEnum} sheetType
   * @default 'surface'
   */
  exports.prototype['sheetType'] = 'surface';
  /**
   * Export the solid body to IGES `solid`, `surface` or `wireframe`. By default, it is set to `solid`.
   * @member {module:model/JobIgesOutputPayloadAdvanced.SolidTypeEnum} solidType
   * @default 'solid'
   */
  exports.prototype['solidType'] = 'solid';


  /**
   * Allowed values for the <code>surfaceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SurfaceTypeEnum = {
    /**
     * value: "bounded"
     * @const
     */
    "bounded": "bounded",
    /**
     * value: "trimmed"
     * @const
     */
    "trimmed": "trimmed",
    /**
     * value: "wireframe"
     * @const
     */
    "wireframe": "wireframe"  };

  /**
   * Allowed values for the <code>sheetType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SheetTypeEnum = {
    /**
     * value: "open"
     * @const
     */
    "open": "open",
    /**
     * value: "surface"
     * @const
     */
    "surface": "surface",
    /**
     * value: "shell"
     * @const
     */
    "shell": "shell",
    /**
     * value: "wireframe"
     * @const
     */
    "wireframe": "wireframe"  };

  /**
   * Allowed values for the <code>solidType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SolidTypeEnum = {
    /**
     * value: "solid"
     * @const
     */
    "solid": "solid",
    /**
     * value: "surface"
     * @const
     */
    "surface": "surface",
    /**
     * value: "wireframe"
     * @const
     */
    "wireframe": "wireframe"  };


  return exports;
}());


