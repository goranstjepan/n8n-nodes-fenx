import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaBusinessMetricsQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get all "journey completed time daily" records', value: 'GetAllJourneyCompletedTimeDailyRecords' },{ name: 'Get "journey completed time daily" records by date range and page', value: 'GetJourneyCompletedDailyRecordsByDateRange' },{ name: 'Get Journey Summary items', value: 'GetJourneySummaryitems' },{ name: 'Get daily task metrics by date range', value: 'GetTaskDailyMetricsByDateRange' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaBusinessMetricsQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "startDate", "endDate": "endDate", "numberOfRecordsToSkip": 0, "recordLimit": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneyCompletedDailyRecordsByDateRange' ], domain: [ 'FenergoNebulaBusinessMetricsQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyIds": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneySummaryitems' ], domain: [ 'FenergoNebulaBusinessMetricsQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "startDate": "startDate", "endDate": "endDate", "numberOfRecordsToSkip": 0, "recordLimit": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetTaskDailyMetricsByDateRange' ], domain: [ 'FenergoNebulaBusinessMetricsQueryv10' ] } } }
];

async function ExecuteFenergoNebulaBusinessMetricsQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'GetAllJourneyCompletedTimeDailyRecords': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/businessmetricsquery/api/journeycompletedelapsedtimedaily';

break;
case 'GetJourneyCompletedDailyRecordsByDateRange': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/businessmetricsquery/api/journeycompletedelapsedtimedaily/getjourneycompletedtimedailyrecordsbydaterange';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetJourneySummaryitems': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/businessmetricsquery/api/journeysummary';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetTaskDailyMetricsByDateRange': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/businessmetricsquery/api/taskdailymetrics/gettaskdailymetricsbydaterange';

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
    FenergoNebulaBusinessMetricsQueryv10Properties,
    ExecuteFenergoNebulaBusinessMetricsQueryv10
}
