import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaCovenantsConditionsCommandAPIv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create a new Covenant Condition Set', value: 'CreateCovenantConditionSet' },{ name: 'Create a new Covenant Condition Version', value: 'CreateCovenantConditionVersion' },{ name: 'Update a Covenant Condition Version', value: 'UpdateCovenantConditionVersion' },{ name: 'Update a Covenant Condition Version status', value: 'UpdateCovenantConditionVersionStatus' },{ name: 'Update a Covenant Condition Version status', value: 'VerifyCovenantConditionsForJourney' },{ name: 'Take a policy snapshot for Covenant Condition', value: 'SnapshotCovenantConditionConfiguration' },{ name: 'Update a batch of covenant condition version', value: 'UpdateBatch' },{ name: 'Complete a batch of covenant condition version', value: 'CompleteBatch' },{ name: 'Take a batch of snapshot for covenant condition version', value: 'BatchSnapshot' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaCovenantsConditionsCommandAPIv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Covenant Condition Set Id', displayOptions: { show: { endpoint: [ 'CreateCovenantConditionVersion' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Covenant Condition Set Id', displayOptions: { show: { endpoint: [ 'UpdateCovenantConditionVersion' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Covenant Condition Version Id', displayOptions: { show: { endpoint: [ 'UpdateCovenantConditionVersion' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Covenant Condition Set Id', displayOptions: { show: { endpoint: [ 'UpdateCovenantConditionVersionStatus' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Covenant Condition Version Id', displayOptions: { show: { endpoint: [ 'UpdateCovenantConditionVersionStatus' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'VerifyCovenantConditionsForJourney' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Covenant Condition Set Id', displayOptions: { show: { endpoint: [ 'SnapshotCovenantConditionConfiguration' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "parentId": "parentId", "parentType": "parentType", "status": "status" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateCovenantConditionSet' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "setId": "setId", "journeyId": "journeyId", "taskId": "taskId", "description": "description", "status": "status", "covenantConditionGroups": [ { "id": "id", "dataGroupId": "dataGroupId", "dataGroupVersionNumber": 0, "name": "name", "type": "type", "covenantConditionItems": [ { "id": "id", "dataKey": "dataKey", "value": "value", "properties": {}, "associations": [ { "id": "id", "sourceId": "sourceId", "targetId": "targetId", "targetType": "targetType" } ] } ] } ], "lastUpdatedDateTime": "2024-10-07T14:16:00.7615863+00:00", "createdDateTime": "2024-10-07T14:16:00.7615917+00:00", "vesionNumber": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateCovenantConditionVersion' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "setId": "setId", "journeyId": "journeyId", "taskId": "taskId", "description": "description", "status": "status", "covenantConditionGroups": [ { "id": "id", "dataGroupId": "dataGroupId", "dataGroupVersionNumber": 0, "name": "name", "type": "type", "covenantConditionItems": [ { "id": "id", "dataKey": "dataKey", "value": "value", "properties": {}, "associations": [ { "id": "id", "sourceId": "sourceId", "targetId": "targetId", "targetType": "targetType" } ] } ] } ], "lastUpdatedDateTime": "2024-10-07T14:16:00.7617061+00:00", "createdDateTime": "2024-10-07T14:16:00.7617090+00:00", "vesionNumber": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateCovenantConditionVersion' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "status": "status" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateCovenantConditionVersionStatus' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "setId": "setId", "tenantId": "tenantId", "versionId": "versionId", "snapshotGroups": [ { "name": "name", "key": "key", "primaryDataGroupField": "primaryDataGroupField", "snapshotPropertyItems": [ { "key": "key", "label": "label", "valueType": "valueType", "order": 0, "isAdditionalField": false, "validationRule": { "id": "id", "setId": "setId", "propertyId": "propertyId", "dataGroupId": "dataGroupId", "isDataGroup": false, "propertyName": "propertyName", "friendlyName": "friendlyName", "validationType": "validationType", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-10-07T14:16:00.7620678+00:00", "maxDate": "2024-10-07T14:16:00.7620733+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "collectionMinimumCount": { "active": false, "message": "message", "requiredTypesMinCount": {}, "overallMinimumCount": 0 }, "collectionMaximumCount": { "active": false, "message": "message", "requiredTypesMaxCount": {}, "overallMaximumCount": 0 }, "externalProvider": { "active": false, "message": "message", "providerId": "providerId" } } } } ], "validationRule": { "id": "id", "setId": "setId", "propertyId": "propertyId", "dataGroupId": "dataGroupId", "isDataGroup": false, "propertyName": "propertyName", "friendlyName": "friendlyName", "validationType": "validationType", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-10-07T14:16:00.7623288+00:00", "maxDate": "2024-10-07T14:16:00.7623319+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "collectionMinimumCount": { "active": false, "message": "message", "requiredTypesMinCount": {}, "overallMinimumCount": 0 }, "collectionMaximumCount": { "active": false, "message": "message", "requiredTypesMaxCount": {}, "overallMaximumCount": 0 }, "externalProvider": { "active": false, "message": "message", "providerId": "providerId" } } } } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SnapshotCovenantConditionConfiguration' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": [ { "id": "id", "setId": "setId", "journeyId": "journeyId", "taskId": "taskId", "description": "description", "status": "status", "covenantConditionGroups": [ { "id": "id", "dataGroupId": "dataGroupId", "dataGroupVersionNumber": 0, "name": "name", "type": "type", "covenantConditionItems": [ { "id": "id", "dataKey": "dataKey", "value": "value", "properties": {}, "associations": [ { "id": "id", "sourceId": "sourceId", "targetId": "targetId", "targetType": "targetType" } ] } ] } ], "lastUpdatedDateTime": "2024-10-07T14:16:00.7626034+00:00", "createdDateTime": "2024-10-07T14:16:00.7626065+00:00", "vesionNumber": 0 } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateBatch' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requests": [ { "setId": "setId", "versionId": "versionId" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CompleteBatch' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": [ { "setId": "setId", "tenantId": "tenantId", "versionId": "versionId", "snapshotGroups": [ { "name": "name", "key": "key", "primaryDataGroupField": "primaryDataGroupField", "snapshotPropertyItems": [ { "key": "key", "label": "label", "valueType": "valueType", "order": 0, "isAdditionalField": false, "validationRule": { "id": "id", "setId": "setId", "propertyId": "propertyId", "dataGroupId": "dataGroupId", "isDataGroup": false, "propertyName": "propertyName", "friendlyName": "friendlyName", "validationType": "validationType", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-10-07T14:16:00.7629024+00:00", "maxDate": "2024-10-07T14:16:00.7629057+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "collectionMinimumCount": { "active": false, "message": "message", "requiredTypesMinCount": {}, "overallMinimumCount": 0 }, "collectionMaximumCount": { "active": false, "message": "message", "requiredTypesMaxCount": {}, "overallMaximumCount": 0 }, "externalProvider": { "active": false, "message": "message", "providerId": "providerId" } } } } ], "validationRule": { "id": "id", "setId": "setId", "propertyId": "propertyId", "dataGroupId": "dataGroupId", "isDataGroup": false, "propertyName": "propertyName", "friendlyName": "friendlyName", "validationType": "validationType", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-10-07T14:16:00.7630952+00:00", "maxDate": "2024-10-07T14:16:00.7630977+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "collectionMinimumCount": { "active": false, "message": "message", "requiredTypesMinCount": {}, "overallMinimumCount": 0 }, "collectionMaximumCount": { "active": false, "message": "message", "requiredTypesMaxCount": {}, "overallMaximumCount": 0 }, "externalProvider": { "active": false, "message": "message", "providerId": "providerId" } } } } ] } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'BatchSnapshot' ], domain: [ 'FenergoNebulaCovenantsConditionsCommandAPIv10' ] } } }
];

async function ExecuteFenergoNebulaCovenantsConditionsCommandAPIv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let setId=''; let id=''; let journeyId='';
switch(endpoint){ case 'CreateCovenantConditionSet': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/covenantsconditionscommand/api/CovenantCondition';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateCovenantConditionVersion': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/covenantsconditionscommand/api/CovenantCondition/{setId}/version'.replace('{setId}', setId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateCovenantConditionVersion': setId = base.getNodeParameter('setId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/covenantsconditionscommand/api/CovenantCondition/{setId}/version/{id}'.replace('{setId}', setId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateCovenantConditionVersionStatus': setId = base.getNodeParameter('setId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/covenantsconditionscommand/api/CovenantCondition/{setId}/version/{id}/status'.replace('{setId}', setId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'VerifyCovenantConditionsForJourney': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/covenantsconditionscommand/api/CovenantCondition/journey/{journeyId}/verify'.replace('{journeyId}', journeyId);

break;
case 'SnapshotCovenantConditionConfiguration': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/covenantsconditionscommand/api/CovenantCondition/set/{setId}/snapshot'.replace('{setId}', setId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateBatch': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/covenantsconditionscommand/api/batch/update';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CompleteBatch': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.nar1.fenergox.com/covenantsconditionscommand/api/batch/complete';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'BatchSnapshot': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/covenantsconditionscommand/api/batch/snapshot';

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
    FenergoNebulaCovenantsConditionsCommandAPIv10Properties,
    ExecuteFenergoNebulaCovenantsConditionsCommandAPIv10
}
