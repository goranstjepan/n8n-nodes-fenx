import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaExternalDataCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Save Data Aggregation Results', value: 'SaveDataAggregationResults' },{ name: 'Save Provider status', value: 'SaveProviderStatusV2' },{ name: 'Save enabled entity type status', value: 'SaveEntityTypeStatus' },{ name: 'Save External Data Provider Configuration', value: 'SaveProviderConfigurationV2' },{ name: 'Add custom provider', value: 'AddCustomProviderV2' },{ name: 'Update custom provider', value: 'UpdateCustomProviderV2' },{ name: 'Delete custom provider', value: 'DeleteCustomProviderV2' },{ name: 'Create flow provide', value: 'CreateFlowProvider' },{ name: 'Update flow provider', value: 'UpdateFlowProvider' },{ name: 'Delete flow provider', value: 'DeleteFlowProvider' },{ name: 'Create new document retrieval request', value: 'Createnewdocumentretrievalrequest' },{ name: 'Reject/Reset documents status', value: 'Reject/Resetdocumentsstatus' },{ name: 'Create new import request', value: 'Createnewimportrequest' },{ name: 'Save Associated Parties Deduplicate', value: 'SaveAssociatedPartiesDeduplicate' },{ name: 'Create or replace mapping', value: 'PutMapping' },{ name: 'Delete Mappings', value: 'DeleteMapping' },{ name: 'Create or replace Operation Mapping', value: 'PutOperationMapping' },{ name: 'Unsubscribe from ongoing monitoring', value: 'UnsubscribeFromOngoingMonitoring' },{ name: 'Publish data to downstream system', value: 'Publishdatatodownstreamsystem' },{ name: 'Create new search request', value: 'Createnewsearchrequest' },{ name: 'Create Ultimate Beneficial Owner discovery request', value: 'CreateUltimateBeneficialOwnerdiscoveryrequest' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaExternalDataCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'ID of External Data Provider', displayOptions: { show: { endpoint: [ 'SaveProviderStatusV2' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'ID of External Data Provider', displayOptions: { show: { endpoint: [ 'SaveEntityTypeStatus' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'ID of External Data Provider', displayOptions: { show: { endpoint: [ 'SaveProviderConfigurationV2' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'ID of External Data Provider', displayOptions: { show: { endpoint: [ 'UpdateCustomProviderV2' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'ID of External Data Provider', displayOptions: { show: { endpoint: [ 'DeleteCustomProviderV2' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'ID of External Data Provider', displayOptions: { show: { endpoint: [ 'UpdateFlowProvider' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'ID of External Data Provider', displayOptions: { show: { endpoint: [ 'DeleteFlowProvider' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Provider ID', displayOptions: { show: { endpoint: [ 'PutMapping' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Provider Id where mapping will be deleted', displayOptions: { show: { endpoint: [ 'DeleteMapping' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'Provider ID', displayOptions: { show: { endpoint: [ 'PutOperationMapping' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "getId": "getId", "taskId": "taskId", "profilesIds": [ "" ], "dataAggregationFieldList": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveDataAggregationResults' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": false }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveProviderStatusV2' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityType": "entityType", "isActive": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveEntityTypeStatus' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "version": 0, "skipPolicyValidation": false, "enabledEntityType": [ "" ], "configuration": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveProviderConfigurationV2' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "url": "url", "authenticationKey": "authenticationKey", "encryptionKey": "encryptionKey", "skipPolicyValidation": false, "ongoingMonitoringEnabled": false, "documentSupportEnabled": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddCustomProviderV2' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "url": "url", "authenticationKey": "authenticationKey", "encryptionKey": "encryptionKey", "skipPolicyValidation": false, "ongoingMonitoringEnabled": false, "documentSupportEnabled": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateCustomProviderV2' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "endpointsConfiguration": [ { "requestType": "requestType", "flowId": "flowId" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateFlowProvider' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "endpointsConfiguration": [ { "requestType": "requestType", "flowId": "flowId" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateFlowProvider' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "importRequestId": "importRequestId", "documentData": [ { "documentId": "documentId", "name": "name", "type": "type", "status": "status", "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "documentCriteria": null } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Createnewdocumentretrievalrequest' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "importRequestId": "importRequestId", "documentStatuses": [ { "documentId": "documentId", "status": "Rejected" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Reject/Resetdocumentsstatus' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "externalId": "externalId", "journeyId": "journeyId", "taskId": "taskId", "providerId": "providerId", "entityName": "entityName", "additionalRequestData": null, "entityType": "Company" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Createnewimportrequest' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "importId": "importId", "associatedPartyDeduplicationList": [ { "providerId": "providerId", "externalId": "externalId", "deduplicationState": "Rejected", "linkedLegalEntityId": "linkedLegalEntityId", "deduplicationRejectMethod": "Manual", "duplicationSearchResults": [ { "id": "id", "type": "type", "policyJurisdiction": "policyJurisdiction", "properties": {} } ] } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveAssociatedPartiesDeduplicate' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "operationsMappings": [ { "operation": "Search", "operationType": "Request", "entityType": "Company", "maps": [ { "name": "name", "map": { "mappings": [ { "source": "source", "target": "target", "type": 1, "loVMapName": "loVMapName", "toArray": false, "displaySource": false, "constantValue": "constantValue", "objectToTextProperties": { "separator": "separator", "fields": [ { "name": "name", "order": 0, "isLoV": false, "loVMapName": "loVMapName" } ], "selector": { "fieldName": "fieldName", "value": "value" } }, "mappings": [ { "source": "source", "target": "target", "type": 1, "loVMapName": "loVMapName", "toArray": false, "displaySource": false, "constantValue": "constantValue", "objectToTextProperties": { "separator": "separator", "fields": [ { "name": "name", "order": 0, "isLoV": false, "loVMapName": "loVMapName" } ], "selector": { "fieldName": "fieldName", "value": "value" } }, "mappings": [ { "source": "source", "target": "target", "type": 1, "loVMapName": "loVMapName", "toArray": false, "displaySource": false, "constantValue": "constantValue", "objectToTextProperties": { "separator": "separator", "fields": [ { "name": "name", "order": 0, "isLoV": false, "loVMapName": "loVMapName" } ], "selector": { "fieldName": "fieldName", "value": "value" } }, "mappings": [] } ] } ] } ], "loVMaps": [ { "name": "name", "map": {} } ], "loVArrayMaps": [ { "name": "name", "map": {} } ] } } ] } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'PutMapping' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "operation": "Search", "operationType": "Request", "entityType": "Company", "maps": [ { "name": "name", "map": { "mappings": [ { "source": "source", "target": "target", "type": 1, "loVMapName": "loVMapName", "toArray": false, "displaySource": false, "constantValue": "constantValue", "objectToTextProperties": { "separator": "separator", "fields": [ { "name": "name", "order": 0, "isLoV": false, "loVMapName": "loVMapName" } ], "selector": { "fieldName": "fieldName", "value": "value" } }, "mappings": [ { "source": "source", "target": "target", "type": 1, "loVMapName": "loVMapName", "toArray": false, "displaySource": false, "constantValue": "constantValue", "objectToTextProperties": { "separator": "separator", "fields": [ { "name": "name", "order": 0, "isLoV": false, "loVMapName": "loVMapName" } ], "selector": { "fieldName": "fieldName", "value": "value" } }, "mappings": [ { "source": "source", "target": "target", "type": 1, "loVMapName": "loVMapName", "toArray": false, "displaySource": false, "constantValue": "constantValue", "objectToTextProperties": { "separator": "separator", "fields": [ { "name": "name", "order": 0, "isLoV": false, "loVMapName": "loVMapName" } ], "selector": { "fieldName": "fieldName", "value": "value" } }, "mappings": [] } ] } ] } ], "loVMaps": [ { "name": "name", "map": {} } ], "loVArrayMaps": [ { "name": "name", "map": {} } ] } } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'PutOperationMapping' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "subscriptionId": "subscriptionId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UnsubscribeFromOngoingMonitoring' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "tenant": "tenant", "journeyId": "journeyId", "searchId": "searchId", "externalId": "externalId", "importId": "importId", "entityId": "entityId", "externalDataProviderId": "externalDataProviderId", "draftId": "draftId", "jurisdictions": [ { "jurisdiction": "jurisdiction", "jurisdictionVersion": "jurisdictionVersion" } ], "ongoingMonitoring": false, "ongoingMonitoringData": {}, "relatedPartiesBusinessCategory": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Publishdatatodownstreamsystem' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "searchCriteria": null, "journeyId": "journeyId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Createnewsearchrequest' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "importRequestId": "importRequestId", "entityId": "entityId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateUltimateBeneficialOwnerdiscoveryrequest' ], domain: [ 'FenergoNebulaExternalDataCommandv10' ] } } }
];

async function ExecuteFenergoNebulaExternalDataCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let providerId='';
switch(endpoint){ case 'SaveDataAggregationResults': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/aggregation/saveDataAggregationResults';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SaveProviderStatusV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/providersconfiguration/provider/{providerId}/status'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SaveEntityTypeStatus': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/providersconfiguration/provider/{providerId}/mapping/status'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SaveProviderConfigurationV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/providersconfiguration/provider/{providerId}/configuration'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'AddCustomProviderV2': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/providersconfiguration/customProvider';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateCustomProviderV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/providersconfiguration/customProvider/{providerId}'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteCustomProviderV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/providersconfiguration/customProvider/{providerId}'.replace('{providerId}', providerId);

break;
case 'CreateFlowProvider': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/providersconfiguration/flowProvider';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateFlowProvider': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/providersconfiguration/flowProvider/{providerId}'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteFlowProvider': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/providersconfiguration/flowProvider/{providerId}'.replace('{providerId}', providerId);

break;
case 'Createnewdocumentretrievalrequest': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/document';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'Reject/Resetdocumentsstatus': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/document/saveDocumentsStatuses';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'Createnewimportrequest': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/import';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SaveAssociatedPartiesDeduplicate': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/import/saveDeduplicationResults';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'PutMapping': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/mapping/provider/{providerId}'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteMapping': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/mapping/provider/{providerId}'.replace('{providerId}', providerId);

break;
case 'PutOperationMapping': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/mapping/provider/{providerId}/operation'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UnsubscribeFromOngoingMonitoring': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/ongoingmonitoring/unsubscribe';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'Publishdatatodownstreamsystem': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/publish';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'Createnewsearchrequest': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/search';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateUltimateBeneficialOwnerdiscoveryrequest': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/externaldatacommand/api/ubo';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
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
    FenergoNebulaExternalDataCommandv10Properties,
    ExecuteFenergoNebulaExternalDataCommandv10
}
