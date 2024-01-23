import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaCreditAssessmentCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create a new Automated Credit Assessment Enquiry', value: 'AutomatedCreditAssessment' },{ name: 'Delete an Automated Credit Assessment Enquiry', value: 'DeleteAutomatedCreditAssessment' },{ name: 'Create a Credit Assessment set', value: 'CreateCreditAssessmentSet' },{ name: 'Delete a Credit Assessment set and all of its assessments', value: 'DeleteCreditAssessmentSet' },{ name: 'Create a new Credit Assessment', value: 'CreateCreditAssessment' },{ name: 'Create a new Credit Assessment version', value: 'CreateNewCreditAssessmentVersion' },{ name: 'Complete an existing Credit Assessment version', value: 'CompleteCreditAssessmentVersion' },{ name: 'Create a manual credit assessment snapshot', value: 'CreateCreditAsssessmentSnapshot' },{ name: 'Create a new Automated CreditAssessment Provider', value: 'CreateCreditAssessmentProvider' },{ name: 'Update an Automated CreditAssessment Provider', value: 'UpdateCreditAssessmentProvider' },{ name: 'Update whether an Automated CreditAssessment Provider is enabled', value: 'UpdateCreditAssessmentProviderEnabled' },{ name: 'Save a new Automated CreditAssessment Provider Configuration', value: 'CreateProviderConfiguration' },{ name: 'Save a new AutomatedCreditAssessment Mapping Configuration', value: 'CreateMappingConfiguration' },{ name: 'Update an existing Automated Credit Assessment Mapping Configuration', value: 'UpdateMappingConfiguration' },{ name: 'Create a new Adapter Schema', value: 'CreateAdapterSchema' },{ name: 'Update a new Adapter Schema', value: 'UpdateAdapterSchema' },{ name: 'Test mock adapter endpoint', value: 'ProviderTest' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaCreditAssessmentCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The request id that needs to be updated', displayOptions: { show: { endpoint: [ 'DeleteAutomatedCreditAssessment' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Credit Assessment set to be deleted', displayOptions: { show: { endpoint: [ 'DeleteCreditAssessmentSet' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Credit Assessment set to create new Credit Assessment in', displayOptions: { show: { endpoint: [ 'CreateCreditAssessment' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Credit Assessment set the assessment belongs to', displayOptions: { show: { endpoint: [ 'CreateNewCreditAssessmentVersion' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'assessmentId', name: 'assessmentId', type: 'string', required: true, default: '', description: 'Credit Assessment to create a new version for', displayOptions: { show: { endpoint: [ 'CreateNewCreditAssessmentVersion' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Credit Assessment Set Id', displayOptions: { show: { endpoint: [ 'CompleteCreditAssessmentVersion' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'assessmentId', name: 'assessmentId', type: 'string', required: true, default: '', description: 'Credit Assessment Id', displayOptions: { show: { endpoint: [ 'CompleteCreditAssessmentVersion' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Credit Assessment Version Number', displayOptions: { show: { endpoint: [ 'CompleteCreditAssessmentVersion' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Credit Assessment Set Id', displayOptions: { show: { endpoint: [ 'CreateCreditAsssessmentSnapshot' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'assessmentId', name: 'assessmentId', type: 'string', required: true, default: '', description: 'Credit Assessment Id', displayOptions: { show: { endpoint: [ 'CreateCreditAsssessmentSnapshot' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Credit Assessment Version Number', displayOptions: { show: { endpoint: [ 'CreateCreditAsssessmentSnapshot' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'UpdateCreditAssessmentProvider' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'UpdateCreditAssessmentProviderEnabled' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'CreateProviderConfiguration' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'CreateMappingConfiguration' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'mappingId', name: 'mappingId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'UpdateMappingConfiguration' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'UpdateMappingConfiguration' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'CreateAdapterSchema' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'UpdateAdapterSchema' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'UpdateAdapterSchema' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'ProviderTest' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "id": "id", "name": "name", "journeyId": "journeyId", "taskId": "taskId", "searchCriteria": null, "enquiryResult": { "providerId": "providerId", "providerName": "providerName", "referenceId": "referenceId", "status": "status", "createdOn": "2023-11-30T11:31:45.0858235+00:00", "completedOn": "2023-11-30T11:31:45.0858273+00:00", "expiry": "2023-11-30T11:31:45.0858285+00:00", "requestedBy": "requestedBy", "errors": [ "" ], "resultOutcome": {}, "isCompleted": false, "isInProgress": false, "isFailed": false } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AutomatedCreditAssessment' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "creditAssessment": { "taskId": "taskId", "name": "name", "taskDataKey": "taskDataKey", "version": { "id": "id", "versionNumber": 0, "status": "status", "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "supportingDocuments": [ "" ], "integrationProperties": {}, "properties": {}, "groupProperties": {}, "approver": { "id": "id", "order": 0, "role": "role", "properties": {} }, "created": "2023-11-30T11:31:45.0862967+00:00", "lastUpdated": "2023-11-30T11:31:45.0862996+00:00" } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateCreditAssessmentSet' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "setId": "setId", "taskId": "taskId", "taskDataKey": "taskDataKey", "name": "name", "version": { "id": "id", "versionNumber": 0, "status": "status", "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "supportingDocuments": [ "" ], "integrationProperties": {}, "properties": {}, "groupProperties": {}, "approver": { "id": "id", "order": 0, "role": "role", "properties": {} }, "created": "2023-11-30T11:31:45.0863617+00:00", "lastUpdated": "2023-11-30T11:31:45.0863631+00:00" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateCreditAssessment' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "creditAssessmentId": "creditAssessmentId", "versionNumber": 0, "requirements": [ { "key": "key", "label": "label", "type": "type", "order": 0, "separator": "separator", "category": "category", "validationRule": { "id": "id", "setId": "setId", "propertyId": "propertyId", "dataGroupId": "dataGroupId", "isDataGroup": false, "propertyName": "propertyName", "friendlyName": "friendlyName", "validationType": "validationType", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2023-11-30T11:31:45.0865043+00:00", "maxDate": "2023-11-30T11:31:45.0865058+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "collectionMinimumCount": { "active": false, "message": "message", "requiredTypesMinCount": {}, "overallMinimumCount": 0 }, "collectionMaximumCount": { "active": false, "message": "message", "requiredTypesMaxCount": {}, "overallMaximumCount": 0 }, "externalProvider": { "active": false, "message": "message", "providerId": "providerId" } } } } ], "assessmentOutcome": { "key": "key", "label": "label", "type": "type", "order": 0, "separator": "separator", "category": "category", "validationRule": { "id": "id", "setId": "setId", "propertyId": "propertyId", "dataGroupId": "dataGroupId", "isDataGroup": false, "propertyName": "propertyName", "friendlyName": "friendlyName", "validationType": "validationType", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2023-11-30T11:31:45.0866261+00:00", "maxDate": "2023-11-30T11:31:45.0866274+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "collectionMinimumCount": { "active": false, "message": "message", "requiredTypesMinCount": {}, "overallMinimumCount": 0 }, "collectionMaximumCount": { "active": false, "message": "message", "requiredTypesMaxCount": {}, "overallMaximumCount": 0 }, "externalProvider": { "active": false, "message": "message", "providerId": "providerId" } } } }, "groupRequirements": [ { "name": "name", "key": "key", "snapshotPropertyItems": [ { "key": "key", "label": "label", "valueType": "valueType", "order": 0, "isAdditionalField": false, "validationRule": { "id": "id", "setId": "setId", "propertyId": "propertyId", "dataGroupId": "dataGroupId", "isDataGroup": false, "propertyName": "propertyName", "friendlyName": "friendlyName", "validationType": "validationType", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2023-11-30T11:31:45.0867505+00:00", "maxDate": "2023-11-30T11:31:45.0867518+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "collectionMinimumCount": { "active": false, "message": "message", "requiredTypesMinCount": {}, "overallMinimumCount": 0 }, "collectionMaximumCount": { "active": false, "message": "message", "requiredTypesMaxCount": {}, "overallMaximumCount": 0 }, "externalProvider": { "active": false, "message": "message", "providerId": "providerId" } } } } ], "validationRule": { "id": "id", "setId": "setId", "propertyId": "propertyId", "dataGroupId": "dataGroupId", "isDataGroup": false, "propertyName": "propertyName", "friendlyName": "friendlyName", "validationType": "validationType", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2023-11-30T11:31:45.0868737+00:00", "maxDate": "2023-11-30T11:31:45.0868750+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "collectionMinimumCount": { "active": false, "message": "message", "requiredTypesMinCount": {}, "overallMinimumCount": 0 }, "collectionMaximumCount": { "active": false, "message": "message", "requiredTypesMaxCount": {}, "overallMaximumCount": 0 }, "externalProvider": { "active": false, "message": "message", "providerId": "providerId" } } } } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateCreditAsssessmentSnapshot' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "name": "name", "enabled": false, "internalIdentifier": "internalIdentifier" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateCreditAssessmentProvider' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "name": "name", "enabled": false, "internalIdentifier": "internalIdentifier" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateCreditAssessmentProvider' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "name": "name", "enabled": false, "internalIdentifier": "internalIdentifier" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateCreditAssessmentProviderEnabled' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "providerId": "providerId", "configurationList": [ { "description": "description", "friendlyName": "friendlyName", "mandatory": false, "name": "name", "type": "type", "value": "value", "maskRequired": false } ], "adapterConfiguration": { "url": "url" }, "providerConfigurationSecurityKeys": { "authenticationKey": "authenticationKey", "encryptionKey": "encryptionKey" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateProviderConfiguration' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "providerId": "providerId", "initiateAutomatedCreditAssessmentRequest": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": null, "targetPropertyType": "targetPropertyType" } ] }, "targetPropertyType": "targetPropertyType" } ] }, "targetPropertyType": "targetPropertyType" } ] }, "initiateAutomatedCreditAssessmentResult": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": null, "targetPropertyType": "targetPropertyType" } ] }, "targetPropertyType": "targetPropertyType" } ] }, "targetPropertyType": "targetPropertyType" } ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateMappingConfiguration' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "providerId": "providerId", "initiateAutomatedCreditAssessmentRequest": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": null, "targetPropertyType": "targetPropertyType" } ] }, "targetPropertyType": "targetPropertyType" } ] }, "targetPropertyType": "targetPropertyType" } ] }, "initiateAutomatedCreditAssessmentResult": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": { "ruleSets": [ { "mappingRules": [ { "order": 0, "propertyName": "propertyName", "isArrayProperty": false, "includingNestedPath": false } ], "targetProperty": "targetProperty", "targetPropertyFriendlyName": "targetPropertyFriendlyName", "nestedMappingRules": null, "targetPropertyType": "targetPropertyType" } ] }, "targetPropertyType": "targetPropertyType" } ] }, "targetPropertyType": "targetPropertyType" } ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateMappingConfiguration' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "providerId": "providerId", "schema": { "initiateAutomatedCreditAssessmentRequest": { "fields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [] } ] } ] } ] }, "initiateAutomatedCreditAssessmentResult": { "fields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [] } ] } ] } ] } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateAdapterSchema' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "providerId": "providerId", "schema": { "initiateAutomatedCreditAssessmentRequest": { "fields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [] } ] } ] } ] }, "initiateAutomatedCreditAssessmentResult": { "fields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [ { "name": "name", "friendlyName": "friendlyName", "isMandatory": false, "type": "type", "description": "description", "nestedFields": [] } ] } ] } ] } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateAdapterSchema' ], domain: [ 'FenergoNebulaCreditAssessmentCommandv10' ] } } }
];

