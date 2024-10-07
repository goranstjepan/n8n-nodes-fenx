import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaBulkLoadCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create the bulk load job', value: 'CreateJob' },{ name: 'Cancel the bulk load job', value: 'CancelJob' },{ name: 'Update the bulk load job', value: 'UpdateJob' },{ name: 'Set the UploadedBy in the job', value: 'SetJobUploadedBy' },{ name: '', value: 'GenerateDataSourceUploadSignedUrl' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaBulkLoadCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Bulk Load Job id to be cancelled', displayOptions: { show: { endpoint: [ 'CancelJob' ], domain: [ 'FenergoNebulaBulkLoadCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Bulk Load Job id to be update', displayOptions: { show: { endpoint: [ 'UpdateJob' ], domain: [ 'FenergoNebulaBulkLoadCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Job id to set the UploadedBy', displayOptions: { show: { endpoint: [ 'SetJobUploadedBy' ], domain: [ 'FenergoNebulaBulkLoadCommandv10' ] } } },{ displayName: 'jobId', name: 'jobId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GenerateDataSourceUploadSignedUrl' ], domain: [ 'FenergoNebulaBulkLoadCommandv10' ] } } },{ displayName: 'type', name: 'type', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GenerateDataSourceUploadSignedUrl' ], domain: [ 'FenergoNebulaBulkLoadCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "sourcePolicyId": "sourcePolicyId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateJob' ], domain: [ 'FenergoNebulaBulkLoadCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "uploadedFileName": "uploadedFileName" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateJob' ], domain: [ 'FenergoNebulaBulkLoadCommandv10' ] } } }
];

async function ExecuteFenergoNebulaBulkLoadCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let jobId=''; let type='';
switch(endpoint){ case 'CreateJob': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/bulkloadcommand/api/jobs';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CancelJob': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/bulkloadcommand/api/jobs/{id}/cancellation'.replace('{id}', id);

break;
case 'UpdateJob': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/bulkloadcommand/api/jobs/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SetJobUploadedBy': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/bulkloadcommand/api/jobs/{id}/uploadedBy'.replace('{id}', id);

break;
case 'GenerateDataSourceUploadSignedUrl': jobId = base.getNodeParameter('jobId', 0) as string;
type = base.getNodeParameter('type', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/bulkloadcommand/api/jobs/{jobId}/data-source-upload-signed-url/{type}'.replace('{jobId}', jobId).replace('{type}', type);

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
    FenergoNebulaBulkLoadCommandv10Properties,
    ExecuteFenergoNebulaBulkLoadCommandv10
}
