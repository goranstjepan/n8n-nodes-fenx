import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaCollateralCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create a new Asset', value: 'CreateanewAsset' },{ name: 'Delete an Asset', value: 'DeleteanAsset' },{ name: 'Create a new Asset Draft', value: 'CreateanewAssetDraft' },{ name: 'Update an Asset Draft', value: 'UpdateanAssetDraft' },{ name: 'Delete an Asset Draft', value: 'DeleteanAssetDraft' },{ name: 'Verify an Asset Draft', value: 'VerifyanAssetDraft' },{ name: 'Create a new Collateral', value: 'CreateanewCollateral' },{ name: 'Delete a Collateral', value: 'DeleteaCollateral' },{ name: 'Save Collaterals snapshot in a given task', value: 'SaveCollateralssnapshotinagiventask' },{ name: 'Create a new Collateral Draft', value: 'CreateanewCollateralDraft' },{ name: 'Update a Collateral Draft', value: 'UpdateaCollateralDraft' },{ name: 'Delete a Collateral Draft', value: 'DeleteaCollateralDraft' },{ name: 'Verify a Collateral Draft', value: 'VerifyaCollateralDraft' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaCollateralCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Asset Id', displayOptions: { show: { endpoint: [ 'DeleteanAsset' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'assetId', name: 'assetId', type: 'string', required: true, default: '', description: 'Asset Id', displayOptions: { show: { endpoint: [ 'CreateanewAssetDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'CreateanewAssetDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'assetId', name: 'assetId', type: 'string', required: true, default: '', description: 'Asset Id', displayOptions: { show: { endpoint: [ 'UpdateanAssetDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Asset Draft Id', displayOptions: { show: { endpoint: [ 'UpdateanAssetDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'assetId', name: 'assetId', type: 'string', required: true, default: '', description: 'Asset Id', displayOptions: { show: { endpoint: [ 'DeleteanAssetDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Asset Draft Id', displayOptions: { show: { endpoint: [ 'DeleteanAssetDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Asset Draft Id', displayOptions: { show: { endpoint: [ 'VerifyanAssetDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'assetId', name: 'assetId', type: 'string', required: true, default: '', description: 'Asset Id', displayOptions: { show: { endpoint: [ 'VerifyanAssetDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Collateral Id', displayOptions: { show: { endpoint: [ 'DeleteaCollateral' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'SaveCollateralssnapshotinagiventask' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'Task Id', displayOptions: { show: { endpoint: [ 'SaveCollateralssnapshotinagiventask' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity Id', displayOptions: { show: { endpoint: [ 'SaveCollateralssnapshotinagiventask' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'collateralId', name: 'collateralId', type: 'string', required: true, default: '', description: 'Collateral Id', displayOptions: { show: { endpoint: [ 'CreateanewCollateralDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'CreateanewCollateralDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'collateralId', name: 'collateralId', type: 'string', required: true, default: '', description: 'Collateral Id', displayOptions: { show: { endpoint: [ 'UpdateaCollateralDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Collateral Draft Id', displayOptions: { show: { endpoint: [ 'UpdateaCollateralDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'collateralId', name: 'collateralId', type: 'string', required: true, default: '', description: 'Collateral Id', displayOptions: { show: { endpoint: [ 'DeleteaCollateralDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Collateral Draft Id', displayOptions: { show: { endpoint: [ 'DeleteaCollateralDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Collateral Draft Id', displayOptions: { show: { endpoint: [ 'VerifyaCollateralDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'collateralId', name: 'collateralId', type: 'string', required: true, default: '', description: 'Collateral Id', displayOptions: { show: { endpoint: [ 'VerifyaCollateralDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "type": "type", "alternateId": "alternateId", "properties": {}, "collateralId": "collateralId", "journeyId": "journeyId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateanewAsset' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "type": "type", "properties": {}, "dataSources": { "collateral": { "dataSource": "dataSource", "collaterals": [ { "properties": {} } ] } }, "status": "status", "assetVersion": 0, "version": 0, "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "categories": [ "" ], "entityType": "entityType", "entityProperties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateanAssetDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "type": "type", "alternateId": "alternateId", "properties": {}, "entityId": "entityId", "journeyId": "journeyId", "created": "2024-10-07T14:16:00.6271226+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateanewCollateral' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "type": "type", "properties": {}, "status": "status", "sourceCollateralVersion": 0, "version": 0, "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "categories": [ "" ], "entityType": "entityType", "entityProperties": {}, "entityId": "entityId", "journeyId": "journeyId", "taskId": "taskId", "isCompleting": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateaCollateralDraft' ], domain: [ 'FenergoNebulaCollateralCommandv10' ] } } }
];

async function ExecuteFenergoNebulaCollateralCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let assetId=''; let journeyId=''; let taskId=''; let entityId=''; let collateralId='';
switch(endpoint){ case 'CreateanewAsset': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/asset';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteanAsset': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/asset/{id}'.replace('{id}', id);

break;
case 'CreateanewAssetDraft': assetId = base.getNodeParameter('assetId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/asset/{assetId}/draft/journey/{journeyId}'.replace('{assetId}', assetId).replace('{journeyId}', journeyId);

break;
case 'UpdateanAssetDraft': assetId = base.getNodeParameter('assetId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/asset/{assetId}/draft/{id}'.replace('{assetId}', assetId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteanAssetDraft': assetId = base.getNodeParameter('assetId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/asset/{assetId}/draft/{id}'.replace('{assetId}', assetId).replace('{id}', id);

break;
case 'VerifyanAssetDraft': id = base.getNodeParameter('id', 0) as string;
assetId = base.getNodeParameter('assetId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/asset/{assetId}/draft/{id}/verify'.replace('{id}', id).replace('{assetId}', assetId);

break;
case 'CreateanewCollateral': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/collateral';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteaCollateral': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/collateral/{id}'.replace('{id}', id);

break;
case 'SaveCollateralssnapshotinagiventask': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/collateral/journey/{journeyId}/task/{taskId}/entity/{entityId}/snapshot'.replace('{journeyId}', journeyId).replace('{taskId}', taskId).replace('{entityId}', entityId);

break;
case 'CreateanewCollateralDraft': collateralId = base.getNodeParameter('collateralId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/collateral/{collateralId}/draft/journey/{journeyId}'.replace('{collateralId}', collateralId).replace('{journeyId}', journeyId);

break;
case 'UpdateaCollateralDraft': collateralId = base.getNodeParameter('collateralId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/collateral/{collateralId}/draft/{id}'.replace('{collateralId}', collateralId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteaCollateralDraft': collateralId = base.getNodeParameter('collateralId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/collateral/{collateralId}/draft/{id}'.replace('{collateralId}', collateralId).replace('{id}', id);

break;
case 'VerifyaCollateralDraft': id = base.getNodeParameter('id', 0) as string;
collateralId = base.getNodeParameter('collateralId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/collateralcommand/api/collateral/{collateralId}/draft/{id}/verify'.replace('{id}', id).replace('{collateralId}', collateralId);

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
    FenergoNebulaCollateralCommandv10Properties,
    ExecuteFenergoNebulaCollateralCommandv10
}
