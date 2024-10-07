import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaEventIngressv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'List all available business process types.', value: 'ListBusinessProcessTypes' },{ name: 'Get an ingress event with related entities.', value: 'GetEvent' },{ name: 'Get processed or received message of ingress event.', value: 'GetEventMessageUrl' },{ name: 'Send an ingress event.', value: 'SendEvent' },{ name: 'Request event types.', value: 'GetEventTypes' },{ name: 'List all available event types, event subtypes, and event subtypes" business process mappings.', value: 'ListEventTypes' },{ name: 'Add a new event type, event subtypes, and map event subtypes to business processes.', value: 'AddEventType' },{ name: 'Update an existing event type, event subtypes, and event subtypes" business process mappings.', value: 'UpdateEventType' },{ name: 'Delete an existing event type, event subtypes, and event subtypes" business process mappings.', value: 'DeleteEventType' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaEventIngressv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'eventId', name: 'eventId', type: 'string', required: true, default: '', description: 'Id of an event', displayOptions: { show: { endpoint: [ 'GetEvent' ], domain: [ 'FenergoNebulaEventIngressv10' ] } } },{ displayName: 'eventId', name: 'eventId', type: 'string', required: true, default: '', description: 'Id of an event', displayOptions: { show: { endpoint: [ 'GetEventMessageUrl' ], domain: [ 'FenergoNebulaEventIngressv10' ] } } },{ displayName: 'eventType', name: 'eventType', type: 'string', required: true, default: '', description: 'The key of the event type to be deleted.', displayOptions: { show: { endpoint: [ 'DeleteEventType' ], domain: [ 'FenergoNebulaEventIngressv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "eventType": "eventType", "eventSubtype": "eventSubtype", "entityId": "entityId", "source": "source", "payload": null, "correlationId": "correlationId" }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SendEvent' ], domain: [ 'FenergoNebulaEventIngressv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "key": "key", "displayName": "displayName", "eventSubtypes": [ { "key": "key", "displayName": "displayName", "businessProcessType": "businessProcessType" } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'AddEventType' ], domain: [ 'FenergoNebulaEventIngressv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "key": "key", "displayName": "displayName", "eventSubtypes": [ { "key": "key", "displayName": "displayName", "businessProcessType": "businessProcessType" } ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEventType' ], domain: [ 'FenergoNebulaEventIngressv10' ] } } },{ displayName: 'type', name: 'type', type: 'string', required: true, default: '', description: 'Type of an events message', displayOptions: { show: { endpoint: [ 'GetEventMessageUrl' ], domain: [ 'FenergoNebulaEventIngressv10' ] } } }
];

async function ExecuteFenergoNebulaEventIngressv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let eventId=''; let eventType='';
switch(endpoint){ case 'ListBusinessProcessTypes': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/eventingress/v1/business-process-types';

break;
case 'GetEvent': eventId = base.getNodeParameter('eventId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/eventingress/v1/events/{eventId}'.replace('{eventId}', eventId);

break;
case 'GetEventMessageUrl': eventId = base.getNodeParameter('eventId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/eventingress/v1/events/{eventId}/messageUrl'.replace('{eventId}', eventId);
requestOptions.qs = { type: base.getNodeParameter('type', 0) as string };
break;
case 'SendEvent': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/eventingress/v1/events';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetEventTypes': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/eventingress/v1/events/types';

break;
case 'ListEventTypes': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.apac1.fenergox.com/eventingress/v1/event-types';

break;
case 'AddEventType': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/eventingress/v1/event-types';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateEventType': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/eventingress/v1/event-types';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteEventType': eventType = base.getNodeParameter('eventType', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/eventingress/v1/event-types/{eventType}'.replace('{eventType}', eventType);

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
    FenergoNebulaEventIngressv10Properties,
    ExecuteFenergoNebulaEventIngressv10
}
