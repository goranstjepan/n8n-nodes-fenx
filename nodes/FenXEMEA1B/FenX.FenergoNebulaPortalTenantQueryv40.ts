import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaPortalTenantQueryv40Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Gets password reset ticket', value: 'GetPasswordResetTicket' },{ name: 'Gets dashboard config with the corresponding Id.', value: 'GetDashboardConfigById' },{ name: 'Gets dashboard config with the corresponding Id returning fields grouped by entity type.', value: 'GetEntityTypeDashboardConfigById' },{ name: 'Gets dashboard configs', value: 'GetDashboardConfigs' },{ name: 'Gets Tenant"s Email Provider', value: 'GetEmailProvider' },{ name: 'Gets role with the corresponding Id.', value: 'GetPortalRoleById' },{ name: 'Gets portal available roles', value: 'GetPortalRoles' },{ name: 'Gets Portal Users', value: 'GetPortalUsers' },{ name: 'Gets Portal User details', value: 'GetPortalUserDetails' },{ name: 'Gets Portal Users linked to entity', value: 'GetPortalUsersLinkedToEntity' },{ name: 'Searches for Legal Entities List to be linked to a Portal User', value: 'SearchForLinkLeCandidates' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaPortalTenantQueryv40',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Portal user identifier for which the ticket is to be created.', displayOptions: { show: { endpoint: [ 'GetPasswordResetTicket' ], domain: [ 'FenergoNebulaPortalTenantQueryv40' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Dashboard Config identifier.', displayOptions: { show: { endpoint: [ 'GetDashboardConfigById' ], domain: [ 'FenergoNebulaPortalTenantQueryv40' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Dashboard Config identifier.', displayOptions: { show: { endpoint: [ 'GetEntityTypeDashboardConfigById' ], domain: [ 'FenergoNebulaPortalTenantQueryv40' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Role identifier.', displayOptions: { show: { endpoint: [ 'GetPortalRoleById' ], domain: [ 'FenergoNebulaPortalTenantQueryv40' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'User id', displayOptions: { show: { endpoint: [ 'GetPortalUserDetails' ], domain: [ 'FenergoNebulaPortalTenantQueryv40' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetPortalUsersLinkedToEntity' ], domain: [ 'FenergoNebulaPortalTenantQueryv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": 0 }, "searchCriteria": { "email": "email", "username": "username", "status": "status" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPortalUsers' ], domain: [ 'FenergoNebulaPortalTenantQueryv40' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "userId": "userId", "entityViewModel": { "properties": {}, "type": "type" }, "visibleColumns": [ "" ], "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": 0 } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchForLinkLeCandidates' ], domain: [ 'FenergoNebulaPortalTenantQueryv40' ] } } }
];

async function ExecuteFenergoNebulaPortalTenantQueryv40(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let entityId='';
switch(endpoint){ case 'GetPasswordResetTicket': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/auth0/passwordresetticket/{id}'.replace('{id}', id);

break;
case 'GetDashboardConfigById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/dashboard/dashboardconfig/{id}'.replace('{id}', id);

break;
case 'GetEntityTypeDashboardConfigById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/dashboard/entitytypedashboardconfig/{id}'.replace('{id}', id);

break;
case 'GetDashboardConfigs': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/dashboard/dashboardconfigs';

break;
case 'GetEmailProvider': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/email/emailprovider';

break;
case 'GetPortalRoleById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/portal-roles/portalrole/{id}'.replace('{id}', id);

break;
case 'GetPortalRoles': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/portal-roles/portalroles';

break;
case 'GetPortalUsers': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/portal-users/portalusers';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetPortalUserDetails': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/portal-users/userdetails/{id}'.replace('{id}', id);

break;
case 'GetPortalUsersLinkedToEntity': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/portal-users/portaluserslinked/{entityId}'.replace('{entityId}', entityId);

break;
case 'SearchForLinkLeCandidates': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/portaltenantquery/api/portal-users/searchforlinklecandidates';

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
    FenergoNebulaPortalTenantQueryv40Properties,
    ExecuteFenergoNebulaPortalTenantQueryv40
}
