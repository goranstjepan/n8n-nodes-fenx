import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaProductQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get a list of products with specific attributes', value: 'GetProductsList' },{ name: 'Get a product by id', value: 'GetProductById' },{ name: 'Get Product Data Sources', value: 'GetProductDataSources' },{ name: 'Get Product Data Sources including the products associated with excluded types', value: 'GetProductDataSourceIncludingExcludedSubtypes' },{ name: 'Get Product Data Sources By Entity Id', value: 'GetProductDataSourcesByEntityId' },{ name: 'Get a temporal products snapshot', value: 'GetProductsSnapShot' },{ name: 'Get product draft by id', value: 'GetProductDraftById' },{ name: 'Get product draft by id and productId', value: 'GetProductDraftByProductId' },{ name: 'Get product drafts by ids', value: 'GetProductDraftByIds' },{ name: 'Get product drafts by journey', value: 'GetProductDraftsByJourney' },{ name: 'Get all product drafts by journey', value: 'GetAllProductDraftsByJourney' },{ name: 'Get active product drafts by product Id', value: 'GetProductDraftsByProductId' },{ name: 'Get all product drafts by product Id', value: 'GetAllProductDraftsByProductId' },{ name: 'Get proposed changes between a product draft and the verified product the draft was created from', value: 'GetProductDraftProposedChanges' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaProductQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Product', displayOptions: { show: { endpoint: [ 'GetProductById' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Id of the existing Entity', displayOptions: { show: { endpoint: [ 'GetProductDataSources' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The Id of the existing Journey', displayOptions: { show: { endpoint: [ 'GetProductDataSources' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Id of the existing Entity', displayOptions: { show: { endpoint: [ 'GetProductDataSourceIncludingExcludedSubtypes' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The Id of the existing Journey', displayOptions: { show: { endpoint: [ 'GetProductDataSourceIncludingExcludedSubtypes' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The Id of the existing Entity', displayOptions: { show: { endpoint: [ 'GetProductDataSourcesByEntityId' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The id of a journey that the products belong to', displayOptions: { show: { endpoint: [ 'GetProductsSnapShot' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'taskId', name: 'taskId', type: 'string', required: true, default: '', description: 'The id of a task that the products belong to', displayOptions: { show: { endpoint: [ 'GetProductsSnapShot' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'productDraftId', name: 'productDraftId', type: 'string', required: true, default: '', description: 'Product draft id', displayOptions: { show: { endpoint: [ 'GetProductDraftById' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'productDraftId', name: 'productDraftId', type: 'string', required: true, default: '', description: 'Product draft id', displayOptions: { show: { endpoint: [ 'GetProductDraftByProductId' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'Product id', displayOptions: { show: { endpoint: [ 'GetProductDraftByProductId' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id', displayOptions: { show: { endpoint: [ 'GetProductDraftsByJourney' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id', displayOptions: { show: { endpoint: [ 'GetAllProductDraftsByJourney' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Product id', displayOptions: { show: { endpoint: [ 'GetProductDraftsByProductId' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Product id', displayOptions: { show: { endpoint: [ 'GetAllProductDraftsByProductId' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Product Draft Id', displayOptions: { show: { endpoint: [ 'GetProductDraftProposedChanges' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "ids": [ "" ], "attributes": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetProductsList' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "ids": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetProductDraftByIds' ], domain: [ 'FenergoNebulaProductQueryv10' ] } } }
];

async function ExecuteFenergoNebulaProductQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id=''; let entityId=''; let journeyId=''; let taskId=''; let productDraftId=''; let productId='';
switch(endpoint){ case 'GetProductsList': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/getProductsList';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetProductById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/{id}'.replace('{id}', id);

break;
case 'GetProductDataSources': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/{entityId}/{journeyId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId);

break;
case 'GetProductDataSourceIncludingExcludedSubtypes': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/{entityId}/{journeyId}/dataSourcesWithExcludedSubtypes'.replace('{entityId}', entityId).replace('{journeyId}', journeyId);

break;
case 'GetProductDataSourcesByEntityId': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/{entityId}/dataSources'.replace('{entityId}', entityId);

break;
case 'GetProductsSnapShot': journeyId = base.getNodeParameter('journeyId', 0) as string;
taskId = base.getNodeParameter('taskId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/journey/{journeyId}/task/{taskId}'.replace('{journeyId}', journeyId).replace('{taskId}', taskId);

break;
case 'GetProductDraftById': productDraftId = base.getNodeParameter('productDraftId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/draft/{productDraftId}'.replace('{productDraftId}', productDraftId);

break;
case 'GetProductDraftByProductId': productDraftId = base.getNodeParameter('productDraftId', 0) as string;
productId = base.getNodeParameter('productId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/draft/{productId}/{productDraftId}'.replace('{productDraftId}', productDraftId).replace('{productId}', productId);

break;
case 'GetProductDraftByIds': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/draft/list';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetProductDraftsByJourney': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/draft/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetAllProductDraftsByJourney': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/draft/journey/{journeyId}/all'.replace('{journeyId}', journeyId);

break;
case 'GetProductDraftsByProductId': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/draft/product/{id}'.replace('{id}', id);

break;
case 'GetAllProductDraftsByProductId': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/draft/product/{id}/all'.replace('{id}', id);

break;
case 'GetProductDraftProposedChanges': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/productquery/api/product/draft/proposedChanges/{id}'.replace('{id}', id);

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
    FenergoNebulaProductQueryv10Properties,
    ExecuteFenergoNebulaProductQueryv10
}
