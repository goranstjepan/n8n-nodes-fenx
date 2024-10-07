import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaProductPolicyQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get requirement sets', value: 'GetAllProductRequirementSets' },{ name: 'Get product requirement set by id', value: 'GetProductRequirementSetById' },{ name: 'Get product requirement set by id and version', value: 'GetProductRequirementSetVersionById' },{ name: 'Get requirement by id', value: 'GetProductRequirementById' },{ name: 'Get jurisdictions', value: 'GetJurisdictions' },{ name: 'Gets summary of data fields from all jurisdictions merged by property name', value: 'GetMergedProductRequirementSetsDataFields' },{ name: 'Evaluate Product Requirements in scope', value: 'EvaluateProductRequirementsInScope' },{ name: 'Evaluate All Product Requirements in scope', value: 'EvaluateAllProductRequirements' },{ name: 'Search Product Requirements', value: 'SearchProductRequirements' },{ name: 'Get product requirements in scope', value: 'GetProductRequirementsInScope' },{ name: 'Get scopingRule sets', value: 'GetAllScopingRuleSets' },{ name: 'Get scoping rule set by id', value: 'GetScopingRuleSetById' },{ name: 'Get scoping rule set by id and version', value: 'GetScopingRuleSetVersionById' },{ name: 'Get active scoping rule sets', value: 'GetActiveScopingRuleSetVersions' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaProductPolicyQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Product requirement set id', displayOptions: { show: { endpoint: [ 'GetProductRequirementSetById' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Product requirement set id', displayOptions: { show: { endpoint: [ 'GetProductRequirementSetVersionById' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Product requirement set version number', displayOptions: { show: { endpoint: [ 'GetProductRequirementSetVersionById' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Product requirement set id', displayOptions: { show: { endpoint: [ 'GetProductRequirementById' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Product requirement set version number', displayOptions: { show: { endpoint: [ 'GetProductRequirementById' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Product requirement id', displayOptions: { show: { endpoint: [ 'GetProductRequirementById' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Scoping rule set id', displayOptions: { show: { endpoint: [ 'GetScopingRuleSetById' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'scoping rule set id', displayOptions: { show: { endpoint: [ 'GetScopingRuleSetVersionById' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'scoping rule set version number', displayOptions: { show: { endpoint: [ 'GetScopingRuleSetVersionById' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "targetEntity": "targetEntity", "entityType": "entityType", "categories": [ "" ], "forceMergeFromRequirementSetVersionId": "forceMergeFromRequirementSetVersionId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetMergedProductRequirementSetsDataFields' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementTypes": [ "" ], "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "targetEntity": "targetEntity", "entityType": "entityType", "categories": [ "" ], "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus", "relationshipTypes": [ "" ] } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] }, "mainEntity": { "dataSource": "dataSource", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "relatedAssets": { "dataSource": "dataSource", "assets": [ { "properties": {} } ] }, "relatedAssociations": { "dataSource": "dataSource", "relatedAssociations": [ { "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } } ] } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateProductRequirementsInScope' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementTypes": [ "" ], "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "targetEntity": "targetEntity", "entityType": "entityType", "categories": [ "" ], "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus", "relationshipTypes": [ "" ] } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] }, "mainEntity": { "dataSource": "dataSource", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "relatedAssets": { "dataSource": "dataSource", "assets": [ { "properties": {} } ] }, "relatedAssociations": { "dataSource": "dataSource", "relatedAssociations": [ { "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } } ] } }, "journeyId": "journeyId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateAllProductRequirements' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "type": "type", "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "category": [ "" ], "entityType": "entityType", "isMandatory": false, "isSensitiveData": false, "isMaterialData": false, "isIndexable": false, "dataField": { "propertyName": "propertyName", "propertyType": "propertyType", "propertyTypeId": "propertyTypeId", "linkChildFieldPropertyName": "linkChildFieldPropertyName", "formulaSchema": { "formulaSetId": "formulaSetId", "versionNumber": 0, "formulaString": "formulaString", "formulaVariables": {} } }, "targetEntity": "targetEntity", "includeConditions": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchProductRequirements' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "type": "type", "name": "name", "category": [ "" ], "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "isMandatory": false, "entityType": "entityType", "isMaterialData": false, "isSensitiveData": false, "dataField": { "propertyName": "propertyName", "propertyType": "propertyType", "propertyTypeId": "propertyTypeId", "linkChildFieldPropertyName": "linkChildFieldPropertyName", "formulaSchema": { "formulaSetId": "formulaSetId", "versionNumber": 0, "formulaString": "formulaString", "formulaVariables": {} } }, "isIndexable": false, "includeConditions": false, "targetEntity": "targetEntity", "disableFilteringForConditionalValues": false, "enableBasicDataRequirementsFiltering": false, "disableDeduplication": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetProductRequirementsInScope' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } },{ displayName: 'includeRequirements', name: 'includeRequirements', type: 'string', required: true, default: '', description: 'Flag to include product requirements in the response.', displayOptions: { show: { endpoint: [ 'GetAllProductRequirementSets' ], domain: [ 'FenergoNebulaProductPolicyQueryv10' ] } } }
];

async function ExecuteFenergoNebulaProductPolicyQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let setId=''; let versionNumber=''; let id='';
switch(endpoint){ case 'GetAllProductRequirementSets': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirement-set';
requestOptions.qs = { includeRequirements: base.getNodeParameter('includeRequirements', 0) as string };
break;
case 'GetProductRequirementSetById': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirement-set/{setId}'.replace('{setId}', setId);

break;
case 'GetProductRequirementSetVersionById': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirement-set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'GetProductRequirementById': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirement-set/{setId}/version/{versionNumber}/field/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'GetJurisdictions': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirement-set/jurisdictions';

break;
case 'GetMergedProductRequirementSetsDataFields': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirement-set/merged-data-fields';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EvaluateProductRequirementsInScope': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirements-in-scope/evaluate';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EvaluateAllProductRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirements-in-scope/evaluate-all-requirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SearchProductRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirements-in-scope/search';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetProductRequirementsInScope': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/product-requirements-in-scope';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAllScopingRuleSets': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/scoping-rule-set';

break;
case 'GetScopingRuleSetById': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/scoping-rule-set/{setId}'.replace('{setId}', setId);

break;
case 'GetScopingRuleSetVersionById': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/scoping-rule-set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'GetActiveScopingRuleSetVersions': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/productpolicyquery/api/scoping-rule-set/activeVersions';

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
    FenergoNebulaProductPolicyQueryv10Properties,
    ExecuteFenergoNebulaProductPolicyQueryv10
}
