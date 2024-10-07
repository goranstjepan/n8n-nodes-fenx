import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaConfigBaselineQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get baselines', value: 'GetLatest' },{ name: 'Get baselines', value: 'GetByReference' },{ name: 'Get baselines', value: 'GetByJourney' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaConfigBaselineQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'referenceId', name: 'referenceId', type: 'string', required: true, default: '', description: 'BaselinesReference identifier.', displayOptions: { show: { endpoint: [ 'GetByReference' ], domain: [ 'FenergoNebulaConfigBaselineQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey identifier.', displayOptions: { show: { endpoint: [ 'GetByJourney' ], domain: [ 'FenergoNebulaConfigBaselineQueryv10' ] } } }
];

async function ExecuteFenergoNebulaConfigBaselineQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let referenceId=''; let journeyId='';
switch(endpoint){ case 'GetLatest': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/configbaselinequery/api/baseline/latest';

break;
case 'GetByReference': referenceId = base.getNodeParameter('referenceId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/configbaselinequery/api/baseline/reference/{referenceId}'.replace('{referenceId}', referenceId);

break;
case 'GetByJourney': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/configbaselinequery/api/baseline/reference/journey/{journeyId}'.replace('{journeyId}', journeyId);

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
    FenergoNebulaConfigBaselineQueryv10Properties,
    ExecuteFenergoNebulaConfigBaselineQueryv10
}
