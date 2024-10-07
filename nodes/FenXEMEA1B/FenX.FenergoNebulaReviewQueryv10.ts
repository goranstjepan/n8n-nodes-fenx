import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaReviewQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Get products in scope', value: 'GetProductsInScope' },{ name: 'Get entityRule', value: 'GetAllEntityRules' },{ name: 'Get entity rule by id', value: 'GetEntityRuleById' },{ name: 'Get entity rule by id and version', value: 'GetEntityRuleVersionById' },{ name: 'Get ProductRule', value: 'GetAllProductRules' },{ name: 'Get Product rule by id', value: 'GetProductRuleById' },{ name: 'Get Product rule by id and version', value: 'GetProductRuleVersionById' },{ name: 'Get review by id', value: 'GetReviewById' },{ name: 'Get pending reviews for entity', value: 'GetPendingReviewsForEntity' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaReviewQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'journeyInstanceId', name: 'journeyInstanceId', type: 'string', required: true, default: '', description: 'Review id', displayOptions: { show: { endpoint: [ 'GetProductsInScope' ], domain: [ 'FenergoNebulaReviewQueryv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity rule id', displayOptions: { show: { endpoint: [ 'GetEntityRuleById' ], domain: [ 'FenergoNebulaReviewQueryv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'entity rule id', displayOptions: { show: { endpoint: [ 'GetEntityRuleVersionById' ], domain: [ 'FenergoNebulaReviewQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'entity rule version number', displayOptions: { show: { endpoint: [ 'GetEntityRuleVersionById' ], domain: [ 'FenergoNebulaReviewQueryv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product rule id', displayOptions: { show: { endpoint: [ 'GetProductRuleById' ], domain: [ 'FenergoNebulaReviewQueryv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product rule id', displayOptions: { show: { endpoint: [ 'GetProductRuleVersionById' ], domain: [ 'FenergoNebulaReviewQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Product rule version number', displayOptions: { show: { endpoint: [ 'GetProductRuleVersionById' ], domain: [ 'FenergoNebulaReviewQueryv10' ] } } },{ displayName: 'reviewId', name: 'reviewId', type: 'string', required: true, default: '', description: 'Review id', displayOptions: { show: { endpoint: [ 'GetReviewById' ], domain: [ 'FenergoNebulaReviewQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetPendingReviewsForEntity' ], domain: [ 'FenergoNebulaReviewQueryv10' ] } } }
];

async function ExecuteFenergoNebulaReviewQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let journeyInstanceId=''; let entityRuleId=''; let versionNumber=''; let productRuleId=''; let reviewId=''; let entityId='';
switch(endpoint){ case 'GetProductsInScope': journeyInstanceId = base.getNodeParameter('journeyInstanceId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewquery/api/data-in-scope/{journeyInstanceId}/products'.replace('{journeyInstanceId}', journeyInstanceId);

break;
case 'GetAllEntityRules': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewquery/api/entity-rule';

break;
case 'GetEntityRuleById': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewquery/api/entity-rule/{entityRuleId}'.replace('{entityRuleId}', entityRuleId);

break;
case 'GetEntityRuleVersionById': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewquery/api/entity-rule/{entityRuleId}/version/{versionNumber}'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

break;
case 'GetAllProductRules': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewquery/api/product-rule';

break;
case 'GetProductRuleById': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewquery/api/product-rule/{productRuleId}'.replace('{productRuleId}', productRuleId);

break;
case 'GetProductRuleVersionById': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewquery/api/product-rule/{productRuleId}/version/{versionNumber}'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

break;
case 'GetReviewById': reviewId = base.getNodeParameter('reviewId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewquery/api/review/{reviewId}'.replace('{reviewId}', reviewId);

break;
case 'GetPendingReviewsForEntity': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewquery/api/review/{entityId}/pending-reviews'.replace('{entityId}', entityId);

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
    FenergoNebulaReviewQueryv10Properties,
    ExecuteFenergoNebulaReviewQueryv10
}
