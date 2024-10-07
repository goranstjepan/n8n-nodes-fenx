import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaIdentitySelfServiceManagementCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Adds a new user to the tenant, with the data specified in the request', value: 'CreateUser' },{ name: 'Removes an existing user from the tenant', value: 'DeleteUser' },{ name: 'Updates all the data of a user that already exists in the tenant', value: 'UpdateUser' },{ name: 'Updates some data of a user that already exists in the tenant', value: 'PatchUser' },{ name: 'Sends verification email to the user', value: 'SendVerificationEmail' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaIdentitySelfServiceManagementCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the user that would be removed', displayOptions: { show: { endpoint: [ 'DeleteUser' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the user that would be updated', displayOptions: { show: { endpoint: [ 'UpdateUser' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the user that would be updated', displayOptions: { show: { endpoint: [ 'PatchUser' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the user', displayOptions: { show: { endpoint: [ 'SendVerificationEmail' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "email": "email", "firstName": "firstName", "lastName": "lastName", "customProperties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateUser' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "firstName": "firstName", "lastName": "lastName", "customProperties": {}, "enabled": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateUser' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "firstName": "firstName", "lastName": "lastName", "customProperties": {}, "enabled": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'PatchUser' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementCommandv10' ] } } }
];

async function ExecuteFenergoNebulaIdentitySelfServiceManagementCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id='';
switch(endpoint){ case 'CreateUser': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/identitymanagementcommand/api/users';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteUser': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/identitymanagementcommand/api/users/{id}'.replace('{id}', id);

break;
case 'UpdateUser': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/identitymanagementcommand/api/users/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'PatchUser': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PATCH';
requestOptions.uri = 'https://api.apac1.fenergox.com/identitymanagementcommand/api/users/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SendVerificationEmail': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/identitymanagementcommand/api/users/{id}/send-verification-email'.replace('{id}', id);

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
    FenergoNebulaIdentitySelfServiceManagementCommandv10Properties,
    ExecuteFenergoNebulaIdentitySelfServiceManagementCommandv10
}
