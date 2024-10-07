import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenX.node';

let FenergoNebulaReportsCommandv20Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create a new Query definition', value: 'CreateSqlQueryDefinitionV2' },{ name: 'Update a Query definition', value: 'UpdateSqlQueryDefinitionV2' },{ name: 'Delete a Query definition', value: 'DeleteSqlQueryDefinitionV2' },{ name: 'Create report', value: 'CreateReportV2' },{ name: 'Creates AI driven report query based on User Input', value: 'CreateQueryStatement' },{ name: 'Triggers generation of AI driven charts based on report columns', value: 'CreateChartAsynchronous' },{ name: 'Generates a transaction rule based on user input, using an AI model', value: 'CreateRule' },{ name: 'Preview report', value: 'Preview' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaReportsCommandv20',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Id', name: 'Id', type: 'string', required: true, default: '', description: 'The Id of the existing Query definition model to update', displayOptions: { show: { endpoint: [ 'UpdateSqlQueryDefinitionV2' ], domain: [ 'FenergoNebulaReportsCommandv20' ] } } },{ displayName: 'Id', name: 'Id', type: 'string', required: true, default: '', description: 'The Id of the existing Query definition model to delete', displayOptions: { show: { endpoint: [ 'DeleteSqlQueryDefinitionV2' ], domain: [ 'FenergoNebulaReportsCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sqlQuery": "sqlQuery", "name": "name", "description": "description", "id": "id" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateSqlQueryDefinitionV2' ], domain: [ 'FenergoNebulaReportsCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "sqlQuery": "sqlQuery", "name": "name", "description": "description" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateSqlQueryDefinitionV2' ], domain: [ 'FenergoNebulaReportsCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sqlQuery": "sqlQuery", "description": "description", "queryId": "queryId" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateReportV2' ], domain: [ 'FenergoNebulaReportsCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "input": "input", "queryId": "queryId", "currentQuery": "currentQuery", "timeZone": "timeZone" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateQueryStatement' ], domain: [ 'FenergoNebulaReportsCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "resourceId": "resourceId", "chartType": "chartType", "sampleData": "sampleData" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateChartAsynchronous' ], domain: [ 'FenergoNebulaReportsCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "tenant": "tenant", "content": "content" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateRule' ], domain: [ 'FenergoNebulaReportsCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "sqlQuery": "sqlQuery" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Preview' ], domain: [ 'FenergoNebulaReportsCommandv20' ] } } }
];

async function ExecuteFenergoNebulaReportsCommandv20(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let Id='';
switch(endpoint){ case 'CreateSqlQueryDefinitionV2': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/reportscommand/api/v2/Query';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateSqlQueryDefinitionV2': Id = base.getNodeParameter('Id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.fenergox.com/reportscommand/api/v2/Query/{Id}'.replace('{Id}', Id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteSqlQueryDefinitionV2': Id = base.getNodeParameter('Id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.fenergox.com/reportscommand/api/v2/Query/{Id}'.replace('{Id}', Id);

break;
case 'CreateReportV2': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/reportscommand/api/v2/Report';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateQueryStatement': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/reportscommand/api/v2/Report/assistant/query';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateChartAsynchronous': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/reportscommand/api/v2/Report/assistant/chart/async';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateRule': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/reportscommand/api/v2/Report/assistant/rules';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'Preview': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.fenergox.com/reportscommand/api/v2/Report/Preview';

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
    FenergoNebulaReportsCommandv20Properties,
    ExecuteFenergoNebulaReportsCommandv20
}
