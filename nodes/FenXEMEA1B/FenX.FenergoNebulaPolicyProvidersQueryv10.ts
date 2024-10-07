import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaPolicyProvidersQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get suggestions by multiple field criteria from external provider.', value: 'GetMultiFieldSuggestions' },{ name: 'Get details for multiple field criteria suggestion from external provider.', value: 'GetMultiFieldSuggestionDetails' },{ name: 'Get suggestions from external provider.', value: 'GetSuggestions' },{ name: 'Get validation from external provider.', value: 'GetValidation' },{ name: 'Send all fields of a DataGroup to an external provider to allow validation of several fields at once, or by using some fields as context for the validation of another', value: 'GetDataGroupValidation' },{ name: 'Send entity id, draft id, task id and journey id to an external provider to allow any custom defined task to be triggered. Once the external provider is done, return "IsSuccess" flag true or false.', value: 'GetCustomTask' },{ name: 'Calls one or more other domain services to calculate the value a property should have based on the information provided about that property within the request', value: 'GetCalculatedPropertyValue' },{ name: 'Get providers', value: 'GetAllPolicyProviders' },{ name: 'Get provider by id', value: 'GetProviderById' },{ name: 'Get providers by Data Group Id', value: 'GetPolicyProvidersByDataGroupId' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaPolicyProvidersQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The ID of the provider.', displayOptions: { show: { endpoint: [ 'GetSuggestions' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'PolicyApiProvider id', displayOptions: { show: { endpoint: [ 'GetProviderById' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'dataGroupId', name: 'dataGroupId', type: 'string', required: true, default: '', description: 'Data Group Id', displayOptions: { show: { endpoint: [ 'GetPolicyProvidersByDataGroupId' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "providerId": "providerId", "searchFields": [ { "fieldName": "fieldName", "fieldValue": "fieldValue" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetMultiFieldSuggestions' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "providerId": "providerId", "suggestionId": "suggestionId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetMultiFieldSuggestionDetails' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "providerId": "providerId", "fieldName": "fieldName", "fieldValue": "fieldValue", "entityId": "entityId", "entityDraftId": "entityDraftId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetValidation' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "providerId": "providerId", "fields": [ { "fieldName": "fieldName", "fieldValue": "fieldValue" } ], "entityId": "entityId", "entityDraftId": "entityDraftId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetDataGroupValidation' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "providerId": "providerId", "entityId": "entityId", "entityDraftId": "entityDraftId", "taskId": "taskId", "journeyId": "journeyId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetCustomTask' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "calculatorName": "calculatorName", "propertyName": "propertyName", "calculationProperties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetCalculatedPropertyValue' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'fieldName', name: 'fieldName', type: 'string', required: true, default: '', description: 'The name of the field.', displayOptions: { show: { endpoint: [ 'GetSuggestions' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } },{ displayName: 'fieldValue', name: 'fieldValue', type: 'string', required: true, default: '', description: 'The value of the field.', displayOptions: { show: { endpoint: [ 'GetSuggestions' ], domain: [ 'FenergoNebulaPolicyProvidersQueryv10' ] } } }
];

async function ExecuteFenergoNebulaPolicyProvidersQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let providerId=''; let dataGroupId='';
switch(endpoint){ case 'GetMultiFieldSuggestions': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/external-adapter/suggestions';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetMultiFieldSuggestionDetails': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/external-adapter/suggestion/details';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetSuggestions': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/external-adapter/suggestions/{providerId}'.replace('{providerId}', providerId);
requestOptions.qs = { fieldName: base.getNodeParameter('fieldName', 0) as string,fieldValue: base.getNodeParameter('fieldValue', 0) as string };
break;
case 'GetValidation': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/external-adapter/validation';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetDataGroupValidation': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/external-adapter/validation/datagroup';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetCustomTask': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/external-adapter/validation/customtask';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetCalculatedPropertyValue': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/external-adapter/calculation/property-value';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAllPolicyProviders': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/provider';

break;
case 'GetProviderById': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/provider/{providerId}'.replace('{providerId}', providerId);

break;
case 'GetPolicyProvidersByDataGroupId': dataGroupId = base.getNodeParameter('dataGroupId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/policyprovidersquery/api/provider/datagroup/{dataGroupId}'.replace('{dataGroupId}', dataGroupId);

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
    FenergoNebulaPolicyProvidersQueryv10Properties,
    ExecuteFenergoNebulaPolicyProvidersQueryv10
}
