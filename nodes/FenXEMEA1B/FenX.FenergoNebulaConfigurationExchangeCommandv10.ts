import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaConfigurationExchangeCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create new ConfigurationEnvironment', value: 'CreateConfigurationEnvironment' },{ name: 'Update existing ConfigurationEnvironment', value: 'UpdateConfigurationEnvironment' },{ name: 'Delete existing ConfigurationEnvironment', value: 'DeleteConfigurationEnvironment' },{ name: 'Create new ImportRecord', value: 'CreateImportRecord' },{ name: 'Create new ImportSession', value: 'CreateImportSession' },{ name: 'Adds logs to an import session', value: 'AddSessionLogs' },{ name: 'Close import phase', value: 'CloseImportPhase' }
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
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing ConfigurationEnvironment to update', displayOptions: { show: { endpoint: [ 'UpdateConfigurationEnvironment' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing ConfigurationEnvironment to delete', displayOptions: { show: { endpoint: [ 'DeleteConfigurationEnvironment' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'sessionId', name: 'sessionId', type: 'string', required: true, default: '', description: 'The id of the import session', displayOptions: { show: { endpoint: [ 'AddSessionLogs' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'sessionId', name: 'sessionId', type: 'string', required: true, default: '', description: 'The id of the import session', displayOptions: { show: { endpoint: [ 'CloseImportPhase' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "name": "name", "authorisationLoginUri": "authorisationLoginUri", "configurationQueryUri": "configurationQueryUri" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateConfigurationEnvironment' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "name": "name", "authorisationLoginUri": "authorisationLoginUri", "configurationQueryUri": "configurationQueryUri" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateConfigurationEnvironment' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "sourceTenantId": "sourceTenantId", "importStatus": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateImportRecord' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sourceTenant": "sourceTenant", "sourceTenantName": "sourceTenantName", "description": "description", "importInPublishedState": false, "configAsOfDate": "2025-01-21T08:34:25.6211160+00:00", "configEnvironmentId": "configEnvironmentId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateImportSession' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sessionId": "sessionId", "entries": [ { "resultParameters": {}, "errorMessage": "errorMessage", "resultBulletPoints": {}, "logStatus": "None", "sourceConfigId": "sourceConfigId", "configType": "configType", "configName": "configName", "logType": "None", "date": "2025-01-21T08:34:25.6213414+00:00" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddSessionLogs' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sessionId": "sessionId", "currentPhaseIndex": 0, "nextPhaseType": "Selection", "description": "description", "importInPublishedState": false, "configAsOfDate": "2025-01-21T08:34:25.6215766+00:00", "items": [ { "configId": "configId", "targetConfigId": "targetConfigId", "configVersion": { "versionNumber": 0, "targetVersionNumber": 0, "isManuallySelected": false, "notes": "notes", "publicationDate": "2025-01-21T08:34:25.6215988+00:00" }, "configType": "configType", "type": "Selection", "status": "None", "name": "name", "errorMessage": "errorMessage" } ], "closeDate": "2025-01-21T08:34:25.6216156+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloseImportPhase' ], domain: [ 'FenergoNebulaConfigurationExchangeCommandv10' ] } } }
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
requestOptions.uri = 'https://api.emea1b.fenergox.com/configexchangecommand/api/configuration-exchange';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateConfigurationEnvironment': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/configexchangecommand/api/configuration-exchange/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteConfigurationEnvironment': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/configexchangecommand/api/configuration-exchange/{id}'.replace('{id}', id);

break;
case 'CreateImportRecord': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/configexchangecommand/api/import-history';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateImportSession': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/configexchangecommand/api/import-session';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'AddSessionLogs': sessionId = base.getNodeParameter('sessionId', 0) as string;
requestOptions.method = 'PATCH';
requestOptions.uri = 'https://api.emea1b.fenergox.com/configexchangecommand/api/import-session/{sessionId}/log'.replace('{sessionId}', sessionId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CloseImportPhase': sessionId = base.getNodeParameter('sessionId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/configexchangecommand/api/import-session/{sessionId}/phase/current/close'.replace('{sessionId}', sessionId);

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
