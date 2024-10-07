import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaExternalDataAdapterReceptorv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Callback', value: 'Callback' },{ name: 'Create presigned url for S3 upload', value: 'GetPresignedUrl' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaExternalDataAdapterReceptorv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "id": "id", "tenant": "tenant", "providerId": "providerId", "type": "Document", "status": "Success", "errorDetails": { "source": "source", "errorCode": "errorCode", "message": "message" }, "response": null }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Callback' ], domain: [ 'FenergoNebulaExternalDataAdapterReceptorv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "documentData": [ { "extension": "extension" } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPresignedUrl' ], domain: [ 'FenergoNebulaExternalDataAdapterReceptorv10' ] } } }
];

async function ExecuteFenergoNebulaExternalDataAdapterReceptorv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'Callback': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/externaldatareceptor/receptor/callback';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetPresignedUrl': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/externaldatareceptor/receptor/getPresignedUrl';

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
    FenergoNebulaExternalDataAdapterReceptorv10Properties,
    ExecuteFenergoNebulaExternalDataAdapterReceptorv10
}
