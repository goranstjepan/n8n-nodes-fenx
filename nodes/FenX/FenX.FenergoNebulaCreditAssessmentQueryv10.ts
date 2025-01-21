import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaCreditAssessmentQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get all Automated Credit Assessment Enquiries.', value: 'GetAutomatedCreditAssessments' },{ name: 'Get an Automated Credit Assessment Enquiry by Id.', value: 'GetAutomatedCreditAssessmentById' },{ name: 'Get an Automated Credit Assessment Enquiry Snapshot by Automated Credit Assessment Enquiry Id.', value: 'GetAutomatedCreditAssessmentSnapshotById' },{ name: 'Get an Automated Credit Assessment by Entity, Journey and Task Id.', value: 'GetAutomatedCreditAssessmentByEntityJourneyTaskId' },{ name: 'Get an Automated Credit Assessment by Journey Id.', value: 'GetAutomatedCreditAssessmentByJourneyId' },{ name: 'Get a Credit Assessment Set with all and latest version of credit assessments', value: 'GetCreditAssessmentSetById' },{ name: 'Get a Credit Assessment Set with all and latest version of credit assessments by JourneyId', value: 'GetCreditAssessmentSetByJourneyId' },{ name: 'Get a Credit Assessment by Id', value: 'GetCreditAssessmentById' },{ name: 'Get a Credit Assessment by Task Id', value: 'GetCreditAssessmentByTaskId' },{ name: 'Get a Credit Assessment Snapshot by creditAssessmentId and versionNumber', value: 'GetCreditAsssessmentSnapshot' },{ name: 'Get a Credit Assessment History by journeyId', value: 'GetHistoryByJourneyId' },{ name: 'Get a Credit Assessment History Snapshot by taskId', value: 'GetHistorySnapshotByTaskId' },{ name: 'Get all Automated Credit Assessment Providers.', value: 'GetAllCreditAssessmentProviders' },{ name: 'Get Automated Credit Assessment Providers by Id.', value: 'GetCreditAssessmentProvidersById' },{ name: 'Get all Automated Credit Assessment Providers Configurations.', value: 'GetAllCreditAssessmentProvidersConfiguration' },{ name: 'Get Automated Credit Assessment Providers by Id.', value: 'GetProviderConfigurationById' },{ name: 'Get all Automated Credit Assessment Providers Mapping Configurations.', value: 'GetAllMappingConfiguration' },{ name: 'Get Automated Credit Assessment Mapping Configuration by Provider Id.', value: 'GetMappingConfigurationByProviderId' },{ name: 'Get all Automated Credit Assessment Providers Adapter Schemas.', value: 'GetAllAdapterSchema' },{ name: 'Get Automated Credit Assessment Adapter Schema by Provider Id.', value: 'GetAdapterSchema' },{ name: 'Get a test result for a Provider by Provider Id', value: 'GetProviderTestResult' },{ name: 'Gets a summarised result of the statuses associated with a provider.', value: 'GetCreditAssessmentProviderConfigurationSummaryByProviderId' },{ name: 'Gets a summarised result of the statuses associated with a provider.', value: 'GetCreditAssessmentProviderConfigurationSummaries' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaCreditAssessmentQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetAutomatedCreditAssessmentById' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetAutomatedCreditAssessmentSnapshotById' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetAutomatedCreditAssessmentByEntityJourneyTaskId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetAutomatedCreditAssessmentByEntityJourneyTaskId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetAutomatedCreditAssessmentByEntityJourneyTaskId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetAutomatedCreditAssessmentByJourneyId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The id of the Credit Assessment Set to retrieve', displayOptions: { show: { endpoint: [ 'GetCreditAssessmentSetById' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The Journey Id of the Credit Assessment Set to retrieve', displayOptions: { show: { endpoint: [ 'GetCreditAssessmentSetByJourneyId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'assessmentId', name: 'assessmentId', type: 'string', required: true, default: '', description: 'The id of the Credit Assessment to retrieve', displayOptions: { show: { endpoint: [ 'GetCreditAssessmentById' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'The corresponding task id of the Credit Assessment to retrieve', displayOptions: { show: { endpoint: [ 'GetCreditAssessmentByTaskId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'assessmentId', name: 'assessmentId', type: 'string', required: true, default: '', description: 'The credit assessment id', displayOptions: { show: { endpoint: [ 'GetCreditAsssessmentSnapshot' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The credit assessment version number', displayOptions: { show: { endpoint: [ 'GetCreditAsssessmentSnapshot' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The credit assessment journeyId', displayOptions: { show: { endpoint: [ 'GetHistoryByJourneyId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'The credit assessment taskId', displayOptions: { show: { endpoint: [ 'GetHistorySnapshotByTaskId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditAssessmentProvidersById' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetProviderConfigurationById' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetMappingConfigurationByProviderId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetAdapterSchema' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetProviderTestResult' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetCreditAssessmentProviderConfigurationSummaryByProviderId' ], domain: [ 'FenergoNebulaCreditAssessmentQueryv10' ] } } }
];

async function ExecuteFenergoNebulaCreditAssessmentQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let entityId=''; let journeyId=''; let taskId=''; let setId=''; let assessmentId=''; let versionNumber=''; let providerId='';
switch(endpoint){ case 'GetAutomatedCreditAssessments': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/auto';

break;
case 'GetAutomatedCreditAssessmentById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/auto/{id}'.replace('{id}', id);

break;
case 'GetAutomatedCreditAssessmentSnapshotById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/auto/{id}/snapshot'.replace('{id}', id);

break;
case 'GetAutomatedCreditAssessmentByEntityJourneyTaskId': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/auto/entity/{entityId}/journey/{journeyId}/task/{taskId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetAutomatedCreditAssessmentByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/auto/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetCreditAssessmentSetById': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/creditassessment/set/{setId}'.replace('{setId}', setId);

break;
case 'GetCreditAssessmentSetByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/creditassessment/set/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetCreditAssessmentById': assessmentId = base.getNodeParameter('assessmentId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/creditassessment/assessment/{assessmentId}'.replace('{assessmentId}', assessmentId);

break;
case 'GetCreditAssessmentByTaskId': taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/creditassessment/assessment/task/{taskId}'.replace('{taskId}', taskId);

break;
case 'GetCreditAsssessmentSnapshot': assessmentId = base.getNodeParameter('assessmentId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/creditassessment/assessment/{assessmentId}/version/{versionNumber}/snapshot'.replace('{assessmentId}', assessmentId).replace('{versionNumber}', versionNumber);

break;
case 'GetHistoryByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/creditassessment/journey/{journeyId}/history'.replace('{journeyId}', journeyId);

break;
case 'GetHistorySnapshotByTaskId': taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/creditassessment/task/{taskId}/historysnapshot'.replace('{taskId}', taskId);

break;
case 'GetAllCreditAssessmentProviders': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers';

break;
case 'GetCreditAssessmentProvidersById': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/{providerId}'.replace('{providerId}', providerId);

break;
case 'GetAllCreditAssessmentProvidersConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/configurations';

break;
case 'GetProviderConfigurationById': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/{providerId}/configuration'.replace('{providerId}', providerId);

break;
case 'GetAllMappingConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/mappingconfigurations';

break;
case 'GetMappingConfigurationByProviderId': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/{providerId}/mappingconfiguration'.replace('{providerId}', providerId);

break;
case 'GetAllAdapterSchema': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/adapterSchemas';

break;
case 'GetAdapterSchema': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/{providerId}/adapterSchema'.replace('{providerId}', providerId);

break;
case 'GetProviderTestResult': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/{providerId}/test'.replace('{providerId}', providerId);

break;
case 'GetCreditAssessmentProviderConfigurationSummaryByProviderId': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/{providerId}/configurationSummary'.replace('{providerId}', providerId);

break;
case 'GetCreditAssessmentProviderConfigurationSummaries': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/creditassessmentquery/api/providers/configurationSummaries';

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
    FenergoNebulaCreditAssessmentQueryv10Properties,
    ExecuteFenergoNebulaCreditAssessmentQueryv10
}
