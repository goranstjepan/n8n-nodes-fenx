import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaAuthorizationCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create access layer', value: 'CreateAccessLayer' },{ name: 'Update access layer', value: 'UpdateAccessLayer' },{ name: 'Delete access layer', value: 'DeleteAccessLayer' },{ name: 'Assign user to the access layer', value: 'AssignUserToAccessLayer' },{ name: 'Unassign user from the access layer', value: 'UnassignUserFromAccessLayer' },{ name: 'Batch update user access layers', value: 'BatchUpdateUserAccessLayers' },{ name: 'Update access layers-related configuration', value: 'UpdateAccessLayersConfiguration' },{ name: 'Create dynamic configuration', value: 'CreateDynamicConfiguration' },{ name: 'Clone dynamic configuration', value: 'CloneDynamicConfiguration' },{ name: 'Update dynamic configuration', value: 'UpdateDynamicConfiguration' },{ name: 'Delete dynamic configuration', value: 'DeleteDynamicConfiguration' },{ name: 'Update access layers inheritance configuration', value: 'UpdateRelatedPartyAccessLayersInheritanceConfiguration' },{ name: 'Create team', value: 'CreateTeam' },{ name: 'Update team', value: 'UpdateTeam' },{ name: 'Delete team', value: 'DeleteTeam' },{ name: 'Clone team', value: 'CloneTeam' },{ name: 'Add User to the team', value: 'AddUserToTeam' },{ name: 'Remove user from the team', value: 'RemoveUserFromTeam' },{ name: 'Batch update user teams', value: 'BatchUpdateUsers' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaAuthorizationCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Access layer id', displayOptions: { show: { endpoint: [ 'UpdateAccessLayer' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Access layer id', displayOptions: { show: { endpoint: [ 'DeleteAccessLayer' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Access layer Id', displayOptions: { show: { endpoint: [ 'AssignUserToAccessLayer' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'userId', name: 'userId', type: 'string', required: true, default: '', description: 'User Id', displayOptions: { show: { endpoint: [ 'AssignUserToAccessLayer' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Access layer Id', displayOptions: { show: { endpoint: [ 'UnassignUserFromAccessLayer' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'userId', name: 'userId', type: 'string', required: true, default: '', description: 'User Id', displayOptions: { show: { endpoint: [ 'UnassignUserFromAccessLayer' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'userId', name: 'userId', type: 'string', required: true, default: '', description: 'User Id', displayOptions: { show: { endpoint: [ 'BatchUpdateUserAccessLayers' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Dynamic Configuration Id', displayOptions: { show: { endpoint: [ 'CloneDynamicConfiguration' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Dynamic configuration id', displayOptions: { show: { endpoint: [ 'UpdateDynamicConfiguration' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'dynamic configuration id', displayOptions: { show: { endpoint: [ 'DeleteDynamicConfiguration' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Team id', displayOptions: { show: { endpoint: [ 'UpdateTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Team Id', displayOptions: { show: { endpoint: [ 'DeleteTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Team Id', displayOptions: { show: { endpoint: [ 'CloneTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Team Id', displayOptions: { show: { endpoint: [ 'AddUserToTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'userId', name: 'userId', type: 'string', required: true, default: '', description: 'User Id', displayOptions: { show: { endpoint: [ 'AddUserToTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Team Id', displayOptions: { show: { endpoint: [ 'RemoveUserFromTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'userId', name: 'userId', type: 'string', required: true, default: '', description: 'User Id', displayOptions: { show: { endpoint: [ 'RemoveUserFromTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'userId', name: 'userId', type: 'string', required: true, default: '', description: 'User Id', displayOptions: { show: { endpoint: [ 'BatchUpdateUsers' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "dataKey": "dataKey", "label": "label", "description": "description", "type": "Geographic", "dataType": "Field", "users": [ "" ], "sensitiveDataKind": "None" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateAccessLayer' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "label": "label", "description": "description", "type": "Geographic", "dataType": "Field", "sensitiveDataKind": "None", "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateAccessLayer' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "accessLayers": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'BatchUpdateUserAccessLayers' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "populateDefaultAccessLayers": false, "enableDynamicAccessLayers": false, "enableSensitiveData": false, "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateAccessLayersConfiguration' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "description": "description", "geographicAccessLayerId": "geographicAccessLayerId", "businessRelatedAccessLayerId": "businessRelatedAccessLayerId", "dataType": "Field", "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDynamicConfiguration' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloneDynamicConfiguration' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "description": "description", "geographicAccessLayerId": "geographicAccessLayerId", "businessRelatedAccessLayerId": "businessRelatedAccessLayerId", "dataType": "Field", "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ], "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDynamicConfiguration' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "inheritanceEnabled": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateRelatedPartyAccessLayersInheritanceConfiguration' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "description": "description", "scopes": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "description": "description", "scopes": [ "" ], "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloneTeam' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "teams": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'BatchUpdateUsers' ], domain: [ 'FenergoNebulaAuthorizationCommandv10' ] } } }
];

async function ExecuteFenergoNebulaAuthorizationCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let userId='';
switch(endpoint){ case 'CreateAccessLayer': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/access-layer';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateAccessLayer': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/access-layer/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteAccessLayer': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/access-layer/{id}'.replace('{id}', id);

break;
case 'AssignUserToAccessLayer': id = base.getNodeParameter('id', 0) as string;
userId = base.getNodeParameter('userId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/access-layer/{id}/user/{userId}'.replace('{id}', id).replace('{userId}', userId);

break;
case 'UnassignUserFromAccessLayer': id = base.getNodeParameter('id', 0) as string;
userId = base.getNodeParameter('userId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/access-layer/{id}/user/{userId}'.replace('{id}', id).replace('{userId}', userId);

break;
case 'BatchUpdateUserAccessLayers': userId = base.getNodeParameter('userId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/access-layer/users/{userId}/batch'.replace('{userId}', userId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateAccessLayersConfiguration': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/access-layer/configuration';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateDynamicConfiguration': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/dynamic-configuration';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CloneDynamicConfiguration': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/dynamic-configuration/{id}/clone'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDynamicConfiguration': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/dynamic-configuration/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteDynamicConfiguration': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/dynamic-configuration/{id}'.replace('{id}', id);

break;
case 'UpdateRelatedPartyAccessLayersInheritanceConfiguration': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/related-party-access-layers-inheritance-configuration/update';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateTeam': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/team';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateTeam': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/team/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteTeam': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/team/{id}'.replace('{id}', id);

break;
case 'CloneTeam': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/team/{id}/clone'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'AddUserToTeam': id = base.getNodeParameter('id', 0) as string;
userId = base.getNodeParameter('userId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/team/{id}/user/{userId}'.replace('{id}', id).replace('{userId}', userId);

break;
case 'RemoveUserFromTeam': id = base.getNodeParameter('id', 0) as string;
userId = base.getNodeParameter('userId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/team/{id}/user/{userId}'.replace('{id}', id).replace('{userId}', userId);

break;
case 'BatchUpdateUsers': userId = base.getNodeParameter('userId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/authorizationcommand/api/team/users/{userId}/batch'.replace('{userId}', userId);

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
    FenergoNebulaAuthorizationCommandv10Properties,
    ExecuteFenergoNebulaAuthorizationCommandv10
}
