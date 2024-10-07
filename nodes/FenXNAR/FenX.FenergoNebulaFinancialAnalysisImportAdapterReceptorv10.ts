import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaFinancialAnalysisImportAdapterReceptorv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Callback', value: 'Callback' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaFinancialAnalysisImportAdapterReceptorv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "id": "id", "tenant": "tenant", "providerId": "providerId", "requestType": "requestType", "status": "status", "completedOn": "2023-11-30T11:31:47.2877584+00:00", "errorDetails": "errorDetails", "errorCode": "errorCode", "response": {} }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Callback' ], domain: [ 'FenergoNebulaFinancialAnalysisImportAdapterReceptorv10' ] } } }
];

async function ExecuteFenergoNebulaFinancialAnalysisImportAdapterReceptorv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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
requestOptions.uri = 'https://api.nar1.fenergox.com/financialanalysisreceptor/api/receptor/callback';

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
    FenergoNebulaFinancialAnalysisImportAdapterReceptorv10Properties,
    ExecuteFenergoNebulaFinancialAnalysisImportAdapterReceptorv10
}
