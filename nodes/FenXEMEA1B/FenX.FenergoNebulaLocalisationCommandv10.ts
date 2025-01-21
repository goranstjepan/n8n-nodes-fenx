import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaLocalisationCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create a new Localisation', value: 'CreateLocalisation' },{ name: 'Update Localisations Settings.', value: 'UpdateLocalisation' },{ name: 'Delete Localisation and all it"s versions', value: 'DeleteLocalisation' },{ name: 'Create a new Version for an existing Localisation', value: 'CreateLocalisationVersion' },{ name: 'Updates an existing Version of a Localisation', value: 'UpdateLocalisationVersion' },{ name: 'Delete an existing Version of a Localisation', value: 'DeleteLocalisationVersion' },{ name: 'Submit an existing Version of a Localisation for Approval', value: 'SubmitLocalisationVersion' },{ name: 'Sign an existing Version of a Localisation', value: 'SignLocalisationVersion' },{ name: 'Archive an existing Version of a Localisation', value: 'ArchiveLocalisationVersion' },{ name: 'Create a new Localisation Context', value: 'CreateLocalisationContext' },{ name: 'Update Localisation Context Metadata.', value: 'UpdateLocalisationContextMetadata' },{ name: 'Delete Localisation Context', value: 'DeleteLocalisationContext' },{ name: 'Update Localisation Context file by uploading a json file less than 5MB', value: 'UpdateLocalisationContextFileLite' },{ name: 'Delete Localisation Context file', value: 'DeleteLocalisationContextFile' },{ name: 'Validate Localisation Context File, Update Data Model and Refresh Cache if Pass Validation.', value: 'ValidateContextAndRefreshCache' },{ name: 'Create or Update the user language preference', value: 'UpdateUserPreference' },{ name: 'Delete the user language preference', value: 'DeleteUserPreference' },{ name: 'Set user localisation to System Language', value: 'UpdateUserPreferenceToSystemDefault' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaLocalisationCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateLocalisation' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'Localisation Id', displayOptions: { show: { endpoint: [ 'DeleteLocalisation' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'CreateLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Number of version to update', displayOptions: { show: { endpoint: [ 'UpdateLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'Localisation Id', displayOptions: { show: { endpoint: [ 'DeleteLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'SubmitLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to submit', displayOptions: { show: { endpoint: [ 'SubmitLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'SignLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to sign', displayOptions: { show: { endpoint: [ 'SignLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'ArchiveLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to archive', displayOptions: { show: { endpoint: [ 'ArchiveLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'CreateLocalisationContext' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'CreateLocalisationContext' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'Localisation Id', displayOptions: { show: { endpoint: [ 'UpdateLocalisationContextMetadata' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version Number', displayOptions: { show: { endpoint: [ 'UpdateLocalisationContextMetadata' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'contextName', name: 'contextName', type: 'string', required: true, default: '', description: 'Context Name', displayOptions: { show: { endpoint: [ 'UpdateLocalisationContextMetadata' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'Localisation Id', displayOptions: { show: { endpoint: [ 'DeleteLocalisationContext' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version Number', displayOptions: { show: { endpoint: [ 'DeleteLocalisationContext' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'contextName', name: 'contextName', type: 'string', required: true, default: '', description: 'Context Name', displayOptions: { show: { endpoint: [ 'DeleteLocalisationContext' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'Localisation Id', displayOptions: { show: { endpoint: [ 'UpdateLocalisationContextFileLite' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version Number', displayOptions: { show: { endpoint: [ 'UpdateLocalisationContextFileLite' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'contextName', name: 'contextName', type: 'string', required: true, default: '', description: 'Context Name', displayOptions: { show: { endpoint: [ 'UpdateLocalisationContextFileLite' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'Localisation Id', displayOptions: { show: { endpoint: [ 'DeleteLocalisationContextFile' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version Number', displayOptions: { show: { endpoint: [ 'DeleteLocalisationContextFile' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'contextName', name: 'contextName', type: 'string', required: true, default: '', description: 'Context Name', displayOptions: { show: { endpoint: [ 'DeleteLocalisationContextFile' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'localisationId', name: 'localisationId', type: 'string', required: true, default: '', description: 'Localisation Id', displayOptions: { show: { endpoint: [ 'ValidateContextAndRefreshCache' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version Number', displayOptions: { show: { endpoint: [ 'ValidateContextAndRefreshCache' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'contextName', name: 'contextName', type: 'string', required: true, default: '', description: 'Context Name', displayOptions: { show: { endpoint: [ 'ValidateContextAndRefreshCache' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "localisationId": "localisationId", "localisationIsoCode": "localisationIsoCode", "versionNumber": 0, "effectiveFrom": "2025-01-21T08:34:28.1332754+00:00", "created": "2025-01-21T08:34:28.1332793+00:00", "status": "Draft", "isDefaultLocalisation": false, "initialiseLanguageWithDefaultData": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1333227+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1333359+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1333481+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1333597+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLocalisation' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "isDefaultLocalisation": false }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLocalisation' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "localisationId": "localisationId", "localisationIsoCode": "localisationIsoCode", "versionNumber": 0, "effectiveFrom": "2025-01-21T08:34:28.1342444+00:00", "created": "2025-01-21T08:34:28.1342472+00:00", "status": "Draft", "isDefaultLocalisation": false, "initialiseLanguageWithDefaultData": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1342818+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1342945+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1343062+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1343172+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "localisationId": "localisationId", "localisationIsoCode": "localisationIsoCode", "isNumberSeparatorEnabled": false, "isMasterFileEnabled": false, "versionNumber": 0, "effectiveFrom": "2025-01-21T08:34:28.1346010+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1346349+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1346479+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1346592+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1346710+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1354550+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignLocalisationVersion' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "description": "description", "displayName": "displayName", "values": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLocalisationContext' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "description": "description" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLocalisationContextMetadata' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "localisationId": "localisationId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateUserPreference' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } },{ displayName: 'displayName', name: 'displayName', type: 'string', required: true, default: '', description: 'Display Name', displayOptions: { show: { endpoint: [ 'UpdateLocalisationContextFileLite' ], domain: [ 'FenergoNebulaLocalisationCommandv10' ] } } }
];

async function ExecuteFenergoNebulaLocalisationCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let localisationId=''; let versionNumber=''; let contextName='';
switch(endpoint){ case 'CreateLocalisation': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisation';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateLocalisation': localisationId = base.getNodeParameter('localisationId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisation/{localisationId}'.replace('{localisationId}', localisationId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLocalisation': localisationId = base.getNodeParameter('localisationId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisation/{localisationId}'.replace('{localisationId}', localisationId);

break;
case 'CreateLocalisationVersion': localisationId = base.getNodeParameter('localisationId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisation/{localisationId}'.replace('{localisationId}', localisationId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateLocalisationVersion': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisation/{localisationId}/version/{versionNumber}'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLocalisationVersion': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisation/{localisationId}/version/{versionNumber}'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber);

break;
case 'SubmitLocalisationVersion': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisation/{localisationId}/version/{versionNumber}/submit-for-approval'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber);

break;
case 'SignLocalisationVersion': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisation/{localisationId}/version/{versionNumber}/sign'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveLocalisationVersion': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisation/{localisationId}/version/{versionNumber}/archive'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber);

break;
case 'CreateLocalisationContext': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisationcontext/{localisationId}/version/{versionNumber}'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateLocalisationContextMetadata': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
contextName = base.getNodeParameter('contextName', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisationcontext/{localisationId}/version/{versionNumber}/context/{contextName}/metadata'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber).replace('{contextName}', contextName);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLocalisationContext': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
contextName = base.getNodeParameter('contextName', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisationcontext/{localisationId}/version/{versionNumber}/context/{contextName}'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber).replace('{contextName}', contextName);

break;
case 'UpdateLocalisationContextFileLite': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
contextName = base.getNodeParameter('contextName', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisationcontext/{localisationId}/version/{versionNumber}/context/{contextName}/filelite'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber).replace('{contextName}', contextName);
requestOptions.qs = { displayName: base.getNodeParameter('displayName', 0) as string };
break;
case 'DeleteLocalisationContextFile': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
contextName = base.getNodeParameter('contextName', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisationcontext/{localisationId}/version/{versionNumber}/context/{contextName}/file'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber).replace('{contextName}', contextName);

break;
case 'ValidateContextAndRefreshCache': localisationId = base.getNodeParameter('localisationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
contextName = base.getNodeParameter('contextName', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/localisationcontext/{localisationId}/version/{versionNumber}/context/{contextName}/validate'.replace('{localisationId}', localisationId).replace('{versionNumber}', versionNumber).replace('{contextName}', contextName);

break;
case 'UpdateUserPreference': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/userpreference';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteUserPreference': 
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/userpreference';

break;
case 'UpdateUserPreferenceToSystemDefault': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/localisationcommand/api/userpreference/systemdefault';

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
    FenergoNebulaLocalisationCommandv10Properties,
    ExecuteFenergoNebulaLocalisationCommandv10
}
