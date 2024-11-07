import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaEntityDataCommandv30Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Update entity draft', value: 'UpdateEntityDraftV3' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaEntityDataCommandv30',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftV3' ], domain: [ 'FenergoNebulaEntityDataCommandv30' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Entity draft id', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftV3' ], domain: [ 'FenergoNebulaEntityDataCommandv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "riskVersions": { "riskModel": [ { "id": "id", "version": 0 } ], "riskConfigurationModel": [ { "id": "id", "version": 0 } ], "thresholdModel": [ { "id": "id", "version": 0 } ] }, "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "associatedJurisdictionsFromParents": {}, "entityType": "entityType", "targetEntity": "targetEntity", "category": [ "" ], "properties": {}, "draftProperties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} }, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus", "relationshipTypes": [ "" ] } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] }, "mainEntity": { "dataSource": "dataSource", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "relatedAssets": { "dataSource": "dataSource", "assets": [ { "properties": {} } ] }, "relatedAssociations": { "dataSource": "dataSource", "relatedAssociations": [ { "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } } ] }, "accountRelatedFunds": { "dataSource": "dataSource", "accountRelatedFunds": [ { "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } } ] }, "journeyLevelData": { "dataSource": "dataSource", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "relatedParties": { "dataSource": "dataSource", "relatedParties": [ { "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} }, "metadata": {} } ] }, "currentField": { "dataSource": "dataSource", "currentField": "currentField" }, "significanceEngine": { "dataSource": "dataSource", "significanceEngine": [ { "key": "key" } ] } }, "version": -1 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEntityDraftV3' ], domain: [ 'FenergoNebulaEntityDataCommandv30' ] } } }
];

async function ExecuteFenergoNebulaEntityDataCommandv30(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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
switch(endpoint){ case 'UpdateEntityDraftV3': entityId = base.getNodeParameter('entityId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/entitydatacommand/api/v3/entity/{entityId}/draft/{id}'.replace('{entityId}', entityId).replace('{id}', id);

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
    FenergoNebulaEntityDataCommandv30Properties,
    ExecuteFenergoNebulaEntityDataCommandv30
}
