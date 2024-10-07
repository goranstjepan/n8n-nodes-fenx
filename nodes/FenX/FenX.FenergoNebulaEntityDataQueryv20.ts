import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaEntityDataQueryv20Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get entity by id', value: 'GetEntityById' },{ name: 'Advanced search for entities', value: 'EntityAdvancedSearch' },{ name: 'Entity advanced search results file', value: 'EntityAdvancedSearchFile' },{ name: 'Search entities by name', value: 'SearchByName' },{ name: 'Get entities snapshot by Journey Id and Task Id', value: 'GetEntitiesSnapshotByTaskId' },{ name: 'Get entity snapshot by Journey Id, Task Id and Entity Id', value: 'GetEntitySnapshotByIdAndTaskId' },{ name: 'Get revealed PII property value from Entity', value: 'GetEntityPIIPropertyValue' },{ name: 'Get pre-sign URLs for a file identifiers This endpoint is intended for use with the new DataField type - RichTextEditor.', value: 'GetPreSignUrlForFileIdentifiers' },{ name: 'Get entity drafts ids', value: 'GetEntityDraftsIds' },{ name: 'Get entity draft by id', value: 'GetEntityDraftById' },{ name: 'Get proposed changes between an entity draft and the verified entity the draft was created from', value: 'GetEntityDraftProposedChanges' },{ name: 'Get revealed PII property value from EntityDraft', value: 'GetDraftPIIPropertyValue' },{ name: 'Search entity drafts', value: 'SearchEntityDrafts' },{ name: 'Get indexed entity properties', value: 'GetIndexedEntityProperties' },{ name: 'Get paged list of entities with total items in the response', value: 'GetEntitiesPagedListV2' },{ name: 'Search for entity duplicates', value: 'SearchForDuplicatesV2' },{ name: 'Multi-search for entity duplicates', value: 'MultiSearchForDuplicatesV2' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaEntityDataQueryv20',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetEntityById' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id id', displayOptions: { show: { endpoint: [ 'GetEntitiesSnapshotByTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'Task Id', displayOptions: { show: { endpoint: [ 'GetEntitiesSnapshotByTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'GetEntitySnapshotByIdAndTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'Task Id', displayOptions: { show: { endpoint: [ 'GetEntitySnapshotByIdAndTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity Id', displayOptions: { show: { endpoint: [ 'GetEntitySnapshotByIdAndTaskId' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetEntityPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'propertyName', name: 'propertyName', type: 'string', required: true, default: '', description: 'Property Name', displayOptions: { show: { endpoint: [ 'GetEntityPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetPreSignUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetEntityDraftsIds' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'GetEntityDraftById' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetEntityDraftById' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'entityDraftId', name: 'entityDraftId', type: 'string', required: true, default: '', description: 'Entity Draft Id', displayOptions: { show: { endpoint: [ 'GetEntityDraftProposedChanges' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetDraftPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'entityDraftId', name: 'entityDraftId', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'GetDraftPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'propertyName', name: 'propertyName', type: 'string', required: true, default: '', description: 'Property Name', displayOptions: { show: { endpoint: [ 'GetDraftPIIPropertyValue' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "discriminator": "discriminator", "minScore": 0.0, "type": "type", "pager": { "size": 0, "from": 0, "sortBy": "sortBy", "sortOrder": 0 }, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EntityAdvancedSearch' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "minScore": 0.0, "type": "type", "totalItems": 0, "headers": {}, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EntityAdvancedSearchFile' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "pager": { "size": 0, "from": 0, "sortBy": "sortBy", "sortOrder": 0 } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchByName' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "isRootContent": false, "dataKey": "dataKey", "fileIdentifiers": [ "" ], "entityDraftId": "entityDraftId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPreSignUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "entityId": "entityId", "entityIds": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchEntityDrafts' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "pager": { "size": 0, "from": 0, "sortBy": "sortBy", "sortOrder": 0 }, "searchAfter": "searchAfter", "attributes": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetEntitiesPagedListV2' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "type": "type", "properties": {}, "pager": { "size": 0, "from": 0, "sortBy": "sortBy", "sortOrder": 0 } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchForDuplicatesV2' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "searchForDuplicatesDict": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'MultiSearchForDuplicatesV2' ], domain: [ 'FenergoNebulaEntityDataQueryv20' ] } } }
];

async function ExecuteFenergoNebulaEntityDataQueryv20(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let journeyId=''; let taskId=''; let entityId=''; let propertyName=''; let entityDraftId='';
switch(endpoint){ case 'GetEntityById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/{id}'.replace('{id}', id);

break;
case 'EntityAdvancedSearch': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/entityadvancedsearch';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EntityAdvancedSearchFile': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/entityadvancedsearch/file';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SearchByName': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/searchbyname';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntitiesSnapshotByTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetEntitySnapshotByIdAndTaskId': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/{entityId}/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId).replace('{entityId}', entityId);

break;
case 'GetEntityPIIPropertyValue': entityId = base.getNodeParameter('entityId', 0) as string;
propertyName = base.getNodeParameter('propertyName', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/{entityId}/property/{propertyName}'.replace('{entityId}', entityId).replace('{propertyName}', propertyName);

break;
case 'GetPreSignUrlForFileIdentifiers': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/{entityId}/pre-sign-urls'.replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEntityDraftsIds': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/{entityId}/drafts-ids'.replace('{entityId}', entityId);

break;
case 'GetEntityDraftById': id = base.getNodeParameter('id', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/{entityId}/draft/{id}'.replace('{id}', id).replace('{entityId}', entityId);

break;
case 'GetEntityDraftProposedChanges': entityDraftId = base.getNodeParameter('entityDraftId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/proposedchanges/draft/{entityDraftId}'.replace('{entityDraftId}', entityDraftId);

break;
case 'GetDraftPIIPropertyValue': entityId = base.getNodeParameter('entityId', 0) as string;
entityDraftId = base.getNodeParameter('entityDraftId', 0) as string;
propertyName = base.getNodeParameter('propertyName', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/{entityId}/draft/{entityDraftId}/property/{propertyName}'.replace('{entityId}', entityId).replace('{entityDraftId}', entityDraftId).replace('{propertyName}', propertyName);

break;
case 'SearchEntityDrafts': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/drafts-in-scope/searchentitydrafts';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetIndexedEntityProperties': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity-index-configuration';

break;
case 'GetEntitiesPagedListV2': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/getentitiespagedlist';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SearchForDuplicatesV2': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/searchforduplicates';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'MultiSearchForDuplicatesV2': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/entitydataquery/api/v2/entity/multisearchforduplicates';

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
    FenergoNebulaEntityDataQueryv20Properties,
    ExecuteFenergoNebulaEntityDataQueryv20
}
