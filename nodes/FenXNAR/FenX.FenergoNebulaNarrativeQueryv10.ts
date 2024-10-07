import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaNarrativeQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Search Business Narratives', value: 'SearchBusinessNarrative' },{ name: 'Get Business Narrative by Id', value: 'GetBusinessNarrativeById' },{ name: 'Get pre-sign URLs for a file identifiers This endpoint is intended for use with the Narrative RichTextEditor.', value: 'GetPreSignBusinessUrlForFileIdentifiers' },{ name: 'Search Compliance Narratives', value: 'SearchComplianceNarratives' },{ name: 'Get Compliance Narrative by Id', value: 'GetComplianceNarrativeById' },{ name: 'Get pre-sign URLs for a file identifiers This endpoint is intended for use with the Narrative RichTextEditor.', value: 'GetPreSignComplianceUrlForFileIdentifiers' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaNarrativeQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'narrativeId', name: 'narrativeId', type: 'string', required: true, default: '', description: 'Narrative ID to search', displayOptions: { show: { endpoint: [ 'GetBusinessNarrativeById' ], domain: [ 'FenergoNebulaNarrativeQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetPreSignBusinessUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaNarrativeQueryv10' ] } } },{ displayName: 'narrativeId', name: 'narrativeId', type: 'string', required: true, default: '', description: 'Narrative ID to search', displayOptions: { show: { endpoint: [ 'GetComplianceNarrativeById' ], domain: [ 'FenergoNebulaNarrativeQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetPreSignComplianceUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaNarrativeQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "searchTerm": "searchTerm" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchBusinessNarrative' ], domain: [ 'FenergoNebulaNarrativeQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "isRootContent": false, "fileIdentifiers": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPreSignBusinessUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaNarrativeQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "searchTerm": "searchTerm" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchComplianceNarratives' ], domain: [ 'FenergoNebulaNarrativeQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "isRootContent": false, "fileIdentifiers": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPreSignComplianceUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaNarrativeQueryv10' ] } } }
];

async function ExecuteFenergoNebulaNarrativeQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let narrativeId=''; let entityId='';
switch(endpoint){ case 'SearchBusinessNarrative': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/narrativequery/api/business/search';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetBusinessNarrativeById': narrativeId = base.getNodeParameter('narrativeId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/narrativequery/api/business/{narrativeId}'.replace('{narrativeId}', narrativeId);

break;
case 'GetPreSignBusinessUrlForFileIdentifiers': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/narrativequery/api/business/{entityId}/pre-sign-urls'.replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SearchComplianceNarratives': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/narrativequery/api/compliance/search';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetComplianceNarrativeById': narrativeId = base.getNodeParameter('narrativeId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/narrativequery/api/compliance/{narrativeId}'.replace('{narrativeId}', narrativeId);

break;
case 'GetPreSignComplianceUrlForFileIdentifiers': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/narrativequery/api/compliance/{entityId}/pre-sign-urls'.replace('{entityId}', entityId);

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
    FenergoNebulaNarrativeQueryv10Properties,
    ExecuteFenergoNebulaNarrativeQueryv10
}
