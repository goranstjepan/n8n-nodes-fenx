import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaExternalDataQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get aggregated company data by import request id', value: 'GetAggregatedDataByTaskId' },{ name: 'Get External Data Providers Configuration', value: 'GetConfigurationV2' },{ name: 'Get External Data provider configuration', value: 'GetProviderConfigurationV2' },{ name: 'Get custom provider configuration', value: 'GetCustomProviderConfigurationV2' },{ name: 'Get Adapter Schema for provider', value: 'GetAdapterSchema' },{ name: 'Method to get a signed URL from S3', value: 'MethodtogetasignedURLfromS3' },{ name: 'Get imported company data by import request id', value: 'GetImportedDataById' },{ name: 'Get imported company data by journey id and external id', value: 'GetImportedDataByJourneyIdAndExternalId' },{ name: 'Get external id of last saved import by journey id', value: 'GetImportIdentifierOfLastSavedImportByJourneyId' },{ name: 'Get provider mapping', value: 'GetProviderMapping' },{ name: 'Get mapping configuration', value: 'GetMappingConfiguration' },{ name: 'Get all ongoing monitoring subscriptions for an entity', value: 'GetSubscriptionsByEntityId' },{ name: 'Get search results by search request id', value: 'GetSearchResultsById' },{ name: 'Get search results by journey id', value: 'GetSearchResultsByJourneyId' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaExternalDataQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'The ID of journey task', displayOptions: { show: { endpoint: [ 'GetAggregatedDataByTaskId' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The ID of provider', displayOptions: { show: { endpoint: [ 'GetProviderConfigurationV2' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The ID of provider', displayOptions: { show: { endpoint: [ 'GetCustomProviderConfigurationV2' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The ID of provider', displayOptions: { show: { endpoint: [ 'GetAdapterSchema' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'fileName', name: 'fileName', type: 'string', required: true, default: '', description: 'Name of document', displayOptions: { show: { endpoint: [ 'MethodtogetasignedURLfromS3' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of import request', displayOptions: { show: { endpoint: [ 'GetImportedDataById' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey ID from which the request originated from', displayOptions: { show: { endpoint: [ 'GetImportedDataByJourneyIdAndExternalId' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'externalId', name: 'externalId', type: 'string', required: true, default: '', description: 'ID of entity in External Data system', displayOptions: { show: { endpoint: [ 'GetImportedDataByJourneyIdAndExternalId' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey ID from which the request originated from', displayOptions: { show: { endpoint: [ 'GetImportIdentifierOfLastSavedImportByJourneyId' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The ID of provider', displayOptions: { show: { endpoint: [ 'GetProviderMapping' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The entity id to get the subscriptions for', displayOptions: { show: { endpoint: [ 'GetSubscriptionsByEntityId' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of search request', displayOptions: { show: { endpoint: [ 'GetSearchResultsById' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey ID from which the request originated from', displayOptions: { show: { endpoint: [ 'GetSearchResultsByJourneyId' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'entityType', name: 'entityType', type: 'string', required: true, default: '', description: 'Entity type for schema', displayOptions: { show: { endpoint: [ 'GetAdapterSchema' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'fromInternalProviders', name: 'fromInternalProviders', type: 'string', required: true, default: '', description: 'If true, then returns data from internal providers only. If false, returns data from external providers only.', displayOptions: { show: { endpoint: [ 'GetImportIdentifierOfLastSavedImportByJourneyId' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'entityType', name: 'entityType', type: 'string', required: true, default: '', description: 'Entity type for schema', displayOptions: { show: { endpoint: [ 'GetProviderMapping' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'entityType', name: 'entityType', type: 'string', required: true, default: '', description: 'Entity type for schema', displayOptions: { show: { endpoint: [ 'GetMappingConfiguration' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } },{ displayName: 'fromInternalProviders', name: 'fromInternalProviders', type: 'string', required: true, default: '', description: 'If true, then returns data from internal providers only. If false, returns data from external providers only.', displayOptions: { show: { endpoint: [ 'GetSearchResultsByJourneyId' ], domain: [ 'FenergoNebulaExternalDataQueryv10' ] } } }
];

async function ExecuteFenergoNebulaExternalDataQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let taskId=''; let providerId=''; let fileName=''; let id=''; let journeyId=''; let externalId=''; let entityId='';
switch(endpoint){ case 'GetAggregatedDataByTaskId': taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/aggregation/{taskId}'.replace('{taskId}', taskId);

break;
case 'GetConfigurationV2': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/providersconfiguration';

break;
case 'GetProviderConfigurationV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/providersconfiguration/provider/{providerId}'.replace('{providerId}', providerId);

break;
case 'GetCustomProviderConfigurationV2': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/providersconfiguration/customProvider/{providerId}'.replace('{providerId}', providerId);

break;
case 'GetAdapterSchema': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/providersconfiguration/adapterschema/{providerId}'.replace('{providerId}', providerId);
requestOptions.qs = { entityType: base.getNodeParameter('entityType', 0) as string };
break;
case 'MethodtogetasignedURLfromS3': fileName = base.getNodeParameter('fileName', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/document/signedurl/{fileName}'.replace('{fileName}', fileName);

break;
case 'GetImportedDataById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/import/{id}'.replace('{id}', id);

break;
case 'GetImportedDataByJourneyIdAndExternalId': journeyId = base.getNodeParameter('journeyId', 0) as string;
externalId = base.getNodeParameter('externalId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/import/journey/{journeyId}/externalId/{externalId}'.replace('{journeyId}', journeyId).replace('{externalId}', externalId);

break;
case 'GetImportIdentifierOfLastSavedImportByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/import/journey/{journeyId}/latestImport'.replace('{journeyId}', journeyId);
requestOptions.qs = { fromInternalProviders: base.getNodeParameter('fromInternalProviders', 0) as string };
break;
case 'GetProviderMapping': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/mapping/provider/{providerId}'.replace('{providerId}', providerId);
requestOptions.qs = { entityType: base.getNodeParameter('entityType', 0) as string };
break;
case 'GetMappingConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/mapping/configuration';
requestOptions.qs = { entityType: base.getNodeParameter('entityType', 0) as string };
break;
case 'GetSubscriptionsByEntityId': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/ongoingmonitoring/subscriptions/entity/{entityId}'.replace('{entityId}', entityId);

break;
case 'GetSearchResultsById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/search/{id}'.replace('{id}', id);

break;
case 'GetSearchResultsByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/externaldataquery/api/search/journey/{journeyId}'.replace('{journeyId}', journeyId);
requestOptions.qs = { fromInternalProviders: base.getNodeParameter('fromInternalProviders', 0) as string };
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
    FenergoNebulaExternalDataQueryv10Properties,
    ExecuteFenergoNebulaExternalDataQueryv10
}
