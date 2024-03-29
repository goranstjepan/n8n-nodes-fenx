import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaNewRequestv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Save Configuration', value: 'SaveConfiguration' },{ name: 'Get configuration', value: 'GetConfiguration' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaNewRequestv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "stages": [ { "type": "ClientDetails", "name": "name", "order": 0, "data": null } ], "defaultEntityType": "Individual", "userExperienceType": "Standard", "overwrittenStages": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveConfiguration' ], domain: [ 'FenergoNebulaNewRequestv10' ] } } }
];

async function ExecuteFenergoNebulaNewRequestv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'SaveConfiguration': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/newrequest/api/configuration';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/newrequest/api/configuration';

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
    FenergoNebulaNewRequestv10Properties,
    ExecuteFenergoNebulaNewRequestv10
}
