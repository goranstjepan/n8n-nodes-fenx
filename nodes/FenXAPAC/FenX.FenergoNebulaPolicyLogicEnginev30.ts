import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaPolicyLogicEnginev30Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Allows clearing the Logic Engine API cache. This is an maintenance endpoint and does not need to be used under normal circumstances.', value: 'AllowsclearingtheLogicEngineAPIcache. Thisisanmaintenanceendpointanddoesnotneedtobeusedundernormalcircumstances.' },{ name: 'Evaluate requirement set', value: 'EvaluateRequirementSetsV3' },{ name: 'Evaluate requirement', value: 'EvaluateV3' },{ name: 'Evaluate requirements in scope', value: 'EvaluateRequirementsInScope' },{ name: 'Evaluate all requirements', value: 'EvaluateAllRequirements' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaPolicyLogicEnginev30',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateRequirementSetsV3' ], domain: [ 'FenergoNebulaPolicyLogicEnginev30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "requirementTypes": [ "" ], "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] } }, "targetEntity": "targetEntity", "categories": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateV3' ], domain: [ 'FenergoNebulaPolicyLogicEnginev30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "requirementType": "requirementType", "targetEntity": "targetEntity", "entityType": "entityType", "categories": [ "" ], "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateRequirementsInScope' ], domain: [ 'FenergoNebulaPolicyLogicEnginev30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "requirementType": "requirementType", "targetEntity": "targetEntity", "entityType": "entityType", "categories": [ "" ], "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus" } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient" }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateAllRequirements' ], domain: [ 'FenergoNebulaPolicyLogicEnginev30' ] } } },{ displayName: 'clearRequirementsCache', name: 'clearRequirementsCache', type: 'string', required: true, default: '', description: 'If the Requirements cache should be flushed', displayOptions: { show: { endpoint: [ 'AllowsclearingtheLogicEngineAPIcache. Thisisanmaintenanceendpointanddoesnotneedtobeusedundernormalcircumstances.' ], domain: [ 'FenergoNebulaPolicyLogicEnginev30' ] } } },{ displayName: 'clearRequirementSetsCache', name: 'clearRequirementSetsCache', type: 'string', required: true, default: '', description: 'If the Requirement sets cache should be flushed', displayOptions: { show: { endpoint: [ 'AllowsclearingtheLogicEngineAPIcache. Thisisanmaintenanceendpointanddoesnotneedtobeusedundernormalcircumstances.' ], domain: [ 'FenergoNebulaPolicyLogicEnginev30' ] } } },{ displayName: 'clearDataGroupsCache', name: 'clearDataGroupsCache', type: 'string', required: true, default: '', description: 'If the DataGroup cache should be flushed', displayOptions: { show: { endpoint: [ 'AllowsclearingtheLogicEngineAPIcache. Thisisanmaintenanceendpointanddoesnotneedtobeusedundernormalcircumstances.' ], domain: [ 'FenergoNebulaPolicyLogicEnginev30' ] } } }
];

async function ExecuteFenergoNebulaPolicyLogicEnginev30(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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
requestOptions.uri = 'https://api.apac1.fenergox.com/policylogicengine/api/v3/cache/flush';
requestOptions.qs = { clearRequirementsCache: base.getNodeParameter('clearRequirementsCache', 0) as string,clearRequirementSetsCache: base.getNodeParameter('clearRequirementSetsCache', 0) as string,clearDataGroupsCache: base.getNodeParameter('clearDataGroupsCache', 0) as string };
break;
case 'EvaluateRequirementSetsV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/policylogicengine/api/v3/engine/evaluate-requirement-sets';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EvaluateV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/policylogicengine/api/v3/engine/evaluate-requirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EvaluateRequirementsInScope': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/policylogicengine/api/v3/engine/evaluate-requirements-in-scope';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EvaluateAllRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/policylogicengine/api/v3/engine/evaluate-all-requirements';

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
    FenergoNebulaPolicyLogicEnginev30Properties,
    ExecuteFenergoNebulaPolicyLogicEnginev30
}
