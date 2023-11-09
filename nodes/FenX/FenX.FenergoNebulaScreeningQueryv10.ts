import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaScreeningQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get data of an existing batch with batch Id', value: 'GetBatchById' },{ name: 'Get data of an existing batch with journey Id', value: 'GetBatchByJourneyId' },{ name: 'Get data of an existing batch with journey Id and process Id', value: 'GetBatchByJourneyAndProcessId' },{ name: 'Get the batches with Legal Entity Id', value: 'GetBatchesByLegalEntityId' },{ name: 'Get data of an existing configuration', value: 'GetConfiguration' },{ name: 'Get a lite version of the data of an existing configuration without requiring screening configuration permissions', value: 'GetConfigurationLite' },{ name: 'Get provider from configuration', value: 'GetProvider' },{ name: 'Get all entities and matches in a batch', value: 'GetEntitiesByBatchId' },{ name: 'Get data of an entity, including its matches', value: 'GetEntityById' },{ name: 'Get all matches for an entity', value: 'GetMatchesByEntityId' },{ name: 'Get data of a match', value: 'GetMatchById' },{ name: 'Get all entities in scope for Screening for a given Journey and Process', value: 'GetScopedEntitiesByJourneyAndProcessId' },{ name: 'Get all scoping rule sets', value: 'GetAllScopingRuleSetsLite' },{ name: 'Get the current scoping rule set version by scopingRuleSetId', value: 'GetCurrentScopingRuleSetVersionByRuleSetId' },{ name: 'Get scoping rule set version by scopingRuleSetId and versionNumber', value: 'GetScopingRuleSetVersionByRuleSetIdAndVersionNumber' },{ name: 'Get all entities that have ongoing screening enabled for some provider', value: 'GetAllEntitiesOngoingScreeningEnabled' },{ name: 'Gets an existing Screening entity by ID', value: 'GetEntity' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaScreeningQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing batch to get', displayOptions: { show: { endpoint: [ 'GetBatchById' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The Id of the journey', displayOptions: { show: { endpoint: [ 'GetBatchByJourneyId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The Id of the journey', displayOptions: { show: { endpoint: [ 'GetBatchByJourneyAndProcessId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'processId', name: 'processId', type: 'string', required: true, default: '', description: 'The Id of the process that started the batch', displayOptions: { show: { endpoint: [ 'GetBatchByJourneyAndProcessId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'legalEntityId', name: 'legalEntityId', type: 'string', required: true, default: '', description: 'The Id of the Legal Entity', displayOptions: { show: { endpoint: [ 'GetBatchesByLegalEntityId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The ID of provider', displayOptions: { show: { endpoint: [ 'GetProvider' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'batchId', name: 'batchId', type: 'string', required: true, default: '', description: 'The ID of the batch the entities belong to', displayOptions: { show: { endpoint: [ 'GetEntitiesByBatchId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The ID of the entity', displayOptions: { show: { endpoint: [ 'GetEntityById' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'batchId', name: 'batchId', type: 'string', required: true, default: '', description: 'The batch ID the entity belongs to', displayOptions: { show: { endpoint: [ 'GetEntityById' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The ID of the entity the matches belong to', displayOptions: { show: { endpoint: [ 'GetMatchesByEntityId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'batchId', name: 'batchId', type: 'string', required: true, default: '', description: 'The batch ID the entity belongs to', displayOptions: { show: { endpoint: [ 'GetMatchesByEntityId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The entity ID the match belongs to', displayOptions: { show: { endpoint: [ 'GetMatchById' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'batchId', name: 'batchId', type: 'string', required: true, default: '', description: 'The batch ID the entity belongs to', displayOptions: { show: { endpoint: [ 'GetMatchById' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'matchId', name: 'matchId', type: 'string', required: true, default: '', description: 'The ID of the match', displayOptions: { show: { endpoint: [ 'GetMatchById' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The ID of the journey', displayOptions: { show: { endpoint: [ 'GetScopedEntitiesByJourneyAndProcessId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'processId', name: 'processId', type: 'string', required: true, default: '', description: 'The ID of the process that started the Screening request', displayOptions: { show: { endpoint: [ 'GetScopedEntitiesByJourneyAndProcessId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set id', displayOptions: { show: { endpoint: [ 'GetCurrentScopingRuleSetVersionByRuleSetId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'scopingRuleSetId', name: 'scopingRuleSetId', type: 'string', required: true, default: '', description: 'Scoping rule set id', displayOptions: { show: { endpoint: [ 'GetScopingRuleSetVersionByRuleSetIdAndVersionNumber' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Scoping rule set version number', displayOptions: { show: { endpoint: [ 'GetScopingRuleSetVersionByRuleSetIdAndVersionNumber' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Screening ID of the entity', displayOptions: { show: { endpoint: [ 'GetEntity' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'config', name: 'config', type: 'string', required: true, default: '', description: 'Boolean flag whether to also return adapter and provider configuration', displayOptions: { show: { endpoint: [ 'GetConfiguration' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'config', name: 'config', type: 'string', required: true, default: '', description: 'Boolean flag whether to also return adapter and provider configuration', displayOptions: { show: { endpoint: [ 'GetProvider' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'returnMaterialMatches', name: 'returnMaterialMatches', type: 'string', required: true, default: '', description: 'Return only matches with status Match', displayOptions: { show: { endpoint: [ 'GetEntitiesByBatchId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'returnMaterialMatches', name: 'returnMaterialMatches', type: 'string', required: true, default: '', description: 'Return only matches with status Match', displayOptions: { show: { endpoint: [ 'GetEntityById' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } },{ displayName: 'returnMaterialMatches', name: 'returnMaterialMatches', type: 'string', required: true, default: '', description: 'Return only matches with status Match', displayOptions: { show: { endpoint: [ 'GetMatchesByEntityId' ], domain: [ 'FenergoNebulaScreeningQueryv10' ] } } }
];

async function ExecuteFenergoNebulaScreeningQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let journeyId=''; let processId=''; let legalEntityId=''; let providerId=''; let batchId=''; let entityId=''; let matchId=''; let scopingRuleSetId=''; let versionNumber='';
switch(endpoint){ case 'GetBatchById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/batch/{id}'.replace('{id}', id);

break;
case 'GetBatchByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/batch/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetBatchByJourneyAndProcessId': journeyId = base.getNodeParameter('journeyId', 0) as string;
processId = base.getNodeParameter('processId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/batch/journey/{journeyId}/process/{processId}'.replace('{journeyId}', journeyId).replace('{processId}', processId);

break;
case 'GetBatchesByLegalEntityId': legalEntityId = base.getNodeParameter('legalEntityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/batch/legalentity/{legalEntityId}'.replace('{legalEntityId}', legalEntityId);

break;
case 'GetConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/configuration';
requestOptions.qs = { config: base.getNodeParameter('config', 0) as string };
break;
case 'GetConfigurationLite': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/configuration/lite';

break;
case 'GetProvider': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/configuration/provider/{providerId}'.replace('{providerId}', providerId);
requestOptions.qs = { config: base.getNodeParameter('config', 0) as string };
break;
case 'GetEntitiesByBatchId': batchId = base.getNodeParameter('batchId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/batch/{batchId}/entity'.replace('{batchId}', batchId);
requestOptions.qs = { returnMaterialMatches: base.getNodeParameter('returnMaterialMatches', 0) as string };
break;
case 'GetEntityById': entityId = base.getNodeParameter('entityId', 0) as string;
batchId = base.getNodeParameter('batchId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/batch/{batchId}/entity/{entityId}'.replace('{entityId}', entityId).replace('{batchId}', batchId);
requestOptions.qs = { returnMaterialMatches: base.getNodeParameter('returnMaterialMatches', 0) as string };
break;
case 'GetMatchesByEntityId': entityId = base.getNodeParameter('entityId', 0) as string;
batchId = base.getNodeParameter('batchId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/batch/{batchId}/entity/{entityId}/match'.replace('{entityId}', entityId).replace('{batchId}', batchId);
requestOptions.qs = { returnMaterialMatches: base.getNodeParameter('returnMaterialMatches', 0) as string };
break;
case 'GetMatchById': entityId = base.getNodeParameter('entityId', 0) as string;
batchId = base.getNodeParameter('batchId', 0) as string;
matchId = base.getNodeParameter('matchId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/batch/{batchId}/entity/{entityId}/match/{matchId}'.replace('{entityId}', entityId).replace('{batchId}', batchId).replace('{matchId}', matchId);

break;
case 'GetScopedEntitiesByJourneyAndProcessId': journeyId = base.getNodeParameter('journeyId', 0) as string;
processId = base.getNodeParameter('processId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/scoped-entity/journey/{journeyId}/process/{processId}'.replace('{journeyId}', journeyId).replace('{processId}', processId);

break;
case 'GetAllScopingRuleSetsLite': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/scoping-rule-set';

break;
case 'GetCurrentScopingRuleSetVersionByRuleSetId': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/scoping-rule-set/{scopingRuleSetId}'.replace('{scopingRuleSetId}', scopingRuleSetId);

break;
case 'GetScopingRuleSetVersionByRuleSetIdAndVersionNumber': scopingRuleSetId = base.getNodeParameter('scopingRuleSetId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/scoping-rule-set/{scopingRuleSetId}/version/{versionNumber}'.replace('{scopingRuleSetId}', scopingRuleSetId).replace('{versionNumber}', versionNumber);

break;
case 'GetAllEntitiesOngoingScreeningEnabled': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/ongoingscreening';

break;
case 'GetEntity': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/screeningquery/api/entity/{entityId}'.replace('{entityId}', entityId);

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
    FenergoNebulaScreeningQueryv10Properties,
    ExecuteFenergoNebulaScreeningQueryv10
}
