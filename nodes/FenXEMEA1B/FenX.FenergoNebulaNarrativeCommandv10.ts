import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaNarrativeCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create Business Narrative', value: 'CreateBusinessNarrative' },{ name: 'Update Business Narrative', value: 'UpdateBusinessNarrative' },{ name: 'Delete Business Narrative', value: 'DeleteBusinessNarrative' },{ name: 'Create Compliance Narrative', value: 'CreateComplianceNarrative' },{ name: 'Update Compliance Narrative', value: 'UpdateComplianceNarrative' },{ name: 'Delete Compliance Narrative', value: 'DeleteComplianceNarrative' },{ name: 'Create url to upload file. This endpoint is intended for use with the Narrative RichTextEditor.', value: 'CreateUrlToUploadFile' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaNarrativeCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'narrativeId', name: 'narrativeId', type: 'string', required: true, default: '', description: 'The ID of Narrative to update', displayOptions: { show: { endpoint: [ 'UpdateBusinessNarrative' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'narrativeId', name: 'narrativeId', type: 'string', required: true, default: '', description: 'The ID of Narrative to delete', displayOptions: { show: { endpoint: [ 'DeleteBusinessNarrative' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'narrativeId', name: 'narrativeId', type: 'string', required: true, default: '', description: 'The ID of Narrative to update', displayOptions: { show: { endpoint: [ 'UpdateComplianceNarrative' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'narrativeId', name: 'narrativeId', type: 'string', required: true, default: '', description: 'The ID of Narrative to delete', displayOptions: { show: { endpoint: [ 'DeleteComplianceNarrative' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id.', displayOptions: { show: { endpoint: [ 'CreateUrlToUploadFile' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'narrativeType', name: 'narrativeType', type: 'string', required: true, default: '', description: 'Narrative Type.', displayOptions: { show: { endpoint: [ 'CreateUrlToUploadFile' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "text": "text", "fileKey": "fileKey" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateBusinessNarrative' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "text": "text", "fileKey": "fileKey" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateBusinessNarrative' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "text": "text", "fileKey": "fileKey" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateComplianceNarrative' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "text": "text", "fileKey": "fileKey" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateComplianceNarrative' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "narrativeId": "narrativeId", "entityId": "entityId", "fileName": "fileName", "isRootContent": false, "contentSize": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateUrlToUploadFile' ], domain: [ 'FenergoNebulaNarrativeCommandv10' ] } } }
];

async function ExecuteFenergoNebulaNarrativeCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let narrativeId=''; let entityId=''; let narrativeType='';
switch(endpoint){ case 'CreateBusinessNarrative': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/narrativecommand/api/business';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateBusinessNarrative': narrativeId = base.getNodeParameter('narrativeId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/narrativecommand/api/business/{narrativeId}'.replace('{narrativeId}', narrativeId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteBusinessNarrative': narrativeId = base.getNodeParameter('narrativeId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/narrativecommand/api/business/{narrativeId}'.replace('{narrativeId}', narrativeId);

break;
case 'CreateComplianceNarrative': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/narrativecommand/api/compliance';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateComplianceNarrative': narrativeId = base.getNodeParameter('narrativeId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/narrativecommand/api/compliance/{narrativeId}'.replace('{narrativeId}', narrativeId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteComplianceNarrative': narrativeId = base.getNodeParameter('narrativeId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/narrativecommand/api/compliance/{narrativeId}'.replace('{narrativeId}', narrativeId);

break;
case 'CreateUrlToUploadFile': entityId = base.getNodeParameter('entityId', 0) as string;
narrativeType = base.getNodeParameter('narrativeType', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/narrativecommand/api/richtexteditor/{narrativeType}/{entityId}/create-url-to-upload-file'.replace('{entityId}', entityId).replace('{narrativeType}', narrativeType);

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
    FenergoNebulaNarrativeCommandv10Properties,
    ExecuteFenergoNebulaNarrativeCommandv10
}
