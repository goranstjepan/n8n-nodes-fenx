import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaDigitalIDVCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Save Provider status', value: 'SaveProviderStatus' },{ name: 'Save Configuration', value: 'SaveProviderConfiguration' },{ name: 'Perform a Digital Footprint Assessment', value: 'PerformAssessment' },{ name: 'Creates an Entity in Scope for Idv.', value: 'CreatesanEntityinScopeforIdv.' },{ name: 'Updates the Entity in Scope for Idv.', value: 'UpdatestheEntityinScopeforIdv.' },{ name: 'Deletes the Entity in Scope for Idv.', value: 'DeletestheEntityinScopeforIdv.' },{ name: 'Evaluate and create IDV model for an entity', value: 'EvaluateandcreateIDVmodelforanentity' },{ name: 'Evaluate and update IDV model for an entity', value: 'EvaluateandupdateIDVmodelforanentity' },{ name: 'Create new Idv Requirement Status Model', value: 'CreateIdvRequirementStatusModel' },{ name: 'Create single Idv Requirement Status.', value: 'CreateSingleIdvRequirementStatusModel' },{ name: 'Update existing Idv Requirement Status Model.', value: 'UpdateIdvRequirementStatusModel' },{ name: 'Update single Idv Requirement Status.', value: 'UpdateSingleIdvRequirementStatusModel' },{ name: 'Measures the completeness of Ownership and Control Idv requirements', value: 'MeasuresthecompletenessofOwnershipandControlIdvrequirements' },{ name: 'Initiate Verification', value: 'InitiateVerification' },{ name: 'Store a Face Liveness Result', value: 'FaceLiveness' },{ name: 'Complete a Face Similarity Check', value: 'FaceSimilarity' },{ name: 'Complete a Document Validation Check', value: 'DocumentValidation' },{ name: 'Create url to upload file. This endpoint is intended for use with the Face Liveness and Similarity flows.', value: 'Createurltouploadfile. ThisendpointisintendedforusewiththeFaceLivenessandSimilarityflows.' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaDigitalIDVCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'SaveProviderStatus' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'SaveProviderConfiguration' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The identifier.', displayOptions: { show: { endpoint: [ 'UpdatestheEntityinScopeforIdv.' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The identifier.', displayOptions: { show: { endpoint: [ 'DeletestheEntityinScopeforIdv.' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The identifier', displayOptions: { show: { endpoint: [ 'EvaluateandupdateIDVmodelforanentity' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The identifier.', displayOptions: { show: { endpoint: [ 'UpdateIdvRequirementStatusModel' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The identifier.', displayOptions: { show: { endpoint: [ 'UpdateSingleIdvRequirementStatusModel' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": false }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveProviderStatus' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "configuration": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveProviderConfiguration' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "taskId": "taskId", "entityId": "entityId", "assessmentTypes": [ "" ], "phoneNumber": "phoneNumber", "firstName": "firstName", "lastName": "lastName", "ipAddress": "ipAddress", "emailAddress": "emailAddress", "userAgent": "userAgent" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'PerformAssessment' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "journeyId": "journeyId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreatesanEntityinScopeforIdv.' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "taskId": "taskId", "entityId": "entityId", "entityDraftId": "entityDraftId", "rootId": "rootId", "parentDraftId": "parentDraftId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateandcreateIDVmodelforanentity' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "taskId": "taskId", "entityId": "entityId", "entityDraftId": "entityDraftId", "rootId": "rootId", "parentDraftId": "parentDraftId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'EvaluateandupdateIDVmodelforanentity' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "journeyId": "journeyId", "statuses": [ { "requirementId": "requirementId", "status": "status", "ownershipAndControlDataKey": "ownershipAndControlDataKey", "requirementName": "requirementName", "idvMinimumPartyCount": 0, "idvAllParties": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateIdvRequirementStatusModel' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "journeyId": "journeyId", "status": { "requirementId": "requirementId", "status": "status", "ownershipAndControlDataKey": "ownershipAndControlDataKey", "requirementName": "requirementName", "idvMinimumPartyCount": 0, "idvAllParties": false } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateSingleIdvRequirementStatusModel' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "statuses": [ { "requirementId": "requirementId", "status": "status", "ownershipAndControlDataKey": "ownershipAndControlDataKey", "requirementName": "requirementName", "idvMinimumPartyCount": 0, "idvAllParties": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateIdvRequirementStatusModel' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementId": "requirementId", "status": "status", "ownershipAndControlDataKey": "ownershipAndControlDataKey", "requirementName": "requirementName", "idvMinimumPartyCount": 0, "idvAllParties": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateSingleIdvRequirementStatusModel' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "journeyId": "journeyId", "taskId": "taskId", "entityId": "entityId", "entityDraftId": "entityDraftId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'MeasuresthecompletenessofOwnershipandControlIdvrequirements' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityType": "entityType", "entityId": "entityId", "locale": "locale", "contextValues": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'InitiateVerification' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "journeyId": "journeyId", "taskId": "taskId", "entityId": "entityId", "code": 0, "metadata": {}, "status": 0, "tag": "tag", "estimatedAge": 0, "transactionId": "transactionId", "faceImageId": "faceImageId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'FaceLiveness' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "taskId": "taskId", "faceImageId": "faceImageId", "documentKey": "documentKey" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'FaceSimilarity' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "documentId": "documentId", "documentKey": "documentKey", "journeyId": "journeyId", "taskId": "taskId", "entityId": "entityId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'DocumentValidation' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "fileIdentifier": "fileIdentifier" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Createurltouploadfile. ThisendpointisintendedforusewiththeFaceLivenessandSimilarityflows.' ], domain: [ 'FenergoNebulaDigitalIDVCommandv10' ] } } }
];

async function ExecuteFenergoNebulaDigitalIDVCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let providerId=''; let id='';
switch(endpoint){ case 'SaveProviderStatus': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/configuration/provider/{providerId}/status'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SaveProviderConfiguration': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/configuration/provider/{providerId}/configuration'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'PerformAssessment': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/dfa';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreatesanEntityinScopeforIdv.': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/entity-in-scope';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdatestheEntityinScopeforIdv.': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/entity-in-scope/{id}'.replace('{id}', id);

break;
case 'DeletestheEntityinScopeforIdv.': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/entity-in-scope/{id}'.replace('{id}', id);

break;
case 'EvaluateandcreateIDVmodelforanentity': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/entity-in-scope/evaluate-create-idv-status';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'EvaluateandupdateIDVmodelforanentity': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/entity-in-scope/evaluate-update-idv-status/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateIdvRequirementStatusModel': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/idv-requirement-status';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateSingleIdvRequirementStatusModel': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/idv-requirement-status/create-single-status';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateIdvRequirementStatusModel': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/idv-requirement-status/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateSingleIdvRequirementStatusModel': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/idv-requirement-status/update-single-status/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'MeasuresthecompletenessofOwnershipandControlIdvrequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/idv-requirement-status/measure-completeness';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'InitiateVerification': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/verification';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'FaceLiveness': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/verification/liveness';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'FaceSimilarity': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/verification/similarity';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DocumentValidation': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/verification/document';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'Createurltouploadfile. ThisendpointisintendedforusewiththeFaceLivenessandSimilarityflows.': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/digitalidvcommand/api/verification/create-url-to-upload-file';

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
    FenergoNebulaDigitalIDVCommandv10Properties,
    ExecuteFenergoNebulaDigitalIDVCommandv10
}
