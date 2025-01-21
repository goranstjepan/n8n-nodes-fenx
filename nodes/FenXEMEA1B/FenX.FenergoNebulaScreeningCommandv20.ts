import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaScreeningCommandv20Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create a new screening batch to screen one or more entities', value: 'CreateBatch' },{ name: 'Complete an existing screening batch', value: 'CompleteBatch' },{ name: 'Update a list of matches in a batch', value: 'UpdateMatches' },{ name: 'Update the materiality assessment of an Entity"s related party in ongoing screening', value: 'UpdateMaterialityAssessment' },{ name: 'Create a new Screening Configuration', value: 'CreateConfigurationV2' },{ name: 'Update part of an existing Screening Configuration', value: 'PatchConfigurationV2' },{ name: 'Add a non "Out Of The Box" Provider to an Existing Configuration', value: 'AddProviderV2' },{ name: 'Update part of the Provider Configuration inside a specific provider', value: 'PatchProviderV2' },{ name: 'Delete a Provider from an Existing Configuration', value: 'DeleteProviderV2' },{ name: 'Update the Provider Configuration Additional Settings Schema inside a specific provider', value: 'UpdateProviderSettingsSchemaV2' },{ name: 'Add a Configuration Set to an Existing Provider Configuration', value: 'AddConfigurationSetV2' },{ name: 'Update part of a Configuration Set from an Existing Provider Configuration', value: 'PatchConfigurationSetV2' },{ name: 'Delete a Configuration Set in a Provider from an Existing Configuration', value: 'DeleteConfigurationSetV2' },{ name: 'Test provider credentials and connection', value: 'TestProviderV2' },{ name: 'Enables or disables ongoing screening for a list of entities', value: 'OngoingScreening' },{ name: 'Creates new Screening entities in bulk', value: 'CreateEntities' },{ name: 'Updates an existing Screening entity with the data supplied in the request body', value: 'UpdateEntity' },{ name: 'Generate report with all entities that have ongoing screening enabled for some provider', value: 'GetEntitiesSubscribedToOgs' },{ name: 'Adds new scoped entities to a given Journey and Process', value: 'AddScopedEntities' },{ name: 'Updates the entities that are in scope for Screening', value: 'UpdateScopedEntities' },{ name: 'Create scoping rule set', value: 'CreateScopingRuleSet' },{ name: 'Create scoping rule set version', value: 'CreateScopingRuleSetVersion' },{ name: 'Delete scoping rule set and all its versions', value: 'DeleteScopingRuleSet' },{ name: 'Update scoping rule set version', value: 'UpdateScopingRuleSetVersion' },{ name: 'Delete scoping rule set version', value: 'DeleteScopingRuleSetVersion' },{ name: 'Clone scoping rule set version', value: 'CloneScopingRuleSetVersion' },{ name: 'Submit scoping rule set version for approval', value: 'SubmitScopingRuleSetVersion' },{ name: 'Sign scoping rule set version', value: 'SignScopingRuleSetVersion' },{ name: 'Archive scoping rule set version', value: 'ArchiveScopingRuleSetVersion' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaScreeningCommandv20',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the existing batch to be completed', displayOptions: { show: { endpoint: [ 'CompleteBatch' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the batch', displayOptions: { show: { endpoint: [ 'UpdateMatches' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the ongoing screening batch', displayOptions: { show: { endpoint: [ 'UpdateMaterialityAssessment' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The ID of the entity in the batch', displayOptions: { show: { endpoint: [ 'UpdateMaterialityAssessment' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Id of the provider', displayOptions: { show: { endpoint: [ 'PatchProviderV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Id of provider to be deleted from configuration', displayOptions: { show: { endpoint: [ 'DeleteProviderV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Id of the provider', displayOptions: { show: { endpoint: [ 'UpdateProviderSettingsSchemaV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Id of the provider', displayOptions: { show: { endpoint: [ 'AddConfigurationSetV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Id of the provider', displayOptions: { show: { endpoint: [ 'PatchConfigurationSetV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'configurationSetId', name: 'configurationSetId', type: 'string', required: true, default: '', description: 'Id of the configuration set', displayOptions: { show: { endpoint: [ 'PatchConfigurationSetV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Id of provider which contains the configuration set to be deleted from configuration', displayOptions: { show: { endpoint: [ 'DeleteConfigurationSetV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'configurationSetId', name: 'configurationSetId', type: 'string', required: true, default: '', description: 'Id of the configuration set', displayOptions: { show: { endpoint: [ 'DeleteConfigurationSetV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Id of the provider', displayOptions: { show: { endpoint: [ 'TestProviderV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Screening ID of the entity that is going to be updated', displayOptions: { show: { endpoint: [ 'UpdateEntity' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set id', displayOptions: { show: { endpoint: [ 'CreateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'DeleteScopingRuleSet' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set id', displayOptions: { show: { endpoint: [ 'UpdateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'DeleteScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'CloneScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to clone', displayOptions: { show: { endpoint: [ 'CloneScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'SubmitScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'SignScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'ArchiveScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entities": [ { "legalEntityId": "legalEntityId", "searchCriteria": { "fullName": "fullName", "firstName": "firstName", "middleName": "middleName", "lastName": "lastName", "dateOfBirth": "dateOfBirth", "gender": "gender", "legalEntityName": "legalEntityName", "type": "type", "address": { "addressLine1": "addressLine1", "addressLine2": "addressLine2", "city": "city", "postalCode": "postalCode", "country": "country", "countryISO2": "countryISO2", "countryISO3": "countryISO3", "stateProvince": "stateProvince", "type": "type" }, "idNumber": "idNumber", "phoneNumber": "phoneNumber", "emailAddress": "emailAddress", "nationality": "nationality", "countryOfResidence": "countryOfResidence", "placeOfBirth": "placeOfBirth", "placeOfBirthISO2": "placeOfBirthISO2", "placeOfBirthISO3": "placeOfBirthISO3", "citizenship": "citizenship", "citizenshipISO2": "citizenshipISO2", "citizenshipISO3": "citizenshipISO3", "registeredCountry": "registeredCountry", "registeredCountryISO2": "registeredCountryISO2", "registeredCountryISO3": "registeredCountryISO3", "subtype": "subtype", "uniqueId": "uniqueId", "otherInformation": "otherInformation" } } ], "journeyId": "journeyId", "processId": "processId", "providers": [ { "providerId": "providerId", "configurationSetId": "configurationSetId" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateBatch' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": [ { "entityId": "entityId", "matches": [ { "matchId": "matchId", "status": "status", "reason": "reason", "comments": "comments" } ] } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateMatches' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "relatedPartyEntityId": "relatedPartyEntityId", "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateMaterialityAssessment' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "commentsMandatory": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'PatchConfigurationV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "name": "name", "adapterConfiguration": { "url": "url", "authenticationActive": false, "authenticationKey": { "key": "key" }, "encryptionKey": { "key": "key" }, "ongoingScreeningConfiguration": { "active": false } }, "secondaryIdentifiers": { "firstName": false, "middleName": false, "lastName": false, "fullName": false, "dateOfBirth": false, "gender": false, "address": { "addressLine1": false, "addressLine2": false, "city": false, "postalCode": false, "country": false, "stateProvince": false, "type": false }, "nationality": false, "placeOfBirth": false, "citizenship": false, "registeredCountry": false, "uniqueId": false, "otherInformation": false }, "additionalSettingsSchema": [ { "fieldId": "fieldId", "name": "name", "type": "type", "enabledBy": "enabledBy", "mandatory": false } ], "defaultConfigurationSet": { "name": "name", "description": "description", "additionalSettings": [ { "fieldId": "fieldId", "value": "value" } ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddProviderV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "adapterConfiguration": { "url": "url", "authenticationActive": false, "authenticationKey": { "key": "key" }, "encryptionKey": { "key": "key" }, "credentialProperties": [ { "fieldId": "fieldId", "value": "value" } ], "ongoingScreeningConfiguration": { "active": false, "ongoingScreeningProperties": [ { "fieldId": "fieldId", "value": "value" } ] } }, "secondaryIdentifiers": { "firstName": false, "middleName": false, "lastName": false, "fullName": false, "dateOfBirth": false, "gender": false, "address": { "addressLine1": false, "addressLine2": false, "city": false, "postalCode": false, "country": false, "stateProvince": false, "type": false }, "nationality": false, "placeOfBirth": false, "citizenship": false, "registeredCountry": false, "uniqueId": false, "otherInformation": false }, "defaultConfigurationSetId": "defaultConfigurationSetId", "active": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'PatchProviderV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "additionalSettingsSchema": [ { "fieldId": "fieldId", "name": "name", "type": "type", "enabledBy": "enabledBy", "mandatory": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateProviderSettingsSchemaV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "description": "description", "additionalSettings": [ { "fieldId": "fieldId", "value": "value" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddConfigurationSetV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "description": "description", "additionalSettings": [ { "fieldId": "fieldId", "value": "value" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'PatchConfigurationSetV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "enable": false, "entities": [ "" ], "providers": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'OngoingScreening' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": [ { "legalEntityId": "legalEntityId", "searchCriteria": { "fullName": "fullName", "firstName": "firstName", "middleName": "middleName", "lastName": "lastName", "dateOfBirth": "dateOfBirth", "gender": "gender", "legalEntityName": "legalEntityName", "type": "type", "address": { "addressLine1": "addressLine1", "addressLine2": "addressLine2", "city": "city", "postalCode": "postalCode", "country": "country", "countryISO2": "countryISO2", "countryISO3": "countryISO3", "stateProvince": "stateProvince", "type": "type" }, "idNumber": "idNumber", "phoneNumber": "phoneNumber", "emailAddress": "emailAddress", "nationality": "nationality", "countryOfResidence": "countryOfResidence", "placeOfBirth": "placeOfBirth", "placeOfBirthISO2": "placeOfBirthISO2", "placeOfBirthISO3": "placeOfBirthISO3", "citizenship": "citizenship", "citizenshipISO2": "citizenshipISO2", "citizenshipISO3": "citizenshipISO3", "registeredCountry": "registeredCountry", "registeredCountryISO2": "registeredCountryISO2", "registeredCountryISO3": "registeredCountryISO3", "subtype": "subtype", "uniqueId": "uniqueId", "otherInformation": "otherInformation" } } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateEntities' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "legalEntityId": "legalEntityId", "searchCriteria": { "fullName": "fullName", "firstName": "firstName", "middleName": "middleName", "lastName": "lastName", "dateOfBirth": "dateOfBirth", "gender": "gender", "legalEntityName": "legalEntityName", "type": "type", "address": { "addressLine1": "addressLine1", "addressLine2": "addressLine2", "city": "city", "postalCode": "postalCode", "country": "country", "countryISO2": "countryISO2", "countryISO3": "countryISO3", "stateProvince": "stateProvince", "type": "type" }, "idNumber": "idNumber", "phoneNumber": "phoneNumber", "emailAddress": "emailAddress", "nationality": "nationality", "countryOfResidence": "countryOfResidence", "placeOfBirth": "placeOfBirth", "placeOfBirthISO2": "placeOfBirthISO2", "placeOfBirthISO3": "placeOfBirthISO3", "citizenship": "citizenship", "citizenshipISO2": "citizenshipISO2", "citizenshipISO3": "citizenshipISO3", "registeredCountry": "registeredCountry", "registeredCountryISO2": "registeredCountryISO2", "registeredCountryISO3": "registeredCountryISO3", "subtype": "subtype", "uniqueId": "uniqueId", "otherInformation": "otherInformation" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEntity' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "processId": "processId", "scopedEntities": [ { "legalEntityId": "legalEntityId", "isInScopeByManualOverride": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddScopedEntities' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": [ { "id": "id", "isInScopeByManualOverride": false } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateScopedEntities' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "jurisdiction": "jurisdiction", "name": "name", "effectiveFrom": "2025-01-21T08:34:29.0061416+00:00", "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateScopingRuleSet' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "effectiveFrom": "2025-01-21T08:34:29.0062870+00:00", "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "effectiveFrom": "2025-01-21T08:34:29.0065063+00:00", "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ], "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "jurisdiction": "jurisdiction" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloneScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:29.0069838+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'configurationSetId', name: 'configurationSetId', type: 'string', required: true, default: '', description: 'Id of the configurationSet that will be used to do the test request to the adapter.            If its not provided, the default configuration set will be used', displayOptions: { show: { endpoint: [ 'TestProviderV2' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } },{ displayName: 'includeSearchCriteria', name: 'includeSearchCriteria', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetEntitiesSubscribedToOgs' ], domain: [ 'FenergoNebulaScreeningCommandv20' ] } } }
];

async function ExecuteFenergoNebulaScreeningCommandv20(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let entityId=''; let providerId=''; let configurationSetId=''; let scopingRuleSetId=''; let versionNumber='';
switch(endpoint){ case 'CreateBatch': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/batch';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CompleteBatch': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/batch/{id}/complete'.replace('{id}', id);

break;
case 'UpdateMatches': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/batch/{id}/matches'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateMaterialityAssessment': id = base.getNodeParameter('id', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/batch/{id}/entity/{entityId}/updatemateriality'.replace('{id}', id).replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateConfigurationV2': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration';

break;
case 'PatchConfigurationV2': 
requestOptions.method = 'PATCH';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'AddProviderV2': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration/provider';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'PatchProviderV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PATCH';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration/provider/{providerId}'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteProviderV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration/provider/{providerId}'.replace('{providerId}', providerId);

break;
case 'UpdateProviderSettingsSchemaV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration/provider/{providerId}/settings-schema'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'AddConfigurationSetV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration/provider/{providerId}/configuration-set'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'PatchConfigurationSetV2': providerId = base.getNodeParameter('providerId', 0) as string;
configurationSetId = base.getNodeParameter('configurationSetId', 0) as string;
requestOptions.method = 'PATCH';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration/provider/{providerId}/configuration-set/{configurationSetId}'.replace('{providerId}', providerId).replace('{configurationSetId}', configurationSetId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteConfigurationSetV2': providerId = base.getNodeParameter('providerId', 0) as string;
configurationSetId = base.getNodeParameter('configurationSetId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration/provider/{providerId}/configuration-set/{configurationSetId}'.replace('{providerId}', providerId).replace('{configurationSetId}', configurationSetId);

break;
case 'TestProviderV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/configuration/provider/{providerId}/test'.replace('{providerId}', providerId);
requestOptions.qs = { configurationSetId: base.getNodeParameter('configurationSetId', 0) as string };
break;
case 'OngoingScreening': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/entity/ongoingscreening';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateEntities': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/entity';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateEntity': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/entity/{entityId}'.replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntitiesSubscribedToOgs': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/entity/ongoingscreening/generate-report';
requestOptions.qs = { includeSearchCriteria: base.getNodeParameter('includeSearchCriteria', 0) as string };
break;
case 'AddScopedEntities': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoped-entity';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateScopedEntities': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoped-entity';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateScopingRuleSet': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoping-rule-set';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoping-rule-set/{scopingRuleSetId}'.replace('{scopingRuleSetId}', scopingRuleSetId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteScopingRuleSet': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoping-rule-set/{scopingRuleSetId}'.replace('{scopingRuleSetId}', scopingRuleSetId);

break;
case 'UpdateScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

break;
case 'CloneScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}/clone'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SubmitScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}/submit-for-approval'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

break;
case 'SignScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}/sign'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/screeningcommand/api/v2/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}/archive'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

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
    FenergoNebulaScreeningCommandv20Properties,
    ExecuteFenergoNebulaScreeningCommandv20
}
