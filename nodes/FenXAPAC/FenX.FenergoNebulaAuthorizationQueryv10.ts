import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaAuthorizationQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get access layers', value: 'GetAllAccessLayers' },{ name: 'Get access layer by id', value: 'GetAccessLayer' },{ name: 'Get users with given access layer assigned', value: 'GetAccessLayerUsers' },{ name: 'Get access layers configuration', value: 'GetAccessLayersConfiguration' },{ name: 'Get dynamic configurations', value: 'GetDynamicConfigurationsPage' },{ name: 'Get dynamic configuration by id', value: 'GetDynamicConfigurationById' },{ name: 'Get reference data', value: 'GetReferenceData' },{ name: 'Get users names', value: 'GetUsersNames' },{ name: 'Get teams names', value: 'GetTeamsNames' },{ name: 'Get team with users by id', value: 'GetTeamWithUsersById' },{ name: 'Get access layers light', value: 'GetAccessLayersLight' },{ name: 'Get access layers inheritance configuration', value: 'GetRelatedPartyAccessLayersInheritanceConfiguration' },{ name: 'Get teams', value: 'GetAllTeams' },{ name: 'Get team by id', value: 'GetTeam' },{ name: 'Get user teams', value: 'GetTeamUsers' },{ name: 'Get users', value: 'GetAllUsers' },{ name: 'Get user by id', value: 'GetUserById' },{ name: 'Get current user authorization profile', value: 'GetCurrentUserAuthorizationProfile' },{ name: 'Get current user authorization profile by user id', value: 'GetUserAuthorizationProfileById' },{ name: 'Get user extended profile by id', value: 'GetUserExtendedProfileById' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaAuthorizationQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Access layer id', displayOptions: { show: { endpoint: [ 'GetAccessLayer' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Access layer Id', displayOptions: { show: { endpoint: [ 'GetAccessLayerUsers' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Dynamic configuration id', displayOptions: { show: { endpoint: [ 'GetDynamicConfigurationById' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Team id', displayOptions: { show: { endpoint: [ 'GetTeamWithUsersById' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Team id', displayOptions: { show: { endpoint: [ 'GetTeam' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Team Id', displayOptions: { show: { endpoint: [ 'GetTeamUsers' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetUserById' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetUserAuthorizationProfileById' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetUserExtendedProfileById' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'PageSize', name: 'PageSize', type: 'string', required: true, default: '', description: 'Size of the page (result set)', displayOptions: { show: { endpoint: [ 'GetDynamicConfigurationsPage' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'PaginationToken', name: 'PaginationToken', type: 'string', required: true, default: '', description: 'Position token for the search results to start(leave empty to start from the 1st item)', displayOptions: { show: { endpoint: [ 'GetDynamicConfigurationsPage' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'includeTeamDefinitions', name: 'includeTeamDefinitions', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCurrentUserAuthorizationProfile' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'includeAccessLayersDefinitions', name: 'includeAccessLayersDefinitions', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCurrentUserAuthorizationProfile' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'includeTeamDefinitions', name: 'includeTeamDefinitions', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetUserAuthorizationProfileById' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } },{ displayName: 'includeAccessLayersDefinitions', name: 'includeAccessLayersDefinitions', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetUserAuthorizationProfileById' ], domain: [ 'FenergoNebulaAuthorizationQueryv10' ] } } }
];

async function ExecuteFenergoNebulaAuthorizationQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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
switch(endpoint){ case 'GetAllAccessLayers': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/access-layer';

break;
case 'GetAccessLayer': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/access-layer/{id}'.replace('{id}', id);

break;
case 'GetAccessLayerUsers': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/access-layer/{id}/users'.replace('{id}', id);

break;
case 'GetAccessLayersConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/access-layer/configuration';

break;
case 'GetDynamicConfigurationsPage': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/dynamic-configuration';
requestOptions.qs = { PageSize: base.getNodeParameter('PageSize', 0) as string,PaginationToken: base.getNodeParameter('PaginationToken', 0) as string };
break;
case 'GetDynamicConfigurationById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/dynamic-configuration/{id}'.replace('{id}', id);

break;
case 'GetReferenceData': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/reference-data';

break;
case 'GetUsersNames': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/reference-data/users';

break;
case 'GetTeamsNames': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/reference-data/teams';

break;
case 'GetTeamWithUsersById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/reference-data/team/{id}'.replace('{id}', id);

break;
case 'GetAccessLayersLight': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/reference-data/access-layers';

break;
case 'GetRelatedPartyAccessLayersInheritanceConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/related-party-access-layers-inheritance-configuration';

break;
case 'GetAllTeams': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/team';

break;
case 'GetTeam': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/team/{id}'.replace('{id}', id);

break;
case 'GetTeamUsers': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/team/{id}/users'.replace('{id}', id);

break;
case 'GetAllUsers': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/user';

break;
case 'GetUserById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/user/{id}/profile'.replace('{id}', id);

break;
case 'GetCurrentUserAuthorizationProfile': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/user/authorization-profile';
requestOptions.qs = { includeTeamDefinitions: base.getNodeParameter('includeTeamDefinitions', 0) as string,includeAccessLayersDefinitions: base.getNodeParameter('includeAccessLayersDefinitions', 0) as string };
break;
case 'GetUserAuthorizationProfileById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/user/{id}/authorization-profile'.replace('{id}', id);
requestOptions.qs = { includeTeamDefinitions: base.getNodeParameter('includeTeamDefinitions', 0) as string,includeAccessLayersDefinitions: base.getNodeParameter('includeAccessLayersDefinitions', 0) as string };
break;
case 'GetUserExtendedProfileById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/authorizationquery/api/user/{id}/extended-profile'.replace('{id}', id);

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
    FenergoNebulaAuthorizationQueryv10Properties,
    ExecuteFenergoNebulaAuthorizationQueryv10
}
