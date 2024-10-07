import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaProductCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Set For Deletion status product draft', value: 'SetForDeletionProductDraft' },{ name: 'Creates a product', value: 'CreateProduct' },{ name: 'Deletes a product', value: 'DeleteProduct' },{ name: 'Updates a Product Status to Approved (Verified)', value: 'VerifyProduct' },{ name: 'Creates a product draft', value: 'CreateProductDraft' },{ name: 'Update product draft', value: 'UpdateProductDraft' },{ name: 'Deletes a product draft and its information from the database.', value: 'DeleteProductDraft' },{ name: 'Verify product draft', value: 'VerifyProductDraft' },{ name: 'Manage conflicts for Product Draft Record.', value: 'ProductDraftConflicts' },{ name: 'Manage conflicts for bulk Product Draft Records.', value: 'ProductDraftsBulkConflicts' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaProductCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'Product id', displayOptions: { show: { endpoint: [ 'SetForDeletionProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Product draft id', displayOptions: { show: { endpoint: [ 'SetForDeletionProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the product', displayOptions: { show: { endpoint: [ 'DeleteProduct' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the product', displayOptions: { show: { endpoint: [ 'VerifyProduct' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'The id of the product record that is the source for this draft', displayOptions: { show: { endpoint: [ 'CreateProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The id of the product record that is the source for this draft', displayOptions: { show: { endpoint: [ 'CreateProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'Product id', displayOptions: { show: { endpoint: [ 'UpdateProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Product draft id', displayOptions: { show: { endpoint: [ 'UpdateProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'Product id', displayOptions: { show: { endpoint: [ 'DeleteProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Product draft id', displayOptions: { show: { endpoint: [ 'DeleteProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'product draft id', displayOptions: { show: { endpoint: [ 'VerifyProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'the id of the product record', displayOptions: { show: { endpoint: [ 'VerifyProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'Product id', displayOptions: { show: { endpoint: [ 'ProductDraftConflicts' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Product draft id', displayOptions: { show: { endpoint: [ 'ProductDraftConflicts' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "type": "type", "family": "family", "alternateId": "alternateId", "properties": {}, "entityId": "entityId", "journeyId": "journeyId", "categories": [ "" ], "entityProperties": {}, "enforceValidation": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateProduct' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "type": "type", "family": "family", "properties": {}, "status": "status", "sourceProductVersion": 0, "version": 0, "jurisdictions": [ { "jurisdiction": "jurisdiction", "versionId": "versionId" } ], "categories": [ "" ], "entityProperties": {}, "isUpdateEnforced": false, "isRelatedPartiesEnabled": false, "isDocumentsEnabled": false, "taskId": "taskId", "sourceEntityId": "sourceEntityId", "updateEntityDataJurisdictions": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateProductDraft' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "productVersion": 0, "pushChanges": false, "dataConflictResolutions": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'ProductDraftConflicts' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": [ { "productVersion": 0, "pushChanges": false, "dataConflictResolutions": {}, "productId": "productId", "productDraftId": "productDraftId" } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'ProductDraftsBulkConflicts' ], domain: [ 'FenergoNebulaProductCommandv10' ] } } }
];

async function ExecuteFenergoNebulaProductCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let productId=''; let id=''; let journeyId='';
switch(endpoint){ case 'SetForDeletionProductDraft': productId = base.getNodeParameter('productId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product/{productId}/datadeletion/{id}'.replace('{productId}', productId).replace('{id}', id);

break;
case 'CreateProduct': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteProduct': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product/{id}'.replace('{id}', id);

break;
case 'VerifyProduct': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product/{id}'.replace('{id}', id);

break;
case 'CreateProductDraft': productId = base.getNodeParameter('productId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product/{productId}/draft/journey/{journeyId}'.replace('{productId}', productId).replace('{journeyId}', journeyId);

break;
case 'UpdateProductDraft': productId = base.getNodeParameter('productId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product/{productId}/draft/{id}'.replace('{productId}', productId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteProductDraft': productId = base.getNodeParameter('productId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product/{productId}/draft/{id}'.replace('{productId}', productId).replace('{id}', id);

break;
case 'VerifyProductDraft': id = base.getNodeParameter('id', 0) as string;
productId = base.getNodeParameter('productId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product/{productId}/draft/{id}/verify'.replace('{id}', id).replace('{productId}', productId);

break;
case 'ProductDraftConflicts': productId = base.getNodeParameter('productId', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product/{productId}/draft/{id}/conflicts'.replace('{productId}', productId).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ProductDraftsBulkConflicts': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/productcommand/api/product/draft/bulkconflicts';

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
    FenergoNebulaProductCommandv10Properties,
    ExecuteFenergoNebulaProductCommandv10
}
