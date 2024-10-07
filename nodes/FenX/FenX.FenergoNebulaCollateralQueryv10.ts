import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaCollateralQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get an Asset by Id', value: 'GetAssetById' },{ name: 'Get Assets with specified attributes', value: 'GetAssetsList' },{ name: 'Get Collateral Assets snapshot for the given Task', value: 'GetAssetsSnapShot' },{ name: 'Get an Asset Draft by Id', value: 'GetAssetDraftById' },{ name: 'Get an Asset Draft by Id and Asset Id', value: 'GetAssetDraftByAssetId' },{ name: 'Get all Asset Drafts by Ids', value: 'GetAssetDraftByIds' },{ name: 'Get all Asset Drafts by Journey Id', value: 'GetAssetDraftsByJourney' },{ name: 'Get all Collaterals for a Tenant Id', value: 'GetCollaterals' },{ name: 'Get a Collateral by Id', value: 'GetCollateralById' },{ name: 'Get Collaterals with specified attributes', value: 'GetCollateralsList' },{ name: 'Get Collaterals snapshot for the given Task', value: 'GetCollateralsSnapShot' },{ name: 'Validate Deal Collateral Allocation', value: 'ValidateDealCollateralAllocation' },{ name: 'Get Related Collaterals Data Source', value: 'GetRelatedCollateralDataSource' },{ name: 'Get an Collateral Draft by Id', value: 'GetCollateralDraftById' },{ name: 'Get an Collateral Draft by Id and Collateral Id', value: 'GetCollateralDraftByCollateralId' },{ name: 'Get all Collateral Drafts by Ids', value: 'GetCollateralDraftByIds' },{ name: 'Get all Collateral Drafts by Journey Id', value: 'GetCollateralDraftsByJourney' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaCollateralQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Asset Id', displayOptions: { show: { endpoint: [ 'GetAssetById' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'collateralId', name: 'collateralId', type: 'string', required: true, default: '', description: 'The id of a Collateral that the Assets belong to', displayOptions: { show: { endpoint: [ 'GetAssetsSnapShot' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The id of a Journey that the Assets belong to', displayOptions: { show: { endpoint: [ 'GetAssetsSnapShot' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'The id of a Task that the Assets belong to', displayOptions: { show: { endpoint: [ 'GetAssetsSnapShot' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'assetDraftId', name: 'assetDraftId', type: 'string', required: true, default: '', description: 'Asset Draft Id', displayOptions: { show: { endpoint: [ 'GetAssetDraftById' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'assetDraftId', name: 'assetDraftId', type: 'string', required: true, default: '', description: 'Asset Draft Id', displayOptions: { show: { endpoint: [ 'GetAssetDraftByAssetId' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'assetId', name: 'assetId', type: 'string', required: true, default: '', description: 'Asset Id', displayOptions: { show: { endpoint: [ 'GetAssetDraftByAssetId' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'GetAssetDraftsByJourney' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Collateral Id', displayOptions: { show: { endpoint: [ 'GetCollateralById' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The id of a Journey that the Collaterals belong to', displayOptions: { show: { endpoint: [ 'GetCollateralsSnapShot' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'The id of a Task that the Collaterals belong to', displayOptions: { show: { endpoint: [ 'GetCollateralsSnapShot' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'ValidateDealCollateralAllocation' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Id of the existing Entity', displayOptions: { show: { endpoint: [ 'GetRelatedCollateralDataSource' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The Id of the existing Journey', displayOptions: { show: { endpoint: [ 'GetRelatedCollateralDataSource' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'collateralDraftId', name: 'collateralDraftId', type: 'string', required: true, default: '', description: 'Collateral Draft Id', displayOptions: { show: { endpoint: [ 'GetCollateralDraftById' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'collateralDraftId', name: 'collateralDraftId', type: 'string', required: true, default: '', description: 'Collateral Draft Id', displayOptions: { show: { endpoint: [ 'GetCollateralDraftByCollateralId' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'collateralId', name: 'collateralId', type: 'string', required: true, default: '', description: 'Collateral Id', displayOptions: { show: { endpoint: [ 'GetCollateralDraftByCollateralId' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey Id', displayOptions: { show: { endpoint: [ 'GetCollateralDraftsByJourney' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "ids": [ "" ], "attributes": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetAssetsList' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetAssetDraftByIds' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "ids": [ "" ], "attributes": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetCollateralsList' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "dealIds": [ "" ], "jurisdictions": [ { "Jurisdiction": "Jurisdiction", "VersionId": "VersionId" } ], "entityType": "entityType", "categories": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'ValidateDealCollateralAllocation' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetCollateralDraftByIds' ], domain: [ 'FenergoNebulaCollateralQueryv10' ] } } }
];

async function ExecuteFenergoNebulaCollateralQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let collateralId=''; let journeyId=''; let taskId=''; let assetDraftId=''; let assetId=''; let entityId=''; let collateralDraftId='';
switch(endpoint){ case 'GetAssetById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/asset/{id}'.replace('{id}', id);

break;
case 'GetAssetsList': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/asset/getAssetsList';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAssetsSnapShot': collateralId = base.getNodeParameter('collateralId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/asset/collateral/{collateralId}/journey/{journeyId}/task/{taskId}/snapshot'.replace('{collateralId}', collateralId).replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetAssetDraftById': assetDraftId = base.getNodeParameter('assetDraftId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/asset/draft/{assetDraftId}'.replace('{assetDraftId}', assetDraftId);

break;
case 'GetAssetDraftByAssetId': assetDraftId = base.getNodeParameter('assetDraftId', 0) as string;
assetId = base.getNodeParameter('assetId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/asset/draft/{assetId}/{assetDraftId}'.replace('{assetDraftId}', assetDraftId).replace('{assetId}', assetId);

break;
case 'GetAssetDraftByIds': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/asset/draft/list';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAssetDraftsByJourney': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/asset/draft/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetCollaterals': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral';

break;
case 'GetCollateralById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral/{id}'.replace('{id}', id);

break;
case 'GetCollateralsList': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral/getCollateralsList';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetCollateralsSnapShot': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral/journey/{journeyId}/task/{taskId}/snapshot'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'ValidateDealCollateralAllocation': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral/journey/{journeyId}/validateAllocation'.replace('{journeyId}', journeyId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetRelatedCollateralDataSource': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral/related-collateral/entity/{entityId}/journey/{journeyId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId);

break;
case 'GetCollateralDraftById': collateralDraftId = base.getNodeParameter('collateralDraftId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral/draft/{collateralDraftId}'.replace('{collateralDraftId}', collateralDraftId);

break;
case 'GetCollateralDraftByCollateralId': collateralDraftId = base.getNodeParameter('collateralDraftId', 0) as string;
collateralId = base.getNodeParameter('collateralId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral/draft/{collateralId}/{collateralDraftId}'.replace('{collateralDraftId}', collateralDraftId).replace('{collateralId}', collateralId);

break;
case 'GetCollateralDraftByIds': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral/draft/list';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetCollateralDraftsByJourney': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.fenergox.com/collateralquery/api/collateral/draft/journey/{journeyId}'.replace('{journeyId}', journeyId);

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
    FenergoNebulaCollateralQueryv10Properties,
    ExecuteFenergoNebulaCollateralQueryv10
}
