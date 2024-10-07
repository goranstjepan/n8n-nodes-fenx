import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaExternalDataOutreachCommandv20Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create new Entity Association', value: 'CreateAssociation' },{ name: 'Permanently delete an existing outreach Association', value: 'DeleteAssociation' },{ name: 'Update an existing outreach association', value: 'UpdateAssociation' },{ name: 'Stores comments of an existing associated entity', value: 'UpsertExistingAssociatedEntityComments' },{ name: 'Update outreach entity data', value: 'UpdateOutreachDataV2' },{ name: 'Update related outreach data', value: 'UpdateRelatedOutreachDataV2' },{ name: 'Delete related outreach data', value: 'DeleteRelatedOutreachData' },{ name: 'Create related outreach data', value: 'CreateRelatedOutreachData' },{ name: 'Permanently deletes existing outreach related data.', value: 'ClearOutreachRelatedData' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaExternalDataOutreachCommandv20',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to delete', displayOptions: { show: { endpoint: [ 'DeleteAssociation' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Current Journey, Journey Id', displayOptions: { show: { endpoint: [ 'DeleteAssociation' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing unverified Association to update', displayOptions: { show: { endpoint: [ 'UpdateAssociation' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The JourneyId of the existing associated entity comments to update', displayOptions: { show: { endpoint: [ 'UpsertExistingAssociatedEntityComments' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id', displayOptions: { show: { endpoint: [ 'UpdateOutreachDataV2' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Related data id.', displayOptions: { show: { endpoint: [ 'UpdateRelatedOutreachDataV2' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id.', displayOptions: { show: { endpoint: [ 'UpdateRelatedOutreachDataV2' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Related data id', displayOptions: { show: { endpoint: [ 'DeleteRelatedOutreachData' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id', displayOptions: { show: { endpoint: [ 'DeleteRelatedOutreachData' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id', displayOptions: { show: { endpoint: [ 'CreateRelatedOutreachData' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'ClearOutreachRelatedData' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "sourceId": "sourceId", "targetId": "targetId", "type": "type", "journeyId": "journeyId", "ownershipPercentage": 0.0, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateAssociation' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "sourceId": "sourceId", "targetId": "targetId", "type": "type", "journeyId": "journeyId", "ownershipPercentage": 0.0, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateAssociation' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "associatedEntityIdsComments": {}, "version": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpsertExistingAssociatedEntityComments' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "sourceEntityId": "sourceEntityId", "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "type": "type", "category": [ "" ], "properties": {}, "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateOutreachDataV2' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] } }, "id": "id", "sourceEntityId": "sourceEntityId", "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "type": "type", "category": [ "" ], "properties": {}, "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateRelatedOutreachDataV2' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] } }, "id": "id", "sourceEntityId": "sourceEntityId", "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "type": "type", "category": [ "" ], "properties": {}, "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateRelatedOutreachData' ], domain: [ 'FenergoNebulaExternalDataOutreachCommandv20' ] } } }
];

async function ExecuteFenergoNebulaExternalDataOutreachCommandv20(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let journeyId='';
switch(endpoint){ case 'CreateAssociation': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/externaloutreachcommand/api/v2/association';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteAssociation': id = base.getNodeParameter('id', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/externaloutreachcommand/api/v2/association/{id}/journeyid/{journeyId}'.replace('{id}', id).replace('{journeyId}', journeyId);

break;
case 'UpdateAssociation': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/externaloutreachcommand/api/v2/association/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpsertExistingAssociatedEntityComments': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/externaloutreachcommand/api/v2/association/existingassociatedentitycomments/{journeyId}'.replace('{journeyId}', journeyId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateOutreachDataV2': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/externaloutreachcommand/api/v2/data/updateoutreachdata/{journeyId}'.replace('{journeyId}', journeyId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateRelatedOutreachDataV2': id = base.getNodeParameter('id', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/externaloutreachcommand/api/v2/related-data/{id}/journey/{journeyId}'.replace('{id}', id).replace('{journeyId}', journeyId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteRelatedOutreachData': id = base.getNodeParameter('id', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/externaloutreachcommand/api/v2/related-data/{id}/journey/{journeyId}'.replace('{id}', id).replace('{journeyId}', journeyId);

break;
case 'CreateRelatedOutreachData': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/externaloutreachcommand/api/v2/related-data/{journeyId}'.replace('{journeyId}', journeyId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ClearOutreachRelatedData': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/externaloutreachcommand/api/v2/related-data/clear/journey/{journeyId}'.replace('{journeyId}', journeyId);

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
    FenergoNebulaExternalDataOutreachCommandv20Properties,
    ExecuteFenergoNebulaExternalDataOutreachCommandv20
}
