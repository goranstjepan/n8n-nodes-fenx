import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaPortalTenantCommandv40Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Upserts dashboard config', value: 'UpsertDashboardConfig' },{ name: 'Sends Email using configured Outreach Email Domain', value: 'SendEmail' },{ name: 'Updates portal user role editable config', value: 'UpdateRoleDetails' },{ name: 'Set portal user role as default', value: 'SetDefaultRole' },{ name: 'Links portal user to entities', value: 'AddUserEntityLinks' },{ name: 'Changes portal user active status', value: 'UpdateUserStatus' },{ name: 'Deletes User EntityLink', value: 'DeleteUserEntityLink' },{ name: 'Creates portal user', value: 'CreateUser' },{ name: 'Deletes portal user', value: 'RemovePortalUser' },{ name: 'Updates Portal user details', value: 'UpdateUserDetails' },{ name: 'Creates portal user or uses existing one and links it with entities', value: 'CreateUserWithEntitiesLinks' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaPortalTenantCommandv40',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Role identifier.', displayOptions: { show: { endpoint: [ 'SetDefaultRole' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'User Entity Link id', displayOptions: { show: { endpoint: [ 'DeleteUserEntityLink' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'User id', displayOptions: { show: { endpoint: [ 'RemovePortalUser' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "name": "name", "fields": [ { "fieldKey": "fieldKey", "label": "label", "type": "type" } ], "dashboardType": "dashboardType" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpsertDashboardConfig' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "to": "to", "templateName": "templateName", "variables": {}, "journeyId": "journeyId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SendEmail' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "roleName": "roleName", "isNewClientRequestEnabled": false, "entityTypes": [ "" ], "journeyTypes": [ "" ], "dashboardId": "dashboardId", "isAddingUserEnabled": false, "receiveOutreachEmailNotification": false, "journeyAccessEnabled": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateRoleDetails' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "userId": "userId", "entityIds": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddUserEntityLinks' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "isActive": false, "userId": "userId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateUserStatus' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "email": "email", "roles": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateUser' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "userId": "userId", "languageInfo": { "isoCode": "isoCode" }, "roles": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateUserDetails' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "email": "email", "roles": [ "" ], "entitiesIds": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateUserWithEntitiesLinks' ], domain: [ 'FenergoNebulaPortalTenantCommandv40' ] } } }
];

async function ExecuteFenergoNebulaPortalTenantCommandv40(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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
switch(endpoint){ case 'UpsertDashboardConfig': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/dashboard/upsertdashboardconfig';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SendEmail': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/email/sendemail';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateRoleDetails': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/portal-roles/updateroledetails';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SetDefaultRole': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/portal-roles/setdefaultrole/{id}'.replace('{id}', id);

break;
case 'AddUserEntityLinks': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/portal-users/adduserentitylinks';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateUserStatus': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/portal-users/updateuserstatus';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteUserEntityLink': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/portal-users/deleteuserentitylink/{id}'.replace('{id}', id);

break;
case 'CreateUser': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/portal-users/createuser';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'RemovePortalUser': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/portal-users/remove/{id}'.replace('{id}', id);

break;
case 'UpdateUserDetails': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/portal-users/updateuserdetails';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateUserWithEntitiesLinks': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/portaltenantcommand/api/portal-users/createuserwithentitieslinks';

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
    FenergoNebulaPortalTenantCommandv40Properties,
    ExecuteFenergoNebulaPortalTenantCommandv40
}