async function ExecuteFenergoNebulaCreditAssessmentCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
    // @ts-ignore
    let token = await FenXToken.getToken(base);

    let requestOptions: OptionsWithUri = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            'x-tenant-id': FenXToken.tenant
        },
        gzip: true,
        timeout: 3600000,
        uri: ""
    };

    const endpoint = base.getNodeParameter('endpoint', 0) as string;

    let id=''; let setId=''; let assessmentId=''; let versionNumber=''; let providerId=''; let mappingId='';
switch(endpoint){ case 'AutomatedCreditAssessment': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/auto';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteAutomatedCreditAssessment': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/auto/{id}'.replace('{id}', id);

break;
case 'CreateCreditAssessmentSet': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/creditassessment';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteCreditAssessmentSet': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/creditassessment/{setId}'.replace('{setId}', setId);

break;
case 'CreateCreditAssessment': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/creditassessment/{setId}/assessment'.replace('{setId}', setId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateNewCreditAssessmentVersion': setId = base.getNodeParameter('setId', 0) as string;
assessmentId = base.getNodeParameter('assessmentId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/creditassessment/{setId}/assessment/{assessmentId}/version'.replace('{setId}', setId).replace('{assessmentId}', assessmentId);

break;
case 'CompleteCreditAssessmentVersion': setId = base.getNodeParameter('setId', 0) as string;
assessmentId = base.getNodeParameter('assessmentId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/creditassessment/{setId}/assessment/{assessmentId}/version/{versionNumber}/complete'.replace('{setId}', setId).replace('{assessmentId}', assessmentId).replace('{versionNumber}', versionNumber);

break;
case 'CreateCreditAsssessmentSnapshot': setId = base.getNodeParameter('setId', 0) as string;
assessmentId = base.getNodeParameter('assessmentId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/creditassessment/{setId}/assessment/{assessmentId}/version/{versionNumber}/snapshot'.replace('{setId}', setId).replace('{assessmentId}', assessmentId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateCreditAssessmentProvider': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/providers';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateCreditAssessmentProvider': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/providers/{providerId}'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateCreditAssessmentProviderEnabled': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/providers/{providerId}/enabled'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateProviderConfiguration': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/providers/{providerId}/configuration'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateMappingConfiguration': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/providers/{providerId}/mappingconfiguration'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateMappingConfiguration': mappingId = base.getNodeParameter('mappingId', 0) as string;
providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/providers/{providerId}/mappingconfiguration/{mappingId}'.replace('{mappingId}', mappingId).replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateAdapterSchema': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/providers/{providerId}/adapterSchema'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateAdapterSchema': providerId = base.getNodeParameter('providerId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/providers/{providerId}/adapterSchema/{id}'.replace('{providerId}', providerId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ProviderTest': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditassessmentcommand/api/providers/{providerId}/test'.replace('{providerId}', providerId);

break;
}

	let request = base.helpers.request(requestOptions);

    // @ts-ignore
    const promisesResponses = await Promise.allSettled([request]);
    let response: any; // tslint:disable-line:no-any
    response = promisesResponses.shift();
    if(response!.status !== 'fulfilled') {
    // throw error;
    console.log(request);
    throw new NodeApiError(base.getNode(), response);
}
    try {
        response = JSON.parse(response.value);
    }
    catch { response = response.value; }

const returnItems: INodeExecutionData[] = [];
returnItems.push({ json: response });

return base.prepareOutputData(returnItems);
}

export {
    FenergoNebulaCreditAssessmentCommandv10Properties,
    ExecuteFenergoNebulaCreditAssessmentCommandv10
}