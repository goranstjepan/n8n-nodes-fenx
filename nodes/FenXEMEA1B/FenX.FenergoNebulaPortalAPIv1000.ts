import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaPortalAPIv1000Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Initializes Seamless Passwordless with magic link SSO authentication flow.', value: 'InitializesSeamlessPasswordlesswithmagiclinkSSOauthenticationflow.' },{ name: 'Returns magic link', value: 'Returnsmagiclink' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaPortalAPIv1000',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "entityId": "entityId", "userIdentifier": "userIdentifier", "returnUrl": "returnUrl", "callbackUrl": "callbackUrl", "journeyId": "journeyId", "languageIsoCode": "languageIsoCode", "clientId": "clientId", "clientSecret": "clientSecret" }', description: 'Request body', displayOptions: { show: { endpoint: [ 'InitializesSeamlessPasswordlesswithmagiclinkSSOauthenticationflow.' ], domain: [ 'FenergoNebulaPortalAPIv1000' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "userIdentifier": "userIdentifier", "clientId": "clientId", "clientSecret": "clientSecret" }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Returnsmagiclink' ], domain: [ 'FenergoNebulaPortalAPIv1000' ] } } }
];

async function ExecuteFenergoNebulaPortalAPIv1000(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'InitializesSeamlessPasswordlesswithmagiclinkSSOauthenticationflow.': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portal-bff/api/passwordless/init';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'Returnsmagiclink': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portal-bff/api/passwordless/magiclink';

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
    FenergoNebulaPortalAPIv1000Properties,
    ExecuteFenergoNebulaPortalAPIv1000
}
