import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaPolicyQueryv30Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get requirements in scope', value: 'GetRequirementsInScopeV3' },{ name: 'Search requirements', value: 'SearchRequirements' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaPolicyQueryv30',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "type": "type", "name": "name", "category": [ "" ], "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "isMandatory": false, "entityType": "entityType", "isMaterialData": false, "isSensitiveData": false, "dataField": { "propertyName": "propertyName", "propertyType": "propertyType", "propertyTypeId": "propertyTypeId", "linkChildFieldPropertyName": "linkChildFieldPropertyName", "linkedParentFieldPropertyName": "linkedParentFieldPropertyName", "externalSearchApiProviderId": "externalSearchApiProviderId", "propertyTypeVersion": 0, "formulaSchema": { "formulaSetId": "formulaSetId", "versionNumber": 0, "formulaString": "formulaString", "formulaVariables": {} } }, "isIndexable": false, "includeConditions": false, "targetEntity": "targetEntity", "disableFilteringForConditionalValues": false, "enableBasicDataRequirementsFiltering": false, "disableDeduplication": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetRequirementsInScopeV3' ], domain: [ 'FenergoNebulaPolicyQueryv30' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "type": "type", "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "category": [ "" ], "entityType": "entityType", "isMandatory": false, "isSensitiveData": false, "isMaterialData": false, "isIndexable": false, "dataField": { "propertyName": "propertyName", "propertyType": "propertyType", "propertyTypeId": "propertyTypeId", "linkChildFieldPropertyName": "linkChildFieldPropertyName", "linkedParentFieldPropertyName": "linkedParentFieldPropertyName", "externalSearchApiProviderId": "externalSearchApiProviderId", "propertyTypeVersion": 0, "formulaSchema": { "formulaSetId": "formulaSetId", "versionNumber": 0, "formulaString": "formulaString", "formulaVariables": {} } }, "targetEntity": "targetEntity", "includeConditions": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SearchRequirements' ], domain: [ 'FenergoNebulaPolicyQueryv30' ] } } }
];

async function ExecuteFenergoNebulaPolicyQueryv30(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'GetRequirementsInScopeV3': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/policyquery/api/v3/requirements-in-scope';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SearchRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/policyquery/api/v3/requirements-in-scope/search';

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
    FenergoNebulaPolicyQueryv30Properties,
    ExecuteFenergoNebulaPolicyQueryv30
}
