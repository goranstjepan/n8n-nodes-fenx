import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaDataMigrationQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Gets migration metadata by id', value: 'Get' },{ name: 'Gets an available artifacts list', value: 'GetArtifacts' },{ name: 'Gets the artifact content', value: 'GetArtifactContent' },{ name: 'Gets an error file', value: 'GetErrorFile' },{ name: 'Gets the migrated records file', value: 'GetMigratedRecords' },{ name: 'Generates a signed url for the migration error csv file.', value: 'GetErrorFileSignedUrl' },{ name: 'Gets the record reference ingestion execution information.', value: 'GetRecordReferenceIngestionExecution' },{ name: 'Gets the evaluate jurisdictions execution information.', value: 'GetJurisdictionEvaluationExecution' },{ name: 'Provides access to the error detail file.', value: 'GetRecordReferenceIngestionExecutionErrorDetailFile' },{ name: 'Gets the Access Layer propagation execution information.', value: 'GetAccessLayerPropagationExecution' },{ name: 'Get file with all migrations in it.', value: 'GetMigrationsFile' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaDataMigrationQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of an existing migration', displayOptions: { show: { endpoint: [ 'Get' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of an existing migration', displayOptions: { show: { endpoint: [ 'GetArtifacts' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of an existing migration', displayOptions: { show: { endpoint: [ 'GetArtifactContent' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of an existing migration', displayOptions: { show: { endpoint: [ 'GetErrorFile' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of an existing migration', displayOptions: { show: { endpoint: [ 'GetMigratedRecords' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of an existing migration', displayOptions: { show: { endpoint: [ 'GetErrorFileSignedUrl' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetRecordReferenceIngestionExecution' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetJurisdictionEvaluationExecution' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetRecordReferenceIngestionExecutionErrorDetailFile' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'GetAccessLayerPropagationExecution' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'type', name: 'type', type: 'string', required: true, default: '', description: 'Type of the artifact', displayOptions: { show: { endpoint: [ 'GetArtifactContent' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'name', name: 'name', type: 'string', required: true, default: '', description: 'Name of the artifact', displayOptions: { show: { endpoint: [ 'GetArtifactContent' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } },{ displayName: 'format', name: 'format', type: 'string', required: true, default: '', description: 'Format of the artifact', displayOptions: { show: { endpoint: [ 'GetArtifactContent' ], domain: [ 'FenergoNebulaDataMigrationQueryv10' ] } } }
];

async function ExecuteFenergoNebulaDataMigrationQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let id='';
switch(endpoint){ case 'Get': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/migration/{id}'.replace('{id}', id);

break;
case 'GetArtifacts': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/migration/{id}/get-artifacts'.replace('{id}', id);

break;
case 'GetArtifactContent': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/migration/{id}/get-artifact-content'.replace('{id}', id);
requestOptions.qs = { type: base.getNodeParameter('type', 0) as string,name: base.getNodeParameter('name', 0) as string,format: base.getNodeParameter('format', 0) as string };
break;
case 'GetErrorFile': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/migration/{id}/get-error-file'.replace('{id}', id);

break;
case 'GetMigratedRecords': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/migration/{id}/get-migrated-records-file'.replace('{id}', id);

break;
case 'GetErrorFileSignedUrl': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/migration/{id}/get-error-file-signed-url'.replace('{id}', id);

break;
case 'GetRecordReferenceIngestionExecution': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/record-reference-ingestion/{id}/execution'.replace('{id}', id);

break;
case 'GetJurisdictionEvaluationExecution': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/jurisdiction-evaluation/{id}/execution'.replace('{id}', id);

break;
case 'GetRecordReferenceIngestionExecutionErrorDetailFile': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/record-reference-ingestion/{id}/execution-error-detail-file'.replace('{id}', id);

break;
case 'GetAccessLayerPropagationExecution': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/access-layer-propagation/{id}/execution'.replace('{id}', id);

break;
case 'GetMigrationsFile': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.emea1b.fenergox.com/datamigrationquery/api/migrations/file';

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
    FenergoNebulaDataMigrationQueryv10Properties,
    ExecuteFenergoNebulaDataMigrationQueryv10
}
