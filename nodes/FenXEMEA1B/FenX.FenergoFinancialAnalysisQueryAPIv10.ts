import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoFinancialAnalysisQueryAPIv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get Capacity to Service Set with latest Version by Journey, Task Id', value: 'GetAllocationSetByJourneyTaskId' },{ name: 'Get a Capacity to Service Set of specified Id with all Version data', value: 'GetAllocationSetById' },{ name: 'Get a Capacity to Service Version of specified Id', value: 'GetAllocationVersionById' },{ name: 'Get a Capacity to Service Schema by Set, Version Id', value: 'GetAllocationSchema' },{ name: 'Get all Capacity to Service Configurations for the client tenant', value: 'GetAllAllocationConfigurations' },{ name: 'Get an active version of an existing Capacity to Service Configuration by ID', value: 'GetAllocationConfigurationById' },{ name: 'Get a specific version of an existing Capacity to Service Configuration', value: 'GetAllocationConfigurationVersionByVersionNumber' },{ name: 'Get all Configurations for the client tenant', value: 'GetAllConfigurations' },{ name: 'Get an active version of an existing Configuration by ID', value: 'GetConfigurationById' },{ name: 'Get a specific version of an existing Configuration', value: 'GetConfigurationVersionByVersionNumber' },{ name: 'Get all Financial Analysis Sets by Entity Id without Version data', value: 'GetFinancialAnalysisSetByEntityId' },{ name: 'Get the latest Financial Analysis Version by Entity, Journey, Task Id', value: 'GetFinancialAnalysisSetByEntityJourneyTaskId' },{ name: 'Get Financial Analysis Sets by Journey, Task Id', value: 'GetFinancialAnalysisSetsByJourneyTaskId' },{ name: 'Get a Financial Analysis Set of specified Id with all Version data', value: 'GetFinancialAnalysisSetById' },{ name: 'Get a Financial Analysis Version of specified Id', value: 'GetFinancialAnalysisVersionById' },{ name: 'Get a Financial Analysis Scenario By Financial Analysis Version Id', value: 'GetScenario' },{ name: 'Get a Financial Analysis Summary By Financial Analysis Version Id', value: 'GetSummary' },{ name: 'Get a Financial Analysis Schema by Set, Version Id', value: 'GetSchema' },{ name: 'Get the Financial Import by Id', value: 'GetFinancialImportById' },{ name: 'Get all Financial Imports by Entity and Journey Id', value: 'GetFinanciaImportsByEntityAndJourneyId' },{ name: 'Get all Import Providers', value: 'GetAllImportProviders' },{ name: 'Get the Import Provider by Id with configuration details', value: 'GetImportProviderById' },{ name: 'Get all Import Mappings', value: 'GetAllImportMappings' },{ name: 'Get the Import Mapping by Provider Id', value: 'GetImportMappingByProviderId' },{ name: 'Get the Adapter Schema by Provider Id', value: 'GetAdapterSchemaByProviderId' },{ name: 'Gets a summarised result of the statuses associated with an import provider.', value: 'GetImportProviderConfigurationSummaryByProviderId' },{ name: 'Gets a summarised result of the statuses associated with an import provider.', value: 'GetImportProviderConfigurationSummaries' },{ name: 'Retrieve a Financial Analysis report for specific version.', value: 'GetFinancialAnalysisReportBySetIdAndVersionId' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoFinancialAnalysisQueryAPIv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'GetAllocationSetByJourneyTaskId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'Task Id', displayOptions: { show: { endpoint: [ 'GetAllocationSetByJourneyTaskId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The Id of the Capacity to Service Set', displayOptions: { show: { endpoint: [ 'GetAllocationSetById' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the Capacity to Service Version to retrieve', displayOptions: { show: { endpoint: [ 'GetAllocationVersionById' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The Id of the Capacity to Service Set', displayOptions: { show: { endpoint: [ 'GetAllocationSchema' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'versionId', name: 'versionId', type: 'string', required: true, default: '', description: 'The id of the Capacity to Service Version', displayOptions: { show: { endpoint: [ 'GetAllocationSchema' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'configurationId', name: 'configurationId', type: 'string', required: true, default: '', description: 'The id of the Capacity to Service configuration to retrieve', displayOptions: { show: { endpoint: [ 'GetAllocationConfigurationById' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'configurationId', name: 'configurationId', type: 'string', required: true, default: '', description: 'The Id of existing model', displayOptions: { show: { endpoint: [ 'GetAllocationConfigurationVersionByVersionNumber' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number to retrieve', displayOptions: { show: { endpoint: [ 'GetAllocationConfigurationVersionByVersionNumber' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'configurationId', name: 'configurationId', type: 'string', required: true, default: '', description: 'The id of the configuration to retrieve', displayOptions: { show: { endpoint: [ 'GetConfigurationById' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'configurationId', name: 'configurationId', type: 'string', required: true, default: '', description: 'The Id of existing model', displayOptions: { show: { endpoint: [ 'GetConfigurationVersionByVersionNumber' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number to retrieve', displayOptions: { show: { endpoint: [ 'GetConfigurationVersionByVersionNumber' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The id of the entity that linked to the Financial Analysis Sets', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisSetByEntityId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The id of the entity that linked to the Financial Analysis Sets', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisSetByEntityJourneyTaskId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisSetByEntityJourneyTaskId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'Task Id', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisSetByEntityJourneyTaskId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisSetsByJourneyTaskId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'Task Id', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisSetsByJourneyTaskId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The Id of the Financial Analysis Set', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisSetById' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the Financial Analysis Version to retrieve', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisVersionById' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'versionId', name: 'versionId', type: 'string', required: true, default: '', description: 'The id of the Financial Analysis Version', displayOptions: { show: { endpoint: [ 'GetScenario' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'versionId', name: 'versionId', type: 'string', required: true, default: '', description: 'The id of the Financial Analysis Version', displayOptions: { show: { endpoint: [ 'GetSummary' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The Id of the Financial Analysis Set', displayOptions: { show: { endpoint: [ 'GetSchema' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'versionId', name: 'versionId', type: 'string', required: true, default: '', description: 'The id of the Financial Analysis Version', displayOptions: { show: { endpoint: [ 'GetSchema' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the Financial Import', displayOptions: { show: { endpoint: [ 'GetFinancialImportById' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The id of the entity that linked to the Financial Import', displayOptions: { show: { endpoint: [ 'GetFinanciaImportsByEntityAndJourneyId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The id of the journey that linked to the Financial Import', displayOptions: { show: { endpoint: [ 'GetFinanciaImportsByEntityAndJourneyId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The id of the Import Provider', displayOptions: { show: { endpoint: [ 'GetImportProviderById' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The id of the Import Provider', displayOptions: { show: { endpoint: [ 'GetImportMappingByProviderId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The id of the Import Provider', displayOptions: { show: { endpoint: [ 'GetAdapterSchemaByProviderId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetImportProviderConfigurationSummaryByProviderId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The id of Financial Analysis Set', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisReportBySetIdAndVersionId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } },{ displayName: 'versionId', name: 'versionId', type: 'string', required: true, default: '', description: 'Financial Analysis Version Id', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisReportBySetIdAndVersionId' ], domain: [ 'FenergoFinancialAnalysisQueryAPIv10' ] } } }
];

async function ExecuteFenergoFinancialAnalysisQueryAPIv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let journeyId=''; let taskId=''; let setId=''; let id=''; let versionId=''; let configurationId=''; let versionNumber=''; let entityId=''; let providerId='';
switch(endpoint){ case 'GetAllocationSetByJourneyTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/allocation/set/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetAllocationSetById': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/allocation/set/{setId}'.replace('{setId}', setId);

break;
case 'GetAllocationVersionById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/allocation/{id}'.replace('{id}', id);

break;
case 'GetAllocationSchema': setId = base.getNodeParameter('setId', 0) as string;
versionId = base.getNodeParameter('versionId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/allocation/set/{setId}/version/{versionId}/schema'.replace('{setId}', setId).replace('{versionId}', versionId);

break;
case 'GetAllAllocationConfigurations': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/configuration/allocation';

break;
case 'GetAllocationConfigurationById': configurationId = base.getNodeParameter('configurationId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/configuration/allocation/{configurationId}'.replace('{configurationId}', configurationId);

break;
case 'GetAllocationConfigurationVersionByVersionNumber': configurationId = base.getNodeParameter('configurationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/configuration/allocation/{configurationId}/version/{versionNumber}'.replace('{configurationId}', configurationId).replace('{versionNumber}', versionNumber);

break;
case 'GetAllConfigurations': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/configuration';

break;
case 'GetConfigurationById': configurationId = base.getNodeParameter('configurationId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/configuration/{configurationId}'.replace('{configurationId}', configurationId);

break;
case 'GetConfigurationVersionByVersionNumber': configurationId = base.getNodeParameter('configurationId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/configuration/{configurationId}/version/{versionNumber}'.replace('{configurationId}', configurationId).replace('{versionNumber}', versionNumber);

break;
case 'GetFinancialAnalysisSetByEntityId': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/financialanalysis/set/entity/{entityId}/lite'.replace('{entityId}', entityId);

break;
case 'GetFinancialAnalysisSetByEntityJourneyTaskId': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/financialanalysis/set/entity/{entityId}/journey/{journeyId}/task/{taskId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetFinancialAnalysisSetsByJourneyTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/financialanalysis/set/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetFinancialAnalysisSetById': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/financialanalysis/set/{setId}'.replace('{setId}', setId);

break;
case 'GetFinancialAnalysisVersionById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/financialanalysis/{id}'.replace('{id}', id);

break;
case 'GetScenario': versionId = base.getNodeParameter('versionId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/financialanalysis/version/{versionId}/scenario'.replace('{versionId}', versionId);

break;
case 'GetSummary': versionId = base.getNodeParameter('versionId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/financialanalysis/version/{versionId}/summary'.replace('{versionId}', versionId);

break;
case 'GetSchema': setId = base.getNodeParameter('setId', 0) as string;
versionId = base.getNodeParameter('versionId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/financialanalysis/set/{setId}/version/{versionId}/schema'.replace('{setId}', setId).replace('{versionId}', versionId);

break;
case 'GetFinancialImportById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/import/{id}'.replace('{id}', id);

break;
case 'GetFinanciaImportsByEntityAndJourneyId': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/import/entity/{entityId}/journey/{journeyId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId);

break;
case 'GetAllImportProviders': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/import/provider';

break;
case 'GetImportProviderById': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/import/provider/{providerId}'.replace('{providerId}', providerId);

break;
case 'GetAllImportMappings': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/import/provider/mapping';

break;
case 'GetImportMappingByProviderId': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/import/provider/{providerId}/mapping'.replace('{providerId}', providerId);

break;
case 'GetAdapterSchemaByProviderId': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/import/provider/{providerId}/adapterSchema'.replace('{providerId}', providerId);

break;
case 'GetImportProviderConfigurationSummaryByProviderId': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/import/provider/{providerId}/configurationSummary'.replace('{providerId}', providerId);

break;
case 'GetImportProviderConfigurationSummaries': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/import/provider/configurationSummaries';

break;
case 'GetFinancialAnalysisReportBySetIdAndVersionId': setId = base.getNodeParameter('setId', 0) as string;
versionId = base.getNodeParameter('versionId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/financialanalysisquery/api/report/set/{setId}/version/{versionId}'.replace('{setId}', setId).replace('{versionId}', versionId);

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
    FenergoFinancialAnalysisQueryAPIv10Properties,
    ExecuteFenergoFinancialAnalysisQueryAPIv10
}
