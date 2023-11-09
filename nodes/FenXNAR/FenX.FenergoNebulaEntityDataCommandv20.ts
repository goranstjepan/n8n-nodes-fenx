import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaEntityDataCommandv20Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create entity', value: 'CreateEntity' },{ name: 'Create entity with full record in response', value: 'CreateEntityFullRecord' },{ name: 'Update entity draft', value: 'UpdateEntityDraftRecordV2' },{ name: 'Update entity draft and adds shared data template to it.', value: 'UpdateSharedDataTemplate' },{ name: 'Clears the shared data template from a entity draft.', value: 'ClearSharedDataTemplate' },{ name: 'Manually update entity draft from entity group.', value: 'UpdateChildFromGroup' },{ name: 'Manage conflicts for Entity Draft Record.', value: 'EntityDraftConflicts' },{ name: 'Create entity draft', value: 'CreateEntityDraft' },{ name: 'Verify entity draft', value: 'VerifyEntityDraft' },{ name: 'Reject entity draft', value: 'RejectEntityDraft' },{ name: 'Update risk of entity draft', value: 'UpdateEntityDraftRisk' },{ name: 'Update the role of entity draft', value: 'UpdateEntityDraftRole' },{ name: 'Update the access layers of the entity draft. The changes will be propagated to related entity.', value: 'UpdateEntityDraftAccessLayers' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaEntityDataCommandv20',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftRecordV2' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftRecordV2' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'UpdateSharedDataTemplate' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'UpdateSharedDataTemplate' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'ClearSharedDataTemplate' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'ClearSharedDataTemplate' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'UpdateChildFromGroup' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'UpdateChildFromGroup' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'EntityDraftConflicts' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'EntityDraftConflicts' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'CreateEntityDraft' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'VerifyEntityDraft' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'VerifyEntityDraft' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'RejectEntityDraft' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'RejectEntityDraft' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftRisk' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftRisk' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftRole' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftRole' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftAccessLayers' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftAccessLayers' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "type": "type", "targetEntity": "targetEntity", "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] } }, "policyJurisdiction": "policyJurisdiction", "policyJurisdictions": [ "" ], "alternateId": "alternateId", "category": [ "" ], "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ], "geographicDetails": [ { "dataKey": "dataKey", "inheritedFrom": [ "" ], "isInherited": false } ], "businessRelatedDetails": [ { "dataKey": "dataKey", "inheritedFrom": [ "" ], "isInherited": false } ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateEntity' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "type": "type", "targetEntity": "targetEntity", "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] } }, "policyJurisdiction": "policyJurisdiction", "policyJurisdictions": [ "" ], "alternateId": "alternateId", "category": [ "" ], "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ], "geographicDetails": [ { "dataKey": "dataKey", "inheritedFrom": [ "" ], "isInherited": false } ], "businessRelatedDetails": [ { "dataKey": "dataKey", "inheritedFrom": [ "" ], "isInherited": false } ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateEntityFullRecord' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "riskVersions": { "riskModel": [ { "id": "id", "version": 0 } ], "riskConfigurationModel": [ { "id": "id", "version": 0 } ], "thresholdModel": [ { "id": "id", "version": 0 } ] }, "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "associatedJurisdictionsFromParents": {}, "entityType": "entityType", "targetEntity": "targetEntity", "category": [ "" ], "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] } }, "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftRecordV2' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sharedDataTemplateId": "sharedDataTemplateId", "versionNumber": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateSharedDataTemplate' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "groupEntityId": "groupEntityId", "childEntityId": "childEntityId", "childEntityDraftId": "childEntityDraftId", "journeyId": "journeyId", "taskId": "taskId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateChildFromGroup' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityVersion": 0, "pushChanges": false, "dataConflictResolutions": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EntityDraftConflicts' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "parentDraftId": "parentDraftId", "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateEntityDraft' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "dataConflictResolutions": {}, "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'VerifyEntityDraft' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'RejectEntityDraft' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "riskLevel": 0.0, "riskCategory": "riskCategory", "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftRisk' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftRole' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ], "geographicDetails": [ { "dataKey": "dataKey", "inheritedFrom": [ "" ], "isInherited": false } ], "businessRelatedDetails": [ { "dataKey": "dataKey", "inheritedFrom": [ "" ], "isInherited": false } ] }, "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftAccessLayers' ], domain: [ 'FenergoNebulaEntityDataCommandv20' ] } } }
];

async function ExecuteFenergoNebulaEntityDataCommandv20(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let entityId=''; let id='';
switch(endpoint){ case 'CreateEntity': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateEntityFullRecord': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/full';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateEntityDraftRecordV2': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}'.replace('{entityId}', entityId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateSharedDataTemplate': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}/shared-data-template'.replace('{entityId}', entityId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ClearSharedDataTemplate': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}/shared-data-template/clear'.replace('{entityId}', entityId).replace('{id}', id);

break;
case 'UpdateChildFromGroup': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}/update-child-from-group'.replace('{entityId}', entityId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EntityDraftConflicts': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}/conflicts'.replace('{entityId}', entityId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateEntityDraft': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft'.replace('{entityId}', entityId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'VerifyEntityDraft': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}/verify'.replace('{entityId}', entityId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'RejectEntityDraft': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}/reject'.replace('{entityId}', entityId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateEntityDraftRisk': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}/risk'.replace('{entityId}', entityId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateEntityDraftRole': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}/role'.replace('{entityId}', entityId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateEntityDraftAccessLayers': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/entitydatacommand/api/v2/entity/{entityId}/draft/{id}/access-layers'.replace('{entityId}', entityId).replace('{id}', id);

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
    FenergoNebulaEntityDataCommandv20Properties,
    ExecuteFenergoNebulaEntityDataCommandv20
}
