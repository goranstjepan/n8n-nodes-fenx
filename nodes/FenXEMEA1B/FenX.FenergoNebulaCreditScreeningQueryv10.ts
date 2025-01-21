import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaCreditScreeningQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get a Credit Screening Enquiry by Id.', value: 'GetCreditScreeningById' },{ name: 'Get a Credit Screening Enquiry Snapshot by Credit Screening Enquiry Id.', value: 'GetCreditScreeningSnapshotById' },{ name: 'Get a Credit Screening by Entity, Journey and Task Id.', value: 'GetCreditScreeningByEntityJoureyTaskId' },{ name: 'Get all Credit Screenings by Journey Id.', value: 'GetCreditScreeningByJourneyId' },{ name: 'Get all Credit Screenings by Journey and Task Id.', value: 'GetCreditScreeningByJoureyTaskId' },{ name: 'Get all Credit Screenings by Journey and Task Id which are in scope for this task.', value: 'GetInScopedCreditScreeningByJourneyTaskId' },{ name: 'Get the screening history for an entity.', value: 'GetScreeningHistoryByJourneyEntityId' },{ name: 'Get the screening history snapshot for an entity.', value: 'GetScreeningHistorySnapshotByEntityIdTaskId' },{ name: 'Get all Credit Screening Providers.', value: 'GetAllCreditScreeningProviders' },{ name: 'Get a Credit Screening Providers by Id.', value: 'GetCreditScreeningProvidersById' },{ name: 'Get all Credit Screening Providers Configurations.', value: 'GetAllCreditScreeningProvidersConfiguration' },{ name: 'Get a Credit Screening Provider Configuration by Provider Id.', value: 'GetCreditScreeningProviderConfigurationById' },{ name: 'Get all Credit Screening Providers Mapping Configurations.', value: 'GetAllCreditScreeningMappingConfiguration' },{ name: 'Get a Credit Screening Mapping Configuration by Provider Id.', value: 'GetCreditScreeningMappingConfigurationByProviderId' },{ name: 'Get a Credit Screening Adapter Schema by Provider Id.', value: 'GetCreditScreeningAdapterSchemaByProviderId' },{ name: 'Get a test result for a Provider by Provider Id', value: 'GetProviderTestResult' },{ name: 'Gets a summarised result of the statuses associated with a provider.', value: 'GetCreditScreeningProviderConfigurationSummaryByProviderId' },{ name: 'Gets a summarised result of the statuses associated with all provider that are associated with a tenant.', value: 'GetCreditScreeningProviderConfigurationSummaries' },{ name: 'Get Manual Credit Screening Set By SetId and their all their versions.', value: 'GetManualCreditScreeningBySetId' },{ name: 'Get the latest Manual Credit Screening version by their setId.', value: 'GetLatestManualCreditScreeningVersionBySetId' },{ name: 'Get a Manual Credit Screening Version by Set Id and version number', value: 'GetManualCreditScreeningVersionBySetIdVersionNumber' },{ name: 'Get a Manual Credit Screening Set and its latest Version by Entity, Journey and Task Id.', value: 'GetManualScreeningByEntityJourneyTaskId' },{ name: 'Get a list of Manual Credit Screening Set and its latest Version by Journey and Task Id.', value: 'GetManualScreeningByJourneyTaskId' },{ name: 'Get a list of Manual Credit Screening Set and its latest Version by Journey and Task Id, which are in-scope for this task.', value: 'GetInScopedManualScreeningByJourneyTaskId' },{ name: 'Get a Manual Credit Screening Version of a specified Id', value: 'GetManualCreditScreeningVersionById' },{ name: 'Get the latest Manual Credit Screening Version Snapshot', value: 'GetManualCreditScreeningSnapshotBySetIdQuery' },{ name: 'Get the list of latest Manual Credit Screening Version Snapshot', value: 'GetManualCreditScreeningSnapshotByJourneyTaskIdQuery' },{ name: 'Get a Manual Credit Screening Version Snapshot by version number', value: 'GetManualCreditScreeningSnapshotBySetIdAndVersionQuery' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaCreditScreeningQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningById' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningSnapshotById' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningByEntityJoureyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningByEntityJoureyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningByEntityJoureyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningByJourneyId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningByJoureyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningByJoureyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetInScopedCreditScreeningByJourneyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetInScopedCreditScreeningByJourneyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetScreeningHistoryByJourneyEntityId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetScreeningHistoryByJourneyEntityId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetScreeningHistorySnapshotByEntityIdTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetScreeningHistorySnapshotByEntityIdTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningProvidersById' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningProviderConfigurationById' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningMappingConfigurationByProviderId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningAdapterSchemaByProviderId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetProviderTestResult' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditScreeningProviderConfigurationSummaryByProviderId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetManualCreditScreeningBySetId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetLatestManualCreditScreeningVersionBySetId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The id of the Manual Credit Screening Version to retrieve', displayOptions: { show: { endpoint: [ 'GetManualCreditScreeningVersionBySetIdVersionNumber' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the Manual Credit Screening Version to retrieve', displayOptions: { show: { endpoint: [ 'GetManualCreditScreeningVersionBySetIdVersionNumber' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetManualScreeningByEntityJourneyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetManualScreeningByEntityJourneyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetManualScreeningByEntityJourneyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetManualScreeningByJourneyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetManualScreeningByJourneyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetInScopedManualScreeningByJourneyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetInScopedManualScreeningByJourneyTaskId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the Manual Credit Screening Version to retrieve', displayOptions: { show: { endpoint: [ 'GetManualCreditScreeningVersionById' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The set id of the Manual Credit Screening snapshot to retrieve', displayOptions: { show: { endpoint: [ 'GetManualCreditScreeningSnapshotBySetIdQuery' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey id of the Manual Credit Screening snapshot to retrieve', displayOptions: { show: { endpoint: [ 'GetManualCreditScreeningSnapshotByJourneyTaskIdQuery' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'The task id of the Manual Credit Screening snapshot to retrieve', displayOptions: { show: { endpoint: [ 'GetManualCreditScreeningSnapshotByJourneyTaskIdQuery' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The set id of the Manual Credit Screening snapshot to retrieve', displayOptions: { show: { endpoint: [ 'GetManualCreditScreeningSnapshotBySetIdAndVersionQuery' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the Manual Credit Screening snapshot to retrieve', displayOptions: { show: { endpoint: [ 'GetManualCreditScreeningSnapshotBySetIdAndVersionQuery' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'size', name: 'size', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetScreeningHistoryByJourneyEntityId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } },{ displayName: 'from', name: 'from', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetScreeningHistoryByJourneyEntityId' ], domain: [ 'FenergoNebulaCreditScreeningQueryv10' ] } } }
];

async function ExecuteFenergoNebulaCreditScreeningQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let entityId=''; let journeyId=''; let taskId=''; let providerId=''; let setId=''; let versionNumber='';
switch(endpoint){ case 'GetCreditScreeningById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/creditscreening/{id}'.replace('{id}', id);

break;
case 'GetCreditScreeningSnapshotById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/creditscreening/{id}/snapshot'.replace('{id}', id);

break;
case 'GetCreditScreeningByEntityJoureyTaskId': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/creditscreening/entity/{entityId}/journey/{journeyId}/task/{taskId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetCreditScreeningByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/creditscreening/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetCreditScreeningByJoureyTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/creditscreening/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetInScopedCreditScreeningByJourneyTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/creditscreening/journey/{journeyId}/task/{taskId}/screening-in-scope'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetScreeningHistoryByJourneyEntityId': journeyId = base.getNodeParameter('journeyId', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/entity/{entityId}/journey/{journeyId}/history'.replace('{journeyId}', journeyId).replace('{entityId}', entityId);
requestOptions.qs = { size: base.getNodeParameter('size', 0) as string,from: base.getNodeParameter('from', 0) as string };
break;
case 'GetScreeningHistorySnapshotByEntityIdTaskId': taskId = base.getNodeParameter('taskId', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/entity/{entityId}/task/{taskId}/historysnapshot'.replace('{taskId}', taskId).replace('{entityId}', entityId);

break;
case 'GetAllCreditScreeningProviders': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers';

break;
case 'GetCreditScreeningProvidersById': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers/{providerId}'.replace('{providerId}', providerId);

break;
case 'GetAllCreditScreeningProvidersConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers/configurations';

break;
case 'GetCreditScreeningProviderConfigurationById': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers/{providerId}/configuration'.replace('{providerId}', providerId);

break;
case 'GetAllCreditScreeningMappingConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers/mappingconfigurations';

break;
case 'GetCreditScreeningMappingConfigurationByProviderId': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers/{providerId}/mappingconfiguration'.replace('{providerId}', providerId);

break;
case 'GetCreditScreeningAdapterSchemaByProviderId': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers/{providerId}/adapterSchema'.replace('{providerId}', providerId);

break;
case 'GetProviderTestResult': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers/{providerId}/test'.replace('{providerId}', providerId);

break;
case 'GetCreditScreeningProviderConfigurationSummaryByProviderId': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers/{providerId}/configurationsummary'.replace('{providerId}', providerId);

break;
case 'GetCreditScreeningProviderConfigurationSummaries': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/providers/configurationsummary';

break;
case 'GetManualCreditScreeningBySetId': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/set/{setId}'.replace('{setId}', setId);

break;
case 'GetLatestManualCreditScreeningVersionBySetId': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/set/{setId}/version/latest'.replace('{setId}', setId);

break;
case 'GetManualCreditScreeningVersionBySetIdVersionNumber': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'GetManualScreeningByEntityJourneyTaskId': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/entity/{entityId}/journey/{journeyId}/task/{taskId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetManualScreeningByJourneyTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetInScopedManualScreeningByJourneyTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/journey/{journeyId}/task/{taskId}/screening-in-scope'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetManualCreditScreeningVersionById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/version/{id}'.replace('{id}', id);

break;
case 'GetManualCreditScreeningSnapshotBySetIdQuery': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/set/{setId}/snapshot/latest'.replace('{setId}', setId);

break;
case 'GetManualCreditScreeningSnapshotByJourneyTaskIdQuery': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/journey/{journeyId}/task/{taskId}/snapshot'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetManualCreditScreeningSnapshotBySetIdAndVersionQuery': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/creditscreeningquery/api/manual/set/{setId}/version/{versionNumber}/snapshot'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

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
    FenergoNebulaCreditScreeningQueryv10Properties,
    ExecuteFenergoNebulaCreditScreeningQueryv10
}
