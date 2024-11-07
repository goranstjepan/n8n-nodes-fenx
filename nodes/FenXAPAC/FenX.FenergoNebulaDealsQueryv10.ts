import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaDealsQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get Deal Draft By Id', value: 'GetDealDraftById' },{ name: 'Get Deal Drafts By Journey Id', value: 'GetDealDraftsByJourneyId' },{ name: 'Get All Deals', value: 'GetAllDeals' },{ name: 'Get Deal By Id', value: 'GetDealById' },{ name: 'Get a deals snapshot', value: 'GetDealsSnapshot' },{ name: 'Get Verified Deals by Entity ID', value: 'GetVerifiedDealsByEntityId' },{ name: 'Get Related Deals Data Source', value: 'GetRelatedDealsDataSource' },{ name: 'Get pre-sign URLs for a file identifiers This endpoint is intended for use with the new DataField type - RichTextEditor.', value: 'GetPreSignUrlForFileIdentifiers' },{ name: 'Get all verified and draft deals for the current journey', value: 'GetAllDealsForEntityJourney' },{ name: 'Get calculated value for property', value: 'GetCalculatedPropertyValue' },{ name: 'Get Requirement Sets', value: 'GetAllRequirementSets' },{ name: 'Get deals requirement sets by Id', value: 'GetRequirementSetById' },{ name: 'Get current active requirement set version', value: 'GetActiveRequirementSetVersion' },{ name: 'Get deal requirement set by id and version', value: 'GetRequirementSetByIdVersionNumber' },{ name: 'Get requirement by id', value: 'GetRequirementById' },{ name: 'Evaluate all requirements', value: 'EvaluateRequirements' },{ name: 'Get Requirements Data Source', value: 'GetRequirementsDataSource' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaDealsQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'dealDraftId', name: 'dealDraftId', type: 'string', required: true, default: '', description: 'Deal Draft Id', displayOptions: { show: { endpoint: [ 'GetDealDraftById' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'GetDealDraftsByJourneyId' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'dealId', name: 'dealId', type: 'string', required: true, default: '', description: 'Deal Id', displayOptions: { show: { endpoint: [ 'GetDealById' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The id of a journey that the deals belong to', displayOptions: { show: { endpoint: [ 'GetDealsSnapshot' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'The id of a task that the deals belong to', displayOptions: { show: { endpoint: [ 'GetDealsSnapshot' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetVerifiedDealsByEntityId' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Id of the existing Entity', displayOptions: { show: { endpoint: [ 'GetRelatedDealsDataSource' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The Id of the existing Journey', displayOptions: { show: { endpoint: [ 'GetRelatedDealsDataSource' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'dealId', name: 'dealId', type: 'string', required: true, default: '', description: 'Deal id', displayOptions: { show: { endpoint: [ 'GetPreSignUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity Id', displayOptions: { show: { endpoint: [ 'GetAllDealsForEntityJourney' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'GetAllDealsForEntityJourney' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'requirementSetId', name: 'requirementSetId', type: 'string', required: true, default: '', description: 'Requirement Set Id', displayOptions: { show: { endpoint: [ 'GetRequirementSetById' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'requirementSetId', name: 'requirementSetId', type: 'string', required: true, default: '', description: 'Requirement Set Id', displayOptions: { show: { endpoint: [ 'GetActiveRequirementSetVersion' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'requirementSetId', name: 'requirementSetId', type: 'string', required: true, default: '', description: 'Deal requirement set id', displayOptions: { show: { endpoint: [ 'GetRequirementSetByIdVersionNumber' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Deal requirement set version number', displayOptions: { show: { endpoint: [ 'GetRequirementSetByIdVersionNumber' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'requirementSetId', name: 'requirementSetId', type: 'string', required: true, default: '', description: 'Requirement set id', displayOptions: { show: { endpoint: [ 'GetRequirementById' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Requirement set version number', displayOptions: { show: { endpoint: [ 'GetRequirementById' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Requirement id', displayOptions: { show: { endpoint: [ 'GetRequirementById' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "isRootContent": false, "dataKey": "dataKey", "fileIdentifiers": [ "" ], "dealDraftId": "dealDraftId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPreSignUrlForFileIdentifiers' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "propertyName": "propertyName", "calculationProperties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetCalculatedPropertyValue' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementSetId": "requirementSetId", "version": 0, "requirementType": "requirementType", "properties": {}, "dataSources": { "entityDataMetadata": { "dataSource": "dataSource", "entityType": "entityType" }, "eventIngress": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "changedFields": { "dataSource": "dataSource", "changedFields": [ { "key": "key" } ] }, "relatedClient": { "dataSource": "dataSource", "properties": {} }, "relatedProducts": { "dataSource": "dataSource", "products": [ { "properties": {}, "lifecycleStatus": "lifecycleStatus", "relationshipTypes": [ "" ] } ] }, "currentDataGroupItem": { "dataSource": "dataSource", "properties": {} }, "externalDataAdapter": { "dataSource": "dataSource", "eventType": "eventType", "eventSubtype": "eventSubtype" }, "entityAssociation": { "dataSource": "dataSource", "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "manualCreditAssessment": { "dataSource": "dataSource", "creditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "assessmentComment": "assessmentComment", "taskId": "taskId", "taskDataKey": "taskDataKey" } ] }, "autoCreditAssessment": { "dataSource": "dataSource", "autoCreditAssessments": [ { "properties": {}, "assessmentOutcome": "assessmentOutcome", "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "manualCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ], "relatedPartyCreditScreenings": [ { "taskDataKey": "taskDataKey", "taskId": "taskId", "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {} } ] }, "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] }, "currentJourneys": { "dataSource": "dataSource", "inProgressJourneyTypes": [ "" ] }, "autoCreditScreening": { "dataSource": "dataSource", "creditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ], "relatedPartyCreditScreenings": [ { "entityId": "entityId", "creditScreeningOutcome": "creditScreeningOutcome", "properties": {}, "providerInternalIdentifier": "providerInternalIdentifier" } ] }, "currentProduct": { "dataSource": "dataSource", "properties": {}, "lifecycleStatus": "lifecycleStatus" }, "relatedDeals": { "dataSource": "dataSource", "relatedDeals": [ { "properties": {} } ] }, "mainEntity": { "dataSource": "dataSource", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "relatedAssets": { "dataSource": "dataSource", "assets": [ { "properties": {} } ] }, "relatedAssociations": { "dataSource": "dataSource", "relatedAssociations": [ { "associationType": "associationType", "ownershipPercentage": 0.0, "associationToClient": "associationToClient", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } } ] }, "accountRelatedFunds": { "dataSource": "dataSource", "accountRelatedFunds": [ { "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } } ] }, "journeyLevelData": { "dataSource": "dataSource", "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} } }, "relatedParties": { "dataSource": "dataSource", "relatedParties": [ { "properties": { "singleProperties": {}, "collectionProperties": {}, "customProperties": {} }, "metadata": {} } ] }, "currentField": { "dataSource": "dataSource", "currentField": "currentField" }, "significanceEngine": { "dataSource": "dataSource", "significanceEngine": [ { "key": "key" } ] } }, "categories": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateRequirements' ], domain: [ 'FenergoNebulaDealsQueryv10' ] } } }
];

async function ExecuteFenergoNebulaDealsQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let dealDraftId=''; let journeyId=''; let dealId=''; let taskId=''; let entityId=''; let requirementSetId=''; let versionNumber=''; let id='';
switch(endpoint){ case 'GetDealDraftById': dealDraftId = base.getNodeParameter('dealDraftId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals/drafts/{dealDraftId}'.replace('{dealDraftId}', dealDraftId);

break;
case 'GetDealDraftsByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals/drafts/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetAllDeals': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals';

break;
case 'GetDealById': dealId = base.getNodeParameter('dealId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals/{dealId}'.replace('{dealId}', dealId);

break;
case 'GetDealsSnapshot': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetVerifiedDealsByEntityId': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals/entity/{entityId}'.replace('{entityId}', entityId);

break;
case 'GetRelatedDealsDataSource': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals/related-deals/entity/{entityId}/journey/{journeyId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId);

break;
case 'GetPreSignUrlForFileIdentifiers': dealId = base.getNodeParameter('dealId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals/{dealId}/pre-sign-urls'.replace('{dealId}', dealId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAllDealsForEntityJourney': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals/entity/{entityId}/journey/{journeyId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId);

break;
case 'GetCalculatedPropertyValue': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/deals/external-calculations/calculate-property-value';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAllRequirementSets': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/requirement-set';

break;
case 'GetRequirementSetById': requirementSetId = base.getNodeParameter('requirementSetId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/requirement-set/{requirementSetId}'.replace('{requirementSetId}', requirementSetId);

break;
case 'GetActiveRequirementSetVersion': requirementSetId = base.getNodeParameter('requirementSetId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/requirement-set/{requirementSetId}/version/active'.replace('{requirementSetId}', requirementSetId);

break;
case 'GetRequirementSetByIdVersionNumber': requirementSetId = base.getNodeParameter('requirementSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/requirement-set/{requirementSetId}/version/{versionNumber}'.replace('{requirementSetId}', requirementSetId).replace('{versionNumber}', versionNumber);

break;
case 'GetRequirementById': requirementSetId = base.getNodeParameter('requirementSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/requirement-set/{requirementSetId}/version/{versionNumber}/field/{id}'.replace('{requirementSetId}', requirementSetId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'EvaluateRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/requirement-set/evaluate-requirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetRequirementsDataSource': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/dealsquery/api/requirement-set/requirements-data-source';

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
    FenergoNebulaDealsQueryv10Properties,
    ExecuteFenergoNebulaDealsQueryv10
}
