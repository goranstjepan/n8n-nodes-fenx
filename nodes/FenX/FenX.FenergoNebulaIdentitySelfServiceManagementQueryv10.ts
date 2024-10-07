import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaIdentitySelfServiceManagementQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Returns all users from the tenant', value: 'GetUsers' },{ name: 'Returns the user with the specified id', value: 'GetUserById' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaIdentitySelfServiceManagementQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'User Id', displayOptions: { show: { endpoint: [ 'GetUserById' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementQueryv10' ] } } },{ displayName: 'Filter', name: 'Filter', type: 'string', required: true, default: '', description: 'Field handling filtering based on provided query. Case insensitive.Possible operators: "co" - Contains, "eq" - EqualsPossible logical operators: "and", "or"Valid fields to filter by: FirstName, LastName, Email, Status, Sources, ScimIdPossible statuses to filter by: Active, Locked, Suspended, Deactivated, Unverified', displayOptions: { show: { endpoint: [ 'GetUsers' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementQueryv10' ] } } },{ displayName: 'Size', name: 'Size', type: 'string', required: true, default: '', description: 'Non-negative value indicating desired number of results', displayOptions: { show: { endpoint: [ 'GetUsers' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementQueryv10' ] } } },{ displayName: 'From', name: 'From', type: 'string', required: true, default: '', description: 'Non-negative value indicating the 0-based index of the query result', displayOptions: { show: { endpoint: [ 'GetUsers' ], domain: [ 'FenergoNebulaIdentitySelfServiceManagementQueryv10' ] } } }
];

async function ExecuteFenergoNebulaIdentitySelfServiceManagementQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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
switch(endpoint){ case 'GetUsers': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/identitymanagementquery/api/users';
requestOptions.qs = { Filter: base.getNodeParameter('Filter', 0) as string,Size: base.getNodeParameter('Size', 0) as string,From: base.getNodeParameter('From', 0) as string };
break;
case 'GetUserById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/identitymanagementquery/api/users/{id}'.replace('{id}', id);

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
    FenergoNebulaIdentitySelfServiceManagementQueryv10Properties,
    ExecuteFenergoNebulaIdentitySelfServiceManagementQueryv10
}
