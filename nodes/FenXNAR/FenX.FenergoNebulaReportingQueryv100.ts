import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaReportingQueryv100Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get entities created report', value: 'GetEntityCreatedReport' },{ name: 'Get entities created file report', value: 'GetEntityCreatedFileReport' },{ name: 'Get entities updated report', value: 'GetEntityUpdatedReport' },{ name: 'Get entities updated file report', value: 'GetEntityUpdatedFileReport' },{ name: 'Get report for journey started property', value: 'GetJourneyStartedReport' },{ name: 'Get file report for journey started property', value: 'GetJourneyStartedFileReport' },{ name: 'Get report for journey completed property', value: 'GetJourneyCompletedReport' },{ name: 'Get file report for journey completed property', value: 'GetJourneyCompletedFileReport' },{ name: 'Get report for journey updated property', value: 'GetJourneyUpdatedReport' },{ name: 'Get file report for journey updated property', value: 'GetJourneyUpdatedFileReport' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaReportingQueryv100',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6360337+00:00", "endDate": "2024-10-07T13:46:57.6360400+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntityCreatedReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6360725+00:00", "endDate": "2024-10-07T13:46:57.6360737+00:00", "fileFormat": "csv" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntityCreatedFileReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6360856+00:00", "endDate": "2024-10-07T13:46:57.6360872+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntityUpdatedReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6360942+00:00", "endDate": "2024-10-07T13:46:57.6360959+00:00", "fileFormat": "csv" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntityUpdatedFileReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6361045+00:00", "endDate": "2024-10-07T13:46:57.6361053+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneyStartedReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6361130+00:00", "endDate": "2024-10-07T13:46:57.6361138+00:00", "fileFormat": "csv" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneyStartedFileReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6399440+00:00", "endDate": "2024-10-07T13:46:57.6399599+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneyCompletedReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6400049+00:00", "endDate": "2024-10-07T13:46:57.6400065+00:00", "fileFormat": "csv" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneyCompletedFileReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6400202+00:00", "endDate": "2024-10-07T13:46:57.6401627+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneyUpdatedReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "2024-10-07T13:46:57.6401991+00:00", "endDate": "2024-10-07T13:46:57.6402006+00:00", "fileFormat": "csv" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneyUpdatedFileReport' ], domain: [ 'FenergoNebulaReportingQueryv100' ] } } }
];

async function ExecuteFenergoNebulaReportingQueryv100(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'GetEntityCreatedReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/entity-report/entity-created-report';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityCreatedFileReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/entity-report/entity-created-report/file';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityUpdatedReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/entity-report/entity-updated-report';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityUpdatedFileReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/entity-report/entity-updated-report/file';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetJourneyStartedReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/journey-report/journey-started-report';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetJourneyStartedFileReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/journey-report/journey-started-report/file';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetJourneyCompletedReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/journey-report/journey-completed-report';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetJourneyCompletedFileReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/journey-report/journey-completed-report/file';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetJourneyUpdatedReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/journey-report/journey-updated-report';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetJourneyUpdatedFileReport': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/reportingquery/api/journey-report/journey-updated-report/file';

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
    FenergoNebulaReportingQueryv100Properties,
    ExecuteFenergoNebulaReportingQueryv100
}
