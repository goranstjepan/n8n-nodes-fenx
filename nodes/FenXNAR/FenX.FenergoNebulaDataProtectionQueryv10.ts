import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaDataProtectionQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get configuration', value: 'GetConfiguration' },{ name: 'Get data deletion processes for entity', value: 'GetAllDataDeletionProcessesByEntityId' },{ name: 'Get data deletion processes up to trigger date', value: 'GetAllDataDeletionProcessesUpToDate' },{ name: 'Get all data deletion processes', value: 'GetAllDataDeletionProcesses' },{ name: 'Get data protection regimes', value: 'GetAllDataProtectionRegimes' },{ name: 'Get data protection regime by id', value: 'GetDataProtectionRegime' },{ name: 'Get entity check configurations', value: 'GetAllEntityCheckConfigurations' },{ name: 'Get entity check configuration by id', value: 'GetEntityCheckConfigurationById' },{ name: 'Get entity check configuration by id and version', value: 'GetEntityCheckConfigurationVersionById' },{ name: 'Get entity check requirements by type', value: 'GetEntityCheckRequirements' },{ name: 'Get latest entity check verification process by type', value: 'GetLatestEntityCheckVerification' },{ name: 'Returns an existing Ongoing Screening Unsubscribe Batch for a given Journey and Entity', value: 'GetUnsubscribeBatchByEntityIdAndJourneyId' },{ name: 'Get all orphan entities', value: 'GetAllOrphanEntities' },{ name: 'Get orphan entity by id', value: 'GetOrphanEntityById' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaDataProtectionQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetAllDataDeletionProcessesByEntityId' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Data protection regime id', displayOptions: { show: { endpoint: [ 'GetDataProtectionRegime' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'configurationId', name: 'configurationId', type: 'string', required: true, default: '', description: 'Entity check configuration id', displayOptions: { show: { endpoint: [ 'GetEntityCheckConfigurationById' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'configurationId', name: 'configurationId', type: 'string', required: true, default: '', description: 'Entity check configuration id', displayOptions: { show: { endpoint: [ 'GetEntityCheckConfigurationVersionById' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Entity check configuration version number', displayOptions: { show: { endpoint: [ 'GetEntityCheckConfigurationVersionById' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'type', name: 'type', type: 'string', required: true, default: '', description: 'Entity check requirement type', displayOptions: { show: { endpoint: [ 'GetEntityCheckRequirements' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'type', name: 'type', type: 'string', required: true, default: '', description: 'Entity check verification type', displayOptions: { show: { endpoint: [ 'GetLatestEntityCheckVerification' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetUnsubscribeBatchByEntityIdAndJourneyId' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetUnsubscribeBatchByEntityIdAndJourneyId' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Orphan entity id', displayOptions: { show: { endpoint: [ 'GetOrphanEntityById' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "endDate": "2025-01-21T08:34:26.1410394+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetAllDataDeletionProcessesUpToDate' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "actionsGroup": "actionsGroup", "pager": { "paginationToken": "paginationToken", "pageSize": 0, "sortOrder": 0 } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetAllOrphanEntities' ], domain: [ 'FenergoNebulaDataProtectionQueryv10' ] } } }
];

async function ExecuteFenergoNebulaDataProtectionQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let entityId=''; let id=''; let configurationId=''; let versionNumber=''; let type=''; let journeyId='';
switch(endpoint){ case 'GetConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/configuration';

break;
case 'GetAllDataDeletionProcessesByEntityId': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/datadeletionprocess/{entityId}'.replace('{entityId}', entityId);

break;
case 'GetAllDataDeletionProcessesUpToDate': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/datadeletionprocess';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAllDataDeletionProcesses': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/datadeletionprocess';

break;
case 'GetAllDataProtectionRegimes': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/regime';

break;
case 'GetDataProtectionRegime': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/regime/{id}'.replace('{id}', id);

break;
case 'GetAllEntityCheckConfigurations': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/entitycheckconfiguration';

break;
case 'GetEntityCheckConfigurationById': configurationId = base.getNodeParameter('configurationId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/entitycheckconfiguration/{configurationId}'.replace('{configurationId}', configurationId);

break;
case 'GetEntityCheckConfigurationVersionById': configurationId = base.getNodeParameter('configurationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/entitycheckconfiguration/{configurationId}/version/{versionNumber}'.replace('{configurationId}', configurationId).replace('{versionNumber}', versionNumber);

break;
case 'GetEntityCheckRequirements': type = base.getNodeParameter('type', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/entitycheckrequirements/{type}'.replace('{type}', type);

break;
case 'GetLatestEntityCheckVerification': type = base.getNodeParameter('type', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/entitycheckverification/{type}'.replace('{type}', type);

break;
case 'GetUnsubscribeBatchByEntityIdAndJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/ongoingscreening/{journeyId}/entity/{entityId}'.replace('{journeyId}', journeyId).replace('{entityId}', entityId);

break;
case 'GetAllOrphanEntities': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/orphanentity';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetOrphanEntityById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/dataprotectionquery/api/orphanentity/{id}'.replace('{id}', id);

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
    FenergoNebulaDataProtectionQueryv10Properties,
    ExecuteFenergoNebulaDataProtectionQueryv10
}
