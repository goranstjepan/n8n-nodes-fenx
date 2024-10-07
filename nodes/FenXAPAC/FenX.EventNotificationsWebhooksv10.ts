import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let EventNotificationsWebhooksv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'List all webhook configurations.', value: 'ListWebhooks' },{ name: 'Add a webhook configuration.', value: 'AddWebhook' },{ name: 'Delete webhook configuration.', value: 'DeleteWebhook' },{ name: 'Update a webhook configuration.', value: 'UpdateWebhook' },{ name: 'Get webhook configuration.', value: 'GetWebhook' },{ name: 'List all available event notification types.', value: 'ListEventNotificationTypes' },{ name: 'Test webhook availability.', value: 'TestWebhook' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'EventNotificationsWebhooksv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'webhookId', name: 'webhookId', type: 'string', required: true, default: '', description: 'The webhook identifier.', displayOptions: { show: { endpoint: [ 'DeleteWebhook' ], domain: [ 'EventNotificationsWebhooksv10' ] } } },{ displayName: 'webhookId', name: 'webhookId', type: 'string', required: true, default: '', description: 'The webhook identifier.', displayOptions: { show: { endpoint: [ 'UpdateWebhook' ], domain: [ 'EventNotificationsWebhooksv10' ] } } },{ displayName: 'webhookId', name: 'webhookId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetWebhook' ], domain: [ 'EventNotificationsWebhooksv10' ] } } },{ displayName: 'webhookId', name: 'webhookId', type: 'string', required: true, default: '', description: 'The webhook identifier.', displayOptions: { show: { endpoint: [ 'TestWebhook' ], domain: [ 'EventNotificationsWebhooksv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "name": "name", "url": "url", "secret": "secret", "enabled": false, "eventTypes": [ "" ], "emailAddresses": [ "" ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddWebhook' ], domain: [ 'EventNotificationsWebhooksv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "name": "name", "url": "url", "secret": "secret", "enabled": false, "eventTypes": [ "" ], "emailAddresses": [ "" ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateWebhook' ], domain: [ 'EventNotificationsWebhooksv10' ] } } }
];

async function ExecuteEventNotificationsWebhooksv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let webhookId='';
switch(endpoint){ case 'ListWebhooks': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/webhooks/v1/webhooks';

break;
case 'AddWebhook': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/webhooks/v1/webhooks';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteWebhook': webhookId = base.getNodeParameter('webhookId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/webhooks/v1/webhooks/{webhookId}'.replace('{webhookId}', webhookId);

break;
case 'UpdateWebhook': webhookId = base.getNodeParameter('webhookId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/webhooks/v1/webhooks/{webhookId}'.replace('{webhookId}', webhookId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetWebhook': webhookId = base.getNodeParameter('webhookId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/webhooks/v1/webhooks/{webhookId}'.replace('{webhookId}', webhookId);

break;
case 'ListEventNotificationTypes': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/webhooks/v1/webhooks/event-notification-types';

break;
case 'TestWebhook': webhookId = base.getNodeParameter('webhookId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/webhooks/v1/webhooks/{webhookId}/test'.replace('{webhookId}', webhookId);

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
    EventNotificationsWebhooksv10Properties,
    ExecuteEventNotificationsWebhooksv10
}
