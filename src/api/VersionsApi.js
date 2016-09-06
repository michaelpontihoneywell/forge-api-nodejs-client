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
       JsonApiCollection = require('../model/JsonApiCollection'),
       CreateRef = require('../model/CreateRef');

  /**
   * Versions service.
   * @module api/VersionsApi
   * @version 0.1.4
   */

  /**
   * Constructs a new VersionsApi. 
   * @alias module:api/VersionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns the version with the given &#x60;version_id&#x60;. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * data is of type: {Object}
     * @param {Object} credentials Credentials for the call
     */
    this.getVersion = function(projectId, versionId, credentials) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getVersion";
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw "Missing the required parameter 'versionId' when calling getVersion";
      }


      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns the item the given version is associated with. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * data is of type: {Object}
     * @param {Object} credentials Credentials for the call
     */
    this.getVersionItem = function(projectId, versionId, credentials) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getVersionItem";
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw "Missing the required parameter 'versionId' when calling getVersionItem";
      }


      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/item', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;version_id&#x60;. Custom relationships can be established between a version of an item and other resources within the &#39;data&#39; domain service (folders, items, and versions). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * data is of type: {module:model/JsonApiCollection}
     * @param {Object} credentials Credentials for the call
     */
    this.getVersionRefs = function(projectId, versionId, opts, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getVersionRefs";
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw "Missing the required parameter 'versionId' when calling getVersionRefs";
      }


      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'multi'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'multi'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = JsonApiCollection;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns the custom relationships that are associated to the given &#x60;version_id&#x60;. Custom relationships can be established between a version of an item and other resources within the &#39;data&#39; domain service (folders, items, and versions). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterRefType filter by &#x60;refType&#x60;
     * @param {module:model/String} opts.filterDirection filter by the direction of the reference
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * data is of type: {Object}
     * @param {Object} credentials Credentials for the call
     */
    this.getVersionRelationshipsRefs = function(projectId, versionId, opts, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getVersionRelationshipsRefs";
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw "Missing the required parameter 'versionId' when calling getVersionRelationshipsRefs";
      }


      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'multi'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'multi'),
        'filter[refType]': this.apiClient.buildCollectionParam(opts['filterRefType'], 'multi'),
        'filter[direction]': opts['filterDirection'],
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Creates a custom relationship between a version and another resource within the &#39;data&#39; domain service (folder, item, or version). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {module:model/CreateRef} body describe the ref to be created
     * @param {Object} credentials Credentials for the call
     */
    this.postVersionRelationshipsRef = function(projectId, versionId, body, credentials) {
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling postVersionRelationshipsRef";
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw "Missing the required parameter 'versionId' when calling postVersionRelationshipsRef";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling postVersionRelationshipsRef";
      }


      var pathParams = {
        'project_id': projectId,
        'version_id': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };
  };

  return exports;
}());
