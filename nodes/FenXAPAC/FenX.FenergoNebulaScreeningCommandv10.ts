import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaScreeningCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create a new screening batch to screen one or more entities', value: 'CreateBatch' },{ name: 'Complete an existing screening batch', value: 'CompleteBatch' },{ name: 'Update a list of matches in a batch', value: 'UpdateMatches' },{ name: 'Update the materiality assessment of an Entity"s related party in ongoing screening', value: 'UpdateMaterialityAssessment' },{ name: 'Enables or disables ongoing screening for a list of entities', value: 'OngoingScreening' },{ name: 'Creates new Screening entities in bulk', value: 'CreateEntities' },{ name: 'Updates an existing Screening entity with the data supplied in the request body', value: 'UpdateEntity' },{ name: 'Generate report with all entities that have ongoing screening enabled for some provider', value: 'GetEntitiesSubscribedToOgs' },{ name: 'Adds new scoped entities to a given Journey and Process', value: 'AddScopedEntities' },{ name: 'Updates the entities that are in scope for Screening', value: 'UpdateScopedEntities' },{ name: 'Create scoping rule set', value: 'CreateScopingRuleSet' },{ name: 'Create scoping rule set version', value: 'CreateScopingRuleSetVersion' },{ name: 'Delete scoping rule set and all its versions', value: 'DeleteScopingRuleSet' },{ name: 'Update scoping rule set version', value: 'UpdateScopingRuleSetVersion' },{ name: 'Delete scoping rule set version', value: 'DeleteScopingRuleSetVersion' },{ name: 'Clone scoping rule set version', value: 'CloneScopingRuleSetVersion' },{ name: 'Submit scoping rule set version for approval', value: 'SubmitScopingRuleSetVersion' },{ name: 'Sign scoping rule set version', value: 'SignScopingRuleSetVersion' },{ name: 'Archive scoping rule set version', value: 'ArchiveScopingRuleSetVersion' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaScreeningCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the existing batch to be completed', displayOptions: { show: { endpoint: [ 'CompleteBatch' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the batch', displayOptions: { show: { endpoint: [ 'UpdateMatches' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the ongoing screening batch', displayOptions: { show: { endpoint: [ 'UpdateMaterialityAssessment' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The ID of the entity in the batch', displayOptions: { show: { endpoint: [ 'UpdateMaterialityAssessment' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Screening ID of the entity that is going to be updated', displayOptions: { show: { endpoint: [ 'UpdateEntity' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set id', displayOptions: { show: { endpoint: [ 'CreateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'DeleteScopingRuleSet' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set id', displayOptions: { show: { endpoint: [ 'UpdateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'DeleteScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'CloneScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to clone', displayOptions: { show: { endpoint: [ 'CloneScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'SubmitScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'SignScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set Id', displayOptions: { show: { endpoint: [ 'ArchiveScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entities": [ { "legalEntityId": "legalEntityId", "searchCriteria": { "fullName": "fullName", "firstName": "firstName", "middleName": "middleName", "lastName": "lastName", "dateOfBirth": "dateOfBirth", "gender": "gender", "legalEntityName": "legalEntityName", "type": "type", "address": { "addressLine1": "addressLine1", "addressLine2": "addressLine2", "city": "city", "postalCode": "postalCode", "country": "country", "countryISO2": "countryISO2", "countryISO3": "countryISO3", "stateProvince": "stateProvince", "type": "type" }, "idNumber": "idNumber", "phoneNumber": "phoneNumber", "emailAddress": "emailAddress", "nationality": "nationality", "countryOfResidence": "countryOfResidence", "placeOfBirth": "placeOfBirth", "placeOfBirthISO2": "placeOfBirthISO2", "placeOfBirthISO3": "placeOfBirthISO3", "citizenship": "citizenship", "citizenshipISO2": "citizenshipISO2", "citizenshipISO3": "citizenshipISO3", "registeredCountry": "registeredCountry", "registeredCountryISO2": "registeredCountryISO2", "registeredCountryISO3": "registeredCountryISO3", "subtype": "subtype", "uniqueId": "uniqueId", "otherInformation": "otherInformation" } } ], "journeyId": "journeyId", "processId": "processId", "providers": [ { "providerId": "providerId", "configurationSetId": "configurationSetId" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateBatch' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": [ { "entityId": "entityId", "matches": [ { "matchId": "matchId", "status": "status", "reason": "reason", "comments": "comments" } ] } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateMatches' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "relatedPartyEntityId": "relatedPartyEntityId", "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateMaterialityAssessment' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "enable": false, "entities": [ "" ], "providers": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'OngoingScreening' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": [ { "legalEntityId": "legalEntityId", "searchCriteria": { "fullName": "fullName", "firstName": "firstName", "middleName": "middleName", "lastName": "lastName", "dateOfBirth": "dateOfBirth", "gender": "gender", "legalEntityName": "legalEntityName", "type": "type", "address": { "addressLine1": "addressLine1", "addressLine2": "addressLine2", "city": "city", "postalCode": "postalCode", "country": "country", "countryISO2": "countryISO2", "countryISO3": "countryISO3", "stateProvince": "stateProvince", "type": "type" }, "idNumber": "idNumber", "phoneNumber": "phoneNumber", "emailAddress": "emailAddress", "nationality": "nationality", "countryOfResidence": "countryOfResidence", "placeOfBirth": "placeOfBirth", "placeOfBirthISO2": "placeOfBirthISO2", "placeOfBirthISO3": "placeOfBirthISO3", "citizenship": "citizenship", "citizenshipISO2": "citizenshipISO2", "citizenshipISO3": "citizenshipISO3", "registeredCountry": "registeredCountry", "registeredCountryISO2": "registeredCountryISO2", "registeredCountryISO3": "registeredCountryISO3", "subtype": "subtype", "uniqueId": "uniqueId", "otherInformation": "otherInformation" } } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateEntities' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "legalEntityId": "legalEntityId", "searchCriteria": { "fullName": "fullName", "firstName": "firstName", "middleName": "middleName", "lastName": "lastName", "dateOfBirth": "dateOfBirth", "gender": "gender", "legalEntityName": "legalEntityName", "type": "type", "address": { "addressLine1": "addressLine1", "addressLine2": "addressLine2", "city": "city", "postalCode": "postalCode", "country": "country", "countryISO2": "countryISO2", "countryISO3": "countryISO3", "stateProvince": "stateProvince", "type": "type" }, "idNumber": "idNumber", "phoneNumber": "phoneNumber", "emailAddress": "emailAddress", "nationality": "nationality", "countryOfResidence": "countryOfResidence", "placeOfBirth": "placeOfBirth", "placeOfBirthISO2": "placeOfBirthISO2", "placeOfBirthISO3": "placeOfBirthISO3", "citizenship": "citizenship", "citizenshipISO2": "citizenshipISO2", "citizenshipISO3": "citizenshipISO3", "registeredCountry": "registeredCountry", "registeredCountryISO2": "registeredCountryISO2", "registeredCountryISO3": "registeredCountryISO3", "subtype": "subtype", "uniqueId": "uniqueId", "otherInformation": "otherInformation" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEntity' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "processId": "processId", "scopedEntities": [ { "legalEntityId": "legalEntityId", "isInScopeByManualOverride": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddScopedEntities' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": [ { "id": "id", "isInScopeByManualOverride": false } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateScopedEntities' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "jurisdiction": "jurisdiction", "name": "name", "effectiveFrom": "2025-01-21T08:34:29.0247396+00:00", "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateScopingRuleSet' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "effectiveFrom": "2025-01-21T08:34:29.0248896+00:00", "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "effectiveFrom": "2025-01-21T08:34:29.0251448+00:00", "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ], "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "jurisdiction": "jurisdiction" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloneScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:29.0256463+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignScopingRuleSetVersion' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } },{ displayName: 'includeSearchCriteria', name: 'includeSearchCriteria', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetEntitiesSubscribedToOgs' ], domain: [ 'FenergoNebulaScreeningCommandv10' ] } } }
];

async function ExecuteFenergoNebulaScreeningCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let entityId=''; let scopingRuleSetId=''; let versionNumber='';
switch(endpoint){ case 'CreateBatch': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/batch';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CompleteBatch': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/batch/{id}/complete'.replace('{id}', id);

break;
case 'UpdateMatches': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/batch/{id}/matches'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateMaterialityAssessment': id = base.getNodeParameter('id', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/batch/{id}/entity/{entityId}/updatemateriality'.replace('{id}', id).replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'OngoingScreening': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/entity/ongoingscreening';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateEntities': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/entity';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateEntity': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/entity/{entityId}'.replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntitiesSubscribedToOgs': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/entity/ongoingscreening/generate-report';
requestOptions.qs = { includeSearchCriteria: base.getNodeParameter('includeSearchCriteria', 0) as string };
break;
case 'AddScopedEntities': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoped-entity';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateScopedEntities': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoped-entity';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateScopingRuleSet': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoping-rule-set';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoping-rule-set/{scopingRuleSetId}'.replace('{scopingRuleSetId}', scopingRuleSetId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteScopingRuleSet': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoping-rule-set/{scopingRuleSetId}'.replace('{scopingRuleSetId}', scopingRuleSetId);

break;
case 'UpdateScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

break;
case 'CloneScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}/clone'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SubmitScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}/submit-for-approval'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

break;
case 'SignScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}/sign'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveScopingRuleSetVersion': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/screeningcommand/api/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}/archive'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

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
    FenergoNebulaScreeningCommandv10Properties,
    ExecuteFenergoNebulaScreeningCommandv10
}
