import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaEntityDataQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get entities by attributes', value: 'GetEntitiesList' },{ name: 'Get paged list of entities', value: 'GetEntitiesPagedList' },{ name: 'Get entity by id', value: 'GetEntityById' },{ name: 'Search for entity duplicates', value: 'SearchForDuplicates' },{ name: 'Advanced search for entities', value: 'EntityAdvancedSearch' },{ name: 'Entity advanced search results file', value: 'EntityAdvancedSearchFile' },{ name: 'Multi-search for entity duplicates', value: 'MultiSearchForDuplicates' },{ name: 'Search entities by name', value: 'SearchByName' },{ name: 'Get entities snapshot by Journey Id and Task Id', value: 'GetEntitiesSnapshotByTaskId' },{ name: 'Get entity snapshot by Journey Id, Task Id and Entity Id', value: 'GetEntitySnapshotByIdAndTaskId' },{ name: 'Get entity in specified version', value: 'GetEntityVersion' },{ name: 'Get revealed PII property value from Entity', value: 'GetEntityPIIPropertyValue' },{ name: 'Get pre-sign URLs for a file identifiers This endpoint is intended for use with the new DataField type - RichTextEditor.', value: 'GetPreSignUrlForFileIdentifiers' },{ name: 'Get pre-sign URL for specified report type', value: 'GetReportPreSignUrl' },{ name: 'Get entity drafts', value: 'GetEntityDrafts' },{ name: 'Get entity draft by id', value: 'GetEntityDraftById' },{ name: 'Get proposed changes between an entity draft and the verified entity the draft was created from', value: 'GetEntityDraftProposedChanges' },{ name: 'Get revealed PII property value from EntityDraft', value: 'GetDraftPIIPropertyValue' },{ name: 'Search entity drafts', value: 'SearchEntityDrafts' },{ name: 'Get indexed entity properties', value: 'GetIndexedEntityProperties' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaEntityDataQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetEntityById' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id id', displayOptions: { show: { endpoint: [ 'GetEntitiesSnapshotByTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'Task Id', displayOptions: { show: { endpoint: [ 'GetEntitiesSnapshotByTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'GetEntitySnapshotByIdAndTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'Task Id', displayOptions: { show: { endpoint: [ 'GetEntitySnapshotByIdAndTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity Id', displayOptions: { show: { endpoint: [ 'GetEntitySnapshotByIdAndTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetEntityVersion' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityVersion', name: 'entityVersion', type: 'string', required: true, default: '', description: 'Version', displayOptions: { show: { endpoint: [ 'GetEntityVersion' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetEntityPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'propertyName', name: 'propertyName', type: 'string', required: true, default: '', description: 'Property Name', displayOptions: { show: { endpoint: [ 'GetEntityPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetPreSignUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetEntityDrafts' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'GetEntityDraftById' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetEntityDraftById' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityDraftId', name: 'entityDraftId', type: 'string', required: true, default: '', description: 'Entity Draft Id', displayOptions: { show: { endpoint: [ 'GetEntityDraftProposedChanges' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetDraftPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'entityDraftId', name: 'entityDraftId', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'GetDraftPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'propertyName', name: 'propertyName', type: 'string', required: true, default: '', description: 'Property Name', displayOptions: { show: { endpoint: [ 'GetDraftPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "ids": [ "" ], "attributes": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntitiesList' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 0, "from": 0, "sortBy": "sortBy", "sortOrder": 0 }, "searchAfter": "searchAfter", "attributes": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntitiesPagedList' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "type": "type", "properties": {}, "pager": { "size": 0, "from": 0, "sortBy": "sortBy", "sortOrder": 0 } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchForDuplicates' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "discriminator": "discriminator", "minScore": 0.0, "type": "type", "pager": { "size": 0, "from": 0, "sortBy": "sortBy", "sortOrder": 0 }, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EntityAdvancedSearch' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "minScore": 0.0, "type": "type", "totalItems": 0, "headers": {}, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EntityAdvancedSearchFile' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "searchForDuplicatesDict": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'MultiSearchForDuplicates' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "pager": { "size": 0, "from": 0, "sortBy": "sortBy", "sortOrder": 0 } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchByName' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "isRootContent": false, "dataKey": "dataKey", "fileIdentifiers": [ "" ], "entityDraftId": "entityDraftId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPreSignUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "reportType": "reportType" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetReportPreSignUrl' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "entityId": "entityId", "entityIds": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchEntityDrafts' ], domain: [ 'FenergoNebulaEntityDataQueryv10' ] } } }
];

async function ExecuteFenergoNebulaEntityDataQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let journeyId=''; let taskId=''; let entityId=''; let entityVersion=''; let propertyName=''; let entityDraftId='';
switch(endpoint){ case 'GetEntitiesList': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/getentitieslist';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntitiesPagedList': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/getentitiespagedlist';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/{id}'.replace('{id}', id);

break;
case 'SearchForDuplicates': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/searchforduplicates';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EntityAdvancedSearch': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/entityadvancedsearch';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EntityAdvancedSearchFile': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/entityadvancedsearch/file';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'MultiSearchForDuplicates': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/multisearchforduplicates';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SearchByName': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/searchbyname';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntitiesSnapshotByTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetEntitySnapshotByIdAndTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/{entityId}/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId).replace('{entityId}', entityId);

break;
case 'GetEntityVersion': entityId = base.getNodeParameter('entityId', 0) as string;
entityVersion = base.getNodeParameter('entityVersion', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/{entityId}/version/{entityVersion}'.replace('{entityId}', entityId).replace('{entityVersion}', entityVersion);

break;
case 'GetEntityPIIPropertyValue': entityId = base.getNodeParameter('entityId', 0) as string;
propertyName = base.getNodeParameter('propertyName', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/{entityId}/property/{propertyName}'.replace('{entityId}', entityId).replace('{propertyName}', propertyName);

break;
case 'GetPreSignUrlForFileIdentifiers': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/{entityId}/pre-sign-urls'.replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetReportPreSignUrl': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/report-pre-sign-url';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityDrafts': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/{entityId}/draft'.replace('{entityId}', entityId);

break;
case 'GetEntityDraftById': id = base.getNodeParameter('id', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/{entityId}/draft/{id}'.replace('{id}', id).replace('{entityId}', entityId);

break;
case 'GetEntityDraftProposedChanges': entityDraftId = base.getNodeParameter('entityDraftId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/proposedchanges/draft/{entityDraftId}'.replace('{entityDraftId}', entityDraftId);

break;
case 'GetDraftPIIPropertyValue': entityId = base.getNodeParameter('entityId', 0) as string;
entityDraftId = base.getNodeParameter('entityDraftId', 0) as string;
propertyName = base.getNodeParameter('propertyName', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity/{entityId}/draft/{entityDraftId}/property/{propertyName}'.replace('{entityId}', entityId).replace('{entityDraftId}', entityDraftId).replace('{propertyName}', propertyName);

break;
case 'SearchEntityDrafts': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/drafts-in-scope/searchentitydrafts';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetIndexedEntityProperties': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/entitydataquery/api/entity-index-configuration';

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
    FenergoNebulaEntityDataQueryv10Properties,
    ExecuteFenergoNebulaEntityDataQueryv10
}
