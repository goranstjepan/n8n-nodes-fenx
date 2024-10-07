import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaBusinessMetricsCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create a Journey Summary', value: 'CreateaJourneySummary' },{ name: 'Trigger the creation of a Journey Summary for all currently scheduled journeys', value: 'TriggerthecreationofaJourneySummaryforallcurrentlyscheduledjourneys' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaBusinessMetricsCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyIds": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateaJourneySummary' ], domain: [ 'FenergoNebulaBusinessMetricsCommandv10' ] } } }
];

async function ExecuteFenergoNebulaBusinessMetricsCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'CreateaJourneySummary': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/businessmetricscommand/api/journeysummary';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'TriggerthecreationofaJourneySummaryforallcurrentlyscheduledjourneys': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/businessmetricscommand/api/journeysummary/triggerscheduledsummaries';

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
    FenergoNebulaBusinessMetricsCommandv10Properties,
    ExecuteFenergoNebulaBusinessMetricsCommandv10
}
