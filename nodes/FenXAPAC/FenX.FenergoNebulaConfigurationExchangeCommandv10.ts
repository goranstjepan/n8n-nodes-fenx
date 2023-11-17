import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaConfigurationExchangeCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create new ConfigurationEnvironment', value: 'CreateConfigurationEnvironment' },{ name: 'Update existing ConfigurationEnvironment', value: 'UpdateConfigurationEnvironment' },{ name: 'Create new ImportRecord', value: 'CreateImportRecord' },{ name: 'Create new ImportSession', value: 'CreateImportSession' },{ name: 'Adds logs to an import session', value: 'AddSessionLogs' },{ name: 'Close import phase', value: 'CloseImportPhase' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaConfigurationExchangeCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing ConfigurationEnvironment to update', displayOptions: { show: { endpoint: [ 'UpdateConfigurationEnvironment' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'sessionId', name: 'sessionId', type: 'string', required: true, default: '', description: 'The id of the import session', displayOptions: { show: { endpoint: [ 'AddSessionLogs' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'sessionId', name: 'sessionId', type: 'string', required: true, default: '', description: 'The id of the import session', displayOptions: { show: { endpoint: [ 'CloseImportPhase' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "name": "name", "authorisationLoginUri": "authorisationLoginUri", "configurationQueryUri": "configurationQueryUri" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateConfigurationEnvironment' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "name": "name", "authorisationLoginUri": "authorisationLoginUri", "configurationQueryUri": "configurationQueryUri" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateConfigurationEnvironment' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "sourceTenantId": "sourceTenantId", "importStatus": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateImportRecord' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sourceTenant": "sourceTenant", "sourceTenantName": "sourceTenantName", "description": "description", "importInPublishedState": false, "configAsOfDate": "2023-11-17T13:26:05.3931697+00:00", "configEnvironmentId": "configEnvironmentId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateImportSession' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sessionId": "sessionId", "entries": [ { "resultParameters": {}, "errorMessage": "errorMessage", "resultBulletPoints": {}, "logStatus": "None", "sourceConfigId": "sourceConfigId", "configType": "configType", "configName": "configName", "logType": "None", "date": "2023-11-17T13:26:05.3932041+00:00" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddSessionLogs' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sessionId": "sessionId", "currentPhaseIndex": 0, "nextPhaseType": "Selection", "description": "description", "importInPublishedState": false, "configAsOfDate": "2023-11-17T13:26:05.3932314+00:00", "items": [ { "configId": "configId", "targetConfigId": "targetConfigId", "configVersion": { "versionNumber": 0, "targetVersionNumber": 0, "isManuallySelected": false, "notes": "notes", "publicationDate": "2023-11-17T13:26:05.3932452+00:00" }, "configType": "configType", "type": "Selection", "status": "None", "name": "name", "errorMessage": "errorMessage" } ], "closeDate": "2023-11-17T13:26:05.3932550+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloseImportPhase' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } }
];

async function ExecuteFenergoNebulaConfigurationExchangeCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let sessionId='';
switch(endpoint){ case 'CreateConfigurationEnvironment': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/configexchangecommand/api/configuration-exchange';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateConfigurationEnvironment': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/configexchangecommand/api/configuration-exchange/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateImportRecord': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/configexchangecommand/api/import-history';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateImportSession': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/configexchangecommand/api/import-session';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'AddSessionLogs': sessionId = base.getNodeParameter('sessionId', 0) as string;
requestOptions.method = 'PATCH';
requestOptions.uri = 'https://api.apac1.fenergox.com/configexchangecommand/api/import-session/{sessionId}/log'.replace('{sessionId}', sessionId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CloseImportPhase': sessionId = base.getNodeParameter('sessionId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/configexchangecommand/api/import-session/{sessionId}/phase/current/close'.replace('{sessionId}', sessionId);

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
    FenergoNebulaConfigurationExchangeCommandv10Properties,
    ExecuteFenergoNebulaConfigurationExchangeCommandv10
}
