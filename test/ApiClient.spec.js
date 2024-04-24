/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
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
/*jshint esversion: 9 */

module.exports = (function () {
	'use strict';

	var expect = require('expect.js'),
		sinon = require('sinon'),
		ForgeSdk = require('../src'),
		nock = require('nock');

	var apiClient, oauth2client;

	beforeEach(function () {
		var APS_CLIENT_ID = process.env.APS_CLIENT_ID || '<your forge client ID>';
		var APS_CLIENT_SECRET = process.env.APS_CLIENT_SECRET || '<your forge client secret>';

		apiClient = new ForgeSdk.ApiClient();
		oauth2client = new ForgeSdk.AuthClientTwoLegged(APS_CLIENT_ID, APS_CLIENT_SECRET, ['data:read', 'data:write']);
	});

	describe('ApiClient', function () {

		describe('properties', function () {

			it('should have basePath property', function () {
				expect(apiClient).to.have.property('basePath');
			});
			it('should have basePath property', function () {
				expect(apiClient).to.have.property('defaultHeaders');
			});
			it('should have basePath property', function () {
				expect(apiClient).to.have.property('timeout');
			});

		});

		describe('paramToString method', function () {

			it('should work for a non-empty param', function () {
				var a = 9,
					now = new Date();
				expect(apiClient.paramToString(a)).to.be('9');
				expect(apiClient.paramToString(now)).to.be(now.toJSON());
			});
			it('should fail for empty param', function () {
				var a = null,
					b;
				expect(apiClient.paramToString(a)).to.be('');
				expect(apiClient.paramToString(b)).to.be('');
			});

		});

		describe('buildUrl method', function () {

			it('should work for a qualified URL', function () {
				var path = '/test/{p1}/{p2}',
					pathParams = {
						p1: 'foo',
						p2: true
					};

				expect(apiClient.buildUrl(path, pathParams)).to.be(apiClient.basePath + '/test/foo/true');
			});

			it('should ignore pathParams when URL is not qualified', function () {
				var path = '/test';
				var pathParams = {
					p1: 'foo',
					p2: true
				};

				expect(apiClient.buildUrl(path, pathParams)).to.be(apiClient.basePath + '/test');
			});

		});

		describe('isJsonMime method', function () {

			it('should return true for a json mime', function () {
				expect(apiClient.isJsonMime('application/json')).to.be(true);
			});

			it('should return true for a vnd.api+json mime', function () {
				expect(apiClient.isJsonMime('application/vnd.api+json')).to.be(true);
			});

			it('should return false for a non-json mime', function () {
				expect(apiClient.isJsonMime('application/xml')).to.be(false);
			});

		});

		describe('jsonPreferredMime method', function () {

			it('should return the json mime if it is present in an array', function () {
				var mimeTypes = ['application/xml', 'application/json', 'application/x-www-form-urlencoded'];
				expect(apiClient.jsonPreferredMime(mimeTypes)).to.be('application/json');
			});

			it('should return the vnd.api+json mime if it is present in an array', function () {
				var mimeTypes = ['application/xml', 'application/vnd.api+json', 'application/x-www-form-urlencoded'];
				expect(apiClient.jsonPreferredMime(mimeTypes)).to.be('application/vnd.api+json');
			});

			it('should return the first json mime if it is present in an array', function () {
				var mimeTypes = ['application/xml', 'application/json', 'application/vnd.api+json', 'application/x-www-form-urlencoded'];
				expect(apiClient.jsonPreferredMime(mimeTypes)).to.be('application/json');
			});

			it('should return the first mime if json is not present in an array', function () {
				var mimeTypes = ['application/xml', 'application/x-www-form-urlencoded'];
				expect(apiClient.jsonPreferredMime(mimeTypes)).to.be('application/xml');
			});

			it('should fail for a an empty array', function () {
				expect(apiClient.jsonPreferredMime([])).to.not.be.ok();
			});

		});

		describe('isFileParam method', function () {

			it('should return true for a Buffer file type', function () {
				var buffer = Buffer.alloc(100);
				expect(apiClient.isFileParam(buffer)).to.be(true);
			});

			it('should return true for a ReadStream file type', function () {
				var readStream = require('fs').createReadStream(__filename);
				expect(apiClient.isFileParam(readStream)).to.be(true);
			});

			it('should return false for a non-file type', function () {
				expect(apiClient.isFileParam('foo')).to.be(false);
				expect(apiClient.isFileParam(true)).to.be(false);
				expect(apiClient.isFileParam(3)).to.be(false);
			});

		});

		describe('normalizeParams method', function () {

			it('should normalize objects', function () {
				expect(apiClient.normalizeParams({
					foo: 'bar',
					'baz': true
				})).to.eql({
					foo: 'bar',
					'baz': 'true'
				});
			});

			it('should normalize arrays', function () {
				expect(apiClient.normalizeParams({
					foo: ['abc', true]
				})).to.eql({
					foo: ['abc', true]
				});
			});

		});

		describe('buildCollectionParam method', function () {

			it('should build collection param for csv', function () {
				expect(apiClient.buildCollectionParam(['foo', 'bar'], 'csv')).to.equal('foo' + ForgeSdk.ApiClient.CollectionFormatEnum.CSV + 'bar');
			});
			it('should build collection param for ssv', function () {
				expect(apiClient.buildCollectionParam(['foo', 'bar'], 'ssv')).to.equal('foo' + ForgeSdk.ApiClient.CollectionFormatEnum.SSV + 'bar');
			});
			it('should build collection param for tsv', function () {
				expect(apiClient.buildCollectionParam(['foo', 'bar'], 'tsv')).to.equal('foo' + ForgeSdk.ApiClient.CollectionFormatEnum.TSV + 'bar');
			});
			it('should build collection param for pipes', function () {
				expect(apiClient.buildCollectionParam(['foo', 'bar'], 'pipes')).to.equal('foo' + ForgeSdk.ApiClient.CollectionFormatEnum.PIPES + 'bar');
			});
			it('should build collection param for multi', function () {
				expect(apiClient.buildCollectionParam(['foo', false], 'multi')).to.eql(['foo', 'false']);
			});
			it('should fail for an illegal format', function () {
				try {
					expect(apiClient.buildCollectionParam(['foo', 'bar'], 'baz')).to.throw();
				} catch (err) {
					expect(err).to.be.ok();
				}

			});

		});

		describe('applyAuthToRequest method', function () {

			it('should add authentication header to the request for correct credentials', function () {
				var requestParams = {};
				var headers = {
					foo: 'bar'
				};
				var credentials = {
					access_token: 'abcdef'
				};
				apiClient.applyAuthToRequest(requestParams, headers, oauth2client, credentials);
				expect(headers).to.have.property('Authorization');
			});

			it('should not add authentication header to the request for empty credentials', function () {
				var requestParams = {};
				var headers = {
					foo: 'bar'
				};
				var credentials = {};
				apiClient.applyAuthToRequest(requestParams, headers, oauth2client, credentials);
				expect(headers).to.not.have.property('Authorization');
			});

			it('should try to auto refresh an expired token 3-legged', function (done) {
				var oauth2client3 = new ForgeSdk.AuthClientThreeLegged('APS_CLIENT_ID', 'APS_CLIENT_SECRET', 'http://example.com/callback',
					['data:read', 'data:write'], true);
				var mockedOauth3legged = sinon.stub(oauth2client3, 'refreshToken');
				var requestParams = {
					headers: {
						foo: 'bar'
					}
				};
				var credentials = {
					access_token: 'abcdef',
					refresh_token: 'sdfdfdsf',
					expires_at: new Date().getMinutes() - 5
				};
				var headers = {
					'foo': 'bar'
				};
				mockedOauth3legged.withArgs(credentials).returns(Promise.resolve({
					access_token: '1234567',
					refresh_token: '098765'
				}));

				apiClient.applyAuthToRequest(requestParams, headers, oauth2client3, credentials).then(function () {
					expect(headers).to.have.property('Authorization');
					mockedOauth3legged.restore();
					done();
				});
			});

		});

		describe('debug method', function () {

			it('able to work in debug mode', function () {
				apiClient.isDebugMode = true;
				apiClient.debug('foo');
				apiClient.debug(10);
			});

		});

		describe('callApi method', function () {

			it('able to call api successfully', function (done) {
				var path = '/oss/v2/buckets',
					httpMethod = 'POST',
					pathParams = {},
					queryParams = {},
					headerParams = {
						'Custom-Header': 'foo'
					},
					formParams = {},
					bodyParam = {
						'bucketKey': 'test-bucket',
						'policyKey': 'temporary'
					},
					contentTypes = ['application/json'],
					accepts = ['application/json'],
					returnType = ForgeSdk.Bucket,
					credentials = {
						access_token: 'abcdef'
					};

				nock(apiClient.basePath)
					.post(path, {
						bucketKey: bodyParam.bucketKey,
						policyKey: bodyParam.policyKey
					})
					.reply(200, function (uri, respBody) {
						// expect(this.req.headers).to.have.property('authorization');
						// expect(this.req.headers).to.have.property('custom-header');
						return respBody;
					});

				apiClient.callApi(path, httpMethod, pathParams,
					queryParams, headerParams, formParams, bodyParam,
					contentTypes, accepts, returnType, oauth2client, credentials).then(function (response) {
						expect(response.body).to.have.property('bucketKey');
						expect(response.body.bucketKey).to.equal('test-bucket');
						done();
					}, function (err) {
						done(err);
					});
			});

			// it('able to call api successfully with vnd.api+json content-type', function (done) {
			//     var path = '/oss/v2/buckets',
			//         httpMethod = 'POST',
			//         pathParams = {},
			//         queryParams = {},
			//         headerParams = {
			//             'Custom-Header': 'foo'
			//         },
			//         formParams = {},
			//         bodyParam = {
			//             'bucketKey': 'test-bucket',
			//             'policyKey': 'temporary'
			//         },
			//         contentTypes = ['application/vnd.api+json'],
			//         accepts = ['application/json'],
			//         returnType = ForgeSdk.Bucket,
			//         credentials = {
			//             access_token: 'abcdef'
			//         };

			//     nock(apiClient.basePath)
			//         .post(path, {
			//             bucketKey: bodyParam.bucketKey,
			//             policyKey: bodyParam.policyKey
			//         })
			//         .reply(200, function (uri, respBody) {
			//             // expect(this.req.headers).to.have.property('authorization');
			//             // expect(this.req.headers).to.have.property('custom-header');
			//             return respBody;
			//         });

			//     apiClient.callApi(path, httpMethod, pathParams,
			//         queryParams, headerParams, formParams, bodyParam,
			//         contentTypes, accepts, returnType, oauth2client, credentials).then(function (response) {
			//         expect(response.body).to.have.property('bucketKey');
			//         expect(response.body.bucketKey).to.equal('test-bucket');
			//         done();
			//     }, function (err) {
			//         done(err);
			//     });
			// });

			it('able to call api successfully with form-data', function (done) {
				var path = '/',
					httpMethod = 'DELETE',
					pathParams = {
						'urn': 'test_string'
					},
					queryParams = {},
					headerParams = {
						'Custom-Header': 'foo'
					},
					formParams = {},
					bodyParam = {},
					contentTypes = ['multipart/form-data'],
					accepts = ['application/vnd.api+json', 'application/json'],
					returnType = ForgeSdk.Result,
					credentials = {
						access_token: 'abcdef'
					};

				nock(apiClient.basePath)
					.delete(path)
					.reply(200 /* OK */, {
						result: 'success'
					});

				apiClient.callApi(path, httpMethod, pathParams,
					queryParams, headerParams, formParams, bodyParam,
					contentTypes, accepts, returnType, oauth2client, credentials).then(function (response) {
						expect(response.body).to.have.property('result');
						expect(response.body.result).to.equal('success');
						done();
					}, function (err) {
						done(err);
					});
			});

			it('able to call api successfully with x-www-url-encoded', function (done) {
				var path = '/',
					httpMethod = 'DELETE',
					pathParams = {
						'urn': 'test_string'
					},
					queryParams = {},
					headerParams = {
						'Custom-Header': 'foo'
					},
					formParams = {},
					bodyParam = {},
					contentTypes = ['application/x-www-form-urlencoded'],
					accepts = ['application/vnd.api+json', 'application/json'],
					returnType = ForgeSdk.Result,
					credentials = {
						access_token: 'abcdef'
					};

				nock(apiClient.basePath)
					.delete(path)
					.reply(200 /* OK */, {
						result: 'success'
					});

				apiClient.callApi(path, httpMethod, pathParams,
					queryParams, headerParams, formParams, bodyParam,
					contentTypes, accepts, returnType, oauth2client, credentials).then(function (response) {
						expect(response.body).to.have.property('result');
						expect(response.body.result).to.equal('success');
						done();
					}, function (err) {
						done(err);
					});
			});

		});

	});

}());