import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaPolicyLogicEnginev20Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Allows clearing the Logic Engine API cache. This is an maintenance endpoint and does not need to be used under normal circumstances.', value: 'AllowsclearingtheLogicEngineAPIcache. Thisisanmaintenanceendpointanddoesnotneedtobeusedundernormalcircumstances.' },{ name: 'Evaluate requirement', value: 'EvaluateV2' },{ name: 'Evaluate requirement set', value: 'EvaluateRequirementSets' },{ name: 'Evaluate data group fields', value: 'EvaluateDataGroupFields' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaPolicyLogicEnginev20',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "requirementTypes": [ "" ], "data": {}, "properties": {}, "targetEntity": "targetEntity", "categories": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateV2' ], domain: [ 'FenergoNebulaPolicyLogicEnginev20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": {} }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateRequirementSets' ], domain: [ 'FenergoNebulaPolicyLogicEnginev20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "dataGroupId": "dataGroupId", "dataGroupVersionNumber": 0, "data": {}, "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus", "relationshipTypes": [ "" ] } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] }, "mainEntity": { "dataSource": "dataSource", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "relatedAssets": { "dataSource": "dataSource", "assets": [ { "properties": {} } ] }, "relatedAssociations": { "dataSource": "dataSource", "relatedAssociations": [ { "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } } ] }, "accountRelatedFunds": { "dataSource": "dataSource", "accountRelatedFunds": [ { "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } } ] }, "journeyLevelData": { "dataSource": "dataSource", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "relatedParties": { "dataSource": "dataSource", "relatedParties": [ { "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} }, "metadata": {} } ] }, "currentField": { "dataSource": "dataSource", "currentField": "currentField" }, "significanceEngine": { "dataSource": "dataSource", "significanceEngine": [ { "key": "key" } ] } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateDataGroupFields' ], domain: [ 'FenergoNebulaPolicyLogicEnginev20' ] } } },{ displayName: 'clearRequirementsCache', name: 'clearRequirementsCache', type: 'string', required: true, default: '', description: 'If the Requirements cache should be flushed', displayOptions: { show: { endpoint: [ 'AllowsclearingtheLogicEngineAPIcache. Thisisanmaintenanceendpointanddoesnotneedtobeusedundernormalcircumstances.' ], domain: [ 'FenergoNebulaPolicyLogicEnginev20' ] } } },{ displayName: 'clearRequirementSetsCache', name: 'clearRequirementSetsCache', type: 'string', required: true, default: '', description: 'If the Requirement sets cache should be flushed', displayOptions: { show: { endpoint: [ 'AllowsclearingtheLogicEngineAPIcache. Thisisanmaintenanceendpointanddoesnotneedtobeusedundernormalcircumstances.' ], domain: [ 'FenergoNebulaPolicyLogicEnginev20' ] } } },{ displayName: 'clearDataGroupsCache', name: 'clearDataGroupsCache', type: 'string', required: true, default: '', description: 'If the DataGroup cache should be flushed', displayOptions: { show: { endpoint: [ 'AllowsclearingtheLogicEngineAPIcache. Thisisanmaintenanceendpointanddoesnotneedtobeusedundernormalcircumstances.' ], domain: [ 'FenergoNebulaPolicyLogicEnginev20' ] } } }
];

async function ExecuteFenergoNebulaPolicyLogicEnginev20(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'AllowsclearingtheLogicEngineAPIcache. Thisisanmaintenanceendpointanddoesnotneedtobeusedundernormalcircumstances.': 
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.nar1.fenergox.com/policylogicengine/api/v2/cache/flush';
requestOptions.qs = { clearRequirementsCache: base.getNodeParameter('clearRequirementsCache', 0) as string,clearRequirementSetsCache: base.getNodeParameter('clearRequirementSetsCache', 0) as string,clearDataGroupsCache: base.getNodeParameter('clearDataGroupsCache', 0) as string };
break;
case 'EvaluateV2': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/policylogicengine/api/v2/engine/evaluate-requirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EvaluateRequirementSets': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/policylogicengine/api/v2/engine/evaluate-requirement-sets';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EvaluateDataGroupFields': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/policylogicengine/api/v2/engine/evaluate-data-group-fields';

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
    FenergoNebulaPolicyLogicEnginev20Properties,
    ExecuteFenergoNebulaPolicyLogicEnginev20
}
