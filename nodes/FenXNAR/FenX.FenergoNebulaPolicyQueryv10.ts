import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaPolicyQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get data groups', value: 'GetAllDataGroups' },{ name: 'Get latest data groups with published or archived status', value: 'GetLatestDataGroups' },{ name: 'Get data groups lite', value: 'GetDataGroupsLite' },{ name: 'Get data group by id', value: 'GetDataGroupById' },{ name: 'Get data group by id and version', value: 'GetDataGroupVersionById' },{ name: 'Get data group field by id', value: 'GetDataGroupFieldById' },{ name: 'Get data groups by id and version numbers', value: 'GetDataGroups' },{ name: 'Get requirement sets', value: 'GetAllRequirementSets' },{ name: 'Get requirement set by id', value: 'GetRequirementSetById' },{ name: 'Get requirement set by id and version', value: 'GetRequirementSetVersionById' },{ name: 'Get requirement by id', value: 'GetRequirementById' },{ name: 'Get jurisdictions', value: 'GetJurisdictions' },{ name: 'Get requirements in scope', value: 'GetRequirementsInScope' },{ name: 'Get the requirement set active version by jurisdiction', value: 'GetActiveSetVersionByJurisdiction' },{ name: 'Get requirements by tags list', value: 'GetRequirementsByTags' },{ name: 'Get list of published tags for tenant', value: 'GetTagsByTenant' },{ name: 'Get list of tags in Requirement Set', value: 'GetTagsByRequirementSetId' },{ name: 'Get validation data by jurisdiction(s)', value: 'GetValidationRules' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaPolicyQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'dataGroupId', name: 'dataGroupId', type: 'string', required: true, default: '', description: 'Data group id', displayOptions: { show: { endpoint: [ 'GetDataGroupById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'dataGroupId', name: 'dataGroupId', type: 'string', required: true, default: '', description: 'Data group id', displayOptions: { show: { endpoint: [ 'GetDataGroupVersionById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Data group version number', displayOptions: { show: { endpoint: [ 'GetDataGroupVersionById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'dataGroupId', name: 'dataGroupId', type: 'string', required: true, default: '', description: 'Data group id', displayOptions: { show: { endpoint: [ 'GetDataGroupFieldById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Data group version number', displayOptions: { show: { endpoint: [ 'GetDataGroupFieldById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Data group field id', displayOptions: { show: { endpoint: [ 'GetDataGroupFieldById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Requirement set id', displayOptions: { show: { endpoint: [ 'GetRequirementSetById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Requirement set id', displayOptions: { show: { endpoint: [ 'GetRequirementSetVersionById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Requirement set version number', displayOptions: { show: { endpoint: [ 'GetRequirementSetVersionById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Requirement set id', displayOptions: { show: { endpoint: [ 'GetRequirementById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Requirement set version number', displayOptions: { show: { endpoint: [ 'GetRequirementById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Requirement id', displayOptions: { show: { endpoint: [ 'GetRequirementById' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'jurisdiction', name: 'jurisdiction', type: 'string', required: true, default: '', description: 'The Jurisdiction', displayOptions: { show: { endpoint: [ 'GetActiveSetVersionByJurisdiction' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Requirement Set Id', displayOptions: { show: { endpoint: [ 'GetTagsByRequirementSetId' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "identifiers": [ { "id": "id", "versionNumbers": [ 0 ] } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetDataGroups' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "jurisdiction": "jurisdiction", "jurisdictions": [ "" ], "type": "type", "category": [ "" ], "entityType": "entityType", "isMandatory": false, "isSensitiveData": false, "isMaterialData": false, "isIndexable": false, "dataField": { "propertyName": "propertyName", "propertyType": "propertyType", "propertyTypeId": "propertyTypeId", "linkChildFieldPropertyName": "linkChildFieldPropertyName", "linkedParentFieldPropertyName": "linkedParentFieldPropertyName", "externalSearchApiProviderId": "externalSearchApiProviderId", "propertyTypeVersion": 0, "formulaSchema": { "formulaSetId": "formulaSetId", "versionNumber": 0, "formulaString": "formulaString", "formulaVariables": {} }, "dateTimePeriodFormulaSchema": { "formulaSetId": "formulaSetId", "versionNumber": 0, "formulaString": "formulaString", "dateTimePeriodFormulaVariables": {} } }, "targetEntity": "targetEntity", "includeConditions": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetRequirementsInScope' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "jurisdictions": [ "" ], "entityType": "entityType", "category": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetValidationRules' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'onlyPublishedAndArchived', name: 'onlyPublishedAndArchived', type: 'string', required: true, default: '', description: 'Flag that indicate that we will return only versions with status Published and Archived', displayOptions: { show: { endpoint: [ 'GetAllDataGroups' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'onlyPublishedAndArchived', name: 'onlyPublishedAndArchived', type: 'string', required: true, default: '', description: 'Flag that indicate that we will return only versions with status Published and Archived', displayOptions: { show: { endpoint: [ 'GetDataGroupsLite' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'includeRequirements', name: 'includeRequirements', type: 'string', required: true, default: '', description: 'Flag to include requirements in the response.', displayOptions: { show: { endpoint: [ 'GetAllRequirementSets' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } },{ displayName: 'tags', name: 'tags', type: 'string', required: true, default: '', description: 'List of tags', displayOptions: { show: { endpoint: [ 'GetRequirementsByTags' ], domain: [ 'FenergoNebulaPolicyQueryv10' ] } } }
];

async function ExecuteFenergoNebulaPolicyQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let dataGroupId=''; let versionNumber=''; let id=''; let setId=''; let jurisdiction='';
switch(endpoint){ case 'GetAllDataGroups': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/data-group';
requestOptions.qs = { onlyPublishedAndArchived: base.getNodeParameter('onlyPublishedAndArchived', 0) as string };
break;
case 'GetLatestDataGroups': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/data-group/latest';

break;
case 'GetDataGroupsLite': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/data-group/lite';
requestOptions.qs = { onlyPublishedAndArchived: base.getNodeParameter('onlyPublishedAndArchived', 0) as string };
break;
case 'GetDataGroupById': dataGroupId = base.getNodeParameter('dataGroupId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/data-group/{dataGroupId}'.replace('{dataGroupId}', dataGroupId);

break;
case 'GetDataGroupVersionById': dataGroupId = base.getNodeParameter('dataGroupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/data-group/{dataGroupId}/version/{versionNumber}'.replace('{dataGroupId}', dataGroupId).replace('{versionNumber}', versionNumber);

break;
case 'GetDataGroupFieldById': dataGroupId = base.getNodeParameter('dataGroupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/data-group/{dataGroupId}/version/{versionNumber}/field/{id}'.replace('{dataGroupId}', dataGroupId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'GetDataGroups': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/data-group/versions';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAllRequirementSets': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/requirement-set';
requestOptions.qs = { includeRequirements: base.getNodeParameter('includeRequirements', 0) as string };
break;
case 'GetRequirementSetById': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/requirement-set/{setId}'.replace('{setId}', setId);

break;
case 'GetRequirementSetVersionById': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/requirement-set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'GetRequirementById': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/requirement-set/{setId}/version/{versionNumber}/field/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'GetJurisdictions': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/requirement-set/jurisdictions';

break;
case 'GetRequirementsInScope': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/requirements-in-scope';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetActiveSetVersionByJurisdiction': jurisdiction = base.getNodeParameter('jurisdiction', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/requirements-in-scope/jurisdiction/{jurisdiction}'.replace('{jurisdiction}', jurisdiction);

break;
case 'GetRequirementsByTags': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/tag/requirements';
requestOptions.qs = { tags: base.getNodeParameter('tags', 0) as string };
break;
case 'GetTagsByTenant': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/tag';

break;
case 'GetTagsByRequirementSetId': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/tag/requirement-set/{setId}'.replace('{setId}', setId);

break;
case 'GetValidationRules': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/policyquery/api/validation-rule/validation-rules';

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
    FenergoNebulaPolicyQueryv10Properties,
    ExecuteFenergoNebulaPolicyQueryv10
}
