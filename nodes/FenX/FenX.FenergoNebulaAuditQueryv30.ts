import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaAuditQueryv30Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get Audit Events for a specific list of resource IDs in a paged manner.', value: 'GetAuditEventsForMultipleResourcesV3' },{ name: 'Get Audit Events for a specific search term in a paged manner.', value: 'SearchByTermV3' },{ name: 'Get Entity Specific Audit Events, grouped and summarized by the fields that have been updated in a paged manner.', value: 'GetGroupedEntityAuditEventsV3' },{ name: 'Get all Audit Events specific to an Entity, for a particular field.', value: 'GetEntityAuditEventsByFieldNameV3' },{ name: 'Get Audit Events related to Screening for a group of Journey IDs in a paged manner', value: 'GetScreeningAuditEventsV3' },{ name: 'Get Audit Events related to a Journey in a paged manner', value: 'GetJourneyAuditEventsV3' },{ name: 'Get Financial Analysis audit events', value: 'GetFinancialAnalysisAuditEventsV3' },{ name: 'Retrieve users audit events.', value: 'GetUsersAuditEvents' },{ name: 'Retrieve teams audit events.', value: 'GetTeamsAuditEvents' },{ name: 'Retrieve entity-specific audit events grouped and summarized by the fields that have been updated.', value: 'GetAuditEventSummariesByFieldName' },{ name: 'Retrieve entity-specific audit events for a particular field.', value: 'GetAuditEventsForField' },{ name: 'Reveal entity-specific audit events for a particular field that is marked as Sensitive Data.', value: 'RevealAuditEventsForField' },{ name: 'Get Narratives audit events', value: 'GetNarrativeAuditEventsV3' },{ name: 'Retrieve sensitive data access log events for given Entity.', value: 'GetPiiAccessLogBySearchTerm' },{ name: 'Retrieve sensitive data access log events for given user id.', value: 'GetPiiAccessLogByUserId' },{ name: 'Retrieve sensitive data access log events for list of entities.', value: 'GetPiiAccessLogByresourceIds' },{ name: 'Get Entity Access Logs in a paged manner.', value: 'GetEntityQuerySideAuditEventsV3' },{ name: 'Get self service user management audit events', value: 'GetSelfServiceUserManagementEventsV3' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaAuditQueryv30',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Unique ID of the Entity.', displayOptions: { show: { endpoint: [ 'GetAuditEventSummariesByFieldName' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Unique ID of the Entity.', displayOptions: { show: { endpoint: [ 'GetAuditEventsForField' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'fieldName', name: 'fieldName', type: 'string', required: true, default: '', description: 'The name of the field for which to retrieve Entity Audit Events.', displayOptions: { show: { endpoint: [ 'GetAuditEventsForField' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Unique ID of the Entity.', displayOptions: { show: { endpoint: [ 'RevealAuditEventsForField' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'fieldName', name: 'fieldName', type: 'string', required: true, default: '', description: 'The name of the field for which to retrieve Entity Audit Events.', displayOptions: { show: { endpoint: [ 'RevealAuditEventsForField' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Unique ID of the Entity.', displayOptions: { show: { endpoint: [ 'GetPiiAccessLogBySearchTerm' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'userId', name: 'userId', type: 'string', required: true, default: '', description: 'The Unique ID of the Entity.', displayOptions: { show: { endpoint: [ 'GetPiiAccessLogByUserId' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetAuditEventsForMultipleResourcesV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "searchTerm": "searchTerm" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchByTermV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "aggregator": { "fieldName": "fieldName", "sortings": [ { "sortFieldName": "sortFieldName", "sortOrder": "Ascending" } ] }, "searchProperties": { "searchPhrase": "searchPhrase", "fieldName": "fieldName" }, "excludeDrafts": false, "excludeSystemFields": false, "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetGroupedEntityAuditEventsV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "fieldName": "fieldName", "excludeDrafts": false, "excludeSystemFields": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntityAuditEventsByFieldNameV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "searchProperties": { "searchPhrase": "searchPhrase", "fieldName": "fieldName" }, "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetScreeningAuditEventsV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "searchPhrase": "searchPhrase", "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetJourneyAuditEventsV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetFinancialAnalysisAuditEventsV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "ids": [ "" ], "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "filters": { "eventType": "UserAdded", "from": "2024-10-07T14:16:00.4590729+00:00", "to": "2024-10-07T14:16:00.4590774+00:00" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetUsersAuditEvents' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "ids": [ "" ], "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" }, "filters": { "eventType": "TeamCreated", "from": "2024-10-07T14:16:00.4591243+00:00", "to": "2024-10-07T14:16:00.4591265+00:00" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetTeamsAuditEvents' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "searchPhrase": "searchPhrase", "entityDraftIds": [ "" ], "excludeDrafts": false, "excludeSystemFields": false, "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetAuditEventSummariesByFieldName' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityDraftIds": [ "" ], "excludeDrafts": false, "excludeSystemFields": false, "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetAuditEventsForField' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityDraftIds": [ "" ], "excludeDrafts": false, "excludeSystemFields": false, "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'RevealAuditEventsForField' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetNarrativeAuditEventsV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "searchTerm": "searchTerm", "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPiiAccessLogBySearchTerm' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPiiAccessLogByUserId' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityIds": [ "" ], "fieldNames": [ "" ], "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPiiAccessLogByresourceIds' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "filters": { "userId": "userId", "from": "2024-10-07T14:16:00.4595013+00:00", "to": "2024-10-07T14:16:00.4595039+00:00" }, "pager": { "pageSize": 1, "sortOrder": "Ascending", "paginationToken": "paginationToken" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntityQuerySideAuditEventsV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "eventTypes": [ "" ], "pager": { "size": 1, "from": 0, "sortBy": "sortBy", "sortOrder": "Ascending" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetSelfServiceUserManagementEventsV3' ], domain: [ 'FenergoNebulaAuditQueryv30' ] } } }
];

async function ExecuteFenergoNebulaAuditQueryv30(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let entityId=''; let fieldName=''; let userId='';
switch(endpoint){ case 'GetAuditEventsForMultipleResourcesV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/auditevent/resources';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SearchByTermV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/auditevent/searchterm';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetGroupedEntityAuditEventsV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/auditevent/groupedEntityEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityAuditEventsByFieldNameV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/auditevent/entityeventdetails';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetScreeningAuditEventsV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/auditevent/screeningEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetJourneyAuditEventsV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/auditevent/journeyEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetFinancialAnalysisAuditEventsV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/auditevent/financialAnalysisEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetUsersAuditEvents': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/authorization/users';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetTeamsAuditEvents': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/authorization/teams';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAuditEventSummariesByFieldName': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/entity/{entityId}/audit-event-summaries'.replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAuditEventsForField': entityId = base.getNodeParameter('entityId', 0) as string;
fieldName = base.getNodeParameter('fieldName', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/entity/{entityId}/{fieldName}/audit-events'.replace('{entityId}', entityId).replace('{fieldName}', fieldName);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'RevealAuditEventsForField': entityId = base.getNodeParameter('entityId', 0) as string;
fieldName = base.getNodeParameter('fieldName', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/entity/{entityId}/{fieldName}/audit-events/reveal'.replace('{entityId}', entityId).replace('{fieldName}', fieldName);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetNarrativeAuditEventsV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/narrative/narrativeEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetPiiAccessLogBySearchTerm': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/sensitive-data-access-log/{entityId}/users'.replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetPiiAccessLogByUserId': userId = base.getNodeParameter('userId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/sensitive-data-access-log/{userId}/entities'.replace('{userId}', userId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetPiiAccessLogByresourceIds': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/sensitive-data-access-log/entities';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityQuerySideAuditEventsV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/auditevent/queryside/entityEvents';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetSelfServiceUserManagementEventsV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/auditquery/api/v3/self-service-management/selfServiceUserManagementEvents';

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
    FenergoNebulaAuditQueryv30Properties,
    ExecuteFenergoNebulaAuditQueryv30
}
