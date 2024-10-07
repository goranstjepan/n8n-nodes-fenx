import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaAuditQueryv20Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get Audit Events for a specific list of resource IDs in a paged manner.', value: 'GetAuditEventsForMultipleResources' },{ name: 'Get Audit Events for a specific search term in a paged manner.', value: 'SearchByTerm' },{ name: 'Get Entity Specific Audit Events, grouped and summarized by the fields that have been updated in a paged manner.', value: 'GetGroupedEntityAuditEvents' },{ name: 'Get all Audit Events specific to an Entity, for a particular field.', value: 'GetEntityAuditEventsByFieldName' },{ name: 'Get Audit Events related to Screening for a group of Journey IDs in a paged manner', value: 'GetScreeningAuditEvents' },{ name: 'Get Audit Events related to a Journey in a paged manner', value: 'GetJourneyAuditEvents' },{ name: 'Get Financial Analysis audit events', value: 'GetFinancialAnalysisAuditEvents' },{ name: 'Get Entity Access Logs in a paged manner.', value: 'GetEntityQuerySideAuditEvents' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaAuditQueryv20',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetAuditEventsForMultipleResources' ], domain: [ 'FenergoNebulaAuditQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "searchTerm": "searchTerm" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchByTerm' ], domain: [ 'FenergoNebulaAuditQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "aggregator": { "fieldName": "fieldName", "sortings": [ { "sortFieldName": "sortFieldName", "sortOrder": "Ascending" } ] }, "searchProperties": { "searchPhrase": "searchPhrase", "fieldName": "fieldName" }, "excludeDrafts": false, "excludeSystemFields": false, "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetGroupedEntityAuditEvents' ], domain: [ 'FenergoNebulaAuditQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "fieldName": "fieldName", "excludeDrafts": false, "excludeSystemFields": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntityAuditEventsByFieldName' ], domain: [ 'FenergoNebulaAuditQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "searchProperties": { "searchPhrase": "searchPhrase", "fieldName": "fieldName" }, "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetScreeningAuditEvents' ], domain: [ 'FenergoNebulaAuditQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "searchPhrase": "searchPhrase", "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneyAuditEvents' ], domain: [ 'FenergoNebulaAuditQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisAuditEvents' ], domain: [ 'FenergoNebulaAuditQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "filters": { "userId": "userId", "from": "2024-10-07T13:46:53.5527896+00:00", "to": "2024-10-07T13:46:53.5532842+00:00" }, "pager": { "pageSize": 1, "sortOrder": "Ascending", "paginationToken": "paginationToken" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntityQuerySideAuditEvents' ], domain: [ 'FenergoNebulaAuditQueryv20' ] } } }
];

async function ExecuteFenergoNebulaAuditQueryv20(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'GetAuditEventsForMultipleResources': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/auditquery/api/v2/auditevent/resources';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SearchByTerm': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/auditquery/api/v2/auditevent/searchterm';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetGroupedEntityAuditEvents': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/auditquery/api/v2/auditevent/groupedEntityEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityAuditEventsByFieldName': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/auditquery/api/v2/auditevent/entityeventdetails';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetScreeningAuditEvents': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/auditquery/api/v2/auditevent/screeningEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetJourneyAuditEvents': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/auditquery/api/v2/auditevent/journeyEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetFinancialAnalysisAuditEvents': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/auditquery/api/v2/auditevent/financialAnalysisEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityQuerySideAuditEvents': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/auditquery/api/v2/auditevent/queryside/entityEvents';

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
    FenergoNebulaAuditQueryv20Properties,
    ExecuteFenergoNebulaAuditQueryv20
}
