import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaLookupCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create a new Lookup using values as the source of truth', value: 'CreateLookup' },{ name: 'Create a new Lookup using items as the source of truth', value: 'CreateLookupItems' },{ name: 'Update Lookups Settings.', value: 'UpdateLookup' },{ name: 'Delete Lookup and all it"s versions', value: 'DeleteLookup' },{ name: 'Create a new Version for an existing Lookup using Values as the source of truth', value: 'CreateLookupVersion' },{ name: 'Bulk Delete Lookups', value: 'BulkDeleteLookup' },{ name: 'Create a new Version for an existing Lookup using Items as the source of truth', value: 'CreateLookupVersionItems' },{ name: 'Updates an existing Version of a Lookup using Values as the source of truth', value: 'UpdateLookupVersion' },{ name: 'Delete an existing Version of a Lookup', value: 'DeleteLookupVersion' },{ name: 'Updates an existing Version of a Lookup using the items as the source of truth', value: 'UpdateLookupVersionItems' },{ name: 'Submit an existing Version of a Lookup for Approval', value: 'SubmitLookupVersion' },{ name: 'Sign an existing Version of a Lookup', value: 'SignLookupVersion' },{ name: 'Archive an existing Version of a Lookup', value: 'ArchiveLookupVersion' },{ name: 'Import a CSV to update an existing Draft Version of a Lookup', value: 'ImportLookupCsvFile' },{ name: 'Creates a parent child relationship between two lookups', value: 'CreateLookupLink' },{ name: 'Create a new version for an existing Linked lookup', value: 'CreateLookupLinkVersion' },{ name: 'Delete Lookup Link and all it"s versions', value: 'DeleteLookupLink' },{ name: 'Update an existing Version of a Linked lookup', value: 'UpdateLookupLinkVersion' },{ name: 'Delete an existing Version of a Linked Lookup', value: 'DeleteLookupLinkVersion' },{ name: 'Submit an existing Version of a Linked Lookup for Approval', value: 'SubmitLookupLinkVersion' },{ name: 'Sign an existing Version of a Linked Link', value: 'SignLookupLinkVersion' },{ name: 'Archive an existing Version of a Linked Lookup', value: 'ArchiveLookupLinkVersion' },{ name: 'Import a CSV to update an existing Draft Version of a LinkLookup', value: 'ImportLinkLookupCsvFile' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaLookupCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'Lookup Id', displayOptions: { show: { endpoint: [ 'DeleteLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'CreateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'CreateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Number of version to update', displayOptions: { show: { endpoint: [ 'UpdateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'Lookup Id', displayOptions: { show: { endpoint: [ 'DeleteLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Number of version to update', displayOptions: { show: { endpoint: [ 'UpdateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'SubmitLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to submit', displayOptions: { show: { endpoint: [ 'SubmitLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'SignLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to sign', displayOptions: { show: { endpoint: [ 'SignLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'ArchiveLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to archive', displayOptions: { show: { endpoint: [ 'ArchiveLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'ImportLookupCsvFile' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'ImportLookupCsvFile' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'CreateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'DeleteLookupLink' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'UpdateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Number of version to update', displayOptions: { show: { endpoint: [ 'UpdateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'DeleteLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'DeleteLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'SubmitLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to submit', displayOptions: { show: { endpoint: [ 'SubmitLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Link', displayOptions: { show: { endpoint: [ 'SignLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to sign', displayOptions: { show: { endpoint: [ 'SignLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'ArchiveLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to archive', displayOptions: { show: { endpoint: [ 'ArchiveLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'linkLookupId', name: 'linkLookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'ImportLinkLookupCsvFile' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'ImportLinkLookupCsvFile' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "values": [ "" ], "items": [ { "id": "id", "value": "value" } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2024-10-07T14:16:03.1977002+00:00", "created": "2024-10-07T14:16:03.1977052+00:00", "status": "Draft", "isSystemLookup": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1977539+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1977701+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1977846+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1977998+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "items": [ { "id": "id", "value": "value" } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2024-10-07T14:16:03.1979154+00:00", "created": "2024-10-07T14:16:03.1979181+00:00", "status": "Draft", "isSystemLookup": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1979565+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1979709+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1979857+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1980001+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "isSystemLookup": false }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "values": [ "" ], "items": [ { "id": "id", "value": "value" } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2024-10-07T14:16:03.1981225+00:00", "created": "2024-10-07T14:16:03.1981249+00:00", "status": "Draft", "isSystemLookup": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1981636+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1981792+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1981931+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1982074+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "ids": [ "" ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'BulkDeleteLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "items": [ { "id": "id", "value": "value" } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2024-10-07T14:16:03.1983110+00:00", "created": "2024-10-07T14:16:03.1983134+00:00", "status": "Draft", "isSystemLookup": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1983609+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1983755+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1983902+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1984046+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "values": [ "" ], "items": [ { "id": "id", "value": "value" } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2024-10-07T14:16:03.1984911+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1985367+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1985520+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1985667+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1985811+00:00" }, "hasProcessedRequest": false } ], "columns": [ { "type": "type", "name": "name", "values": {} } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "items": [ { "id": "id", "value": "value" } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2024-10-07T14:16:03.1986821+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1987148+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1987301+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1987445+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1987588+00:00" }, "hasProcessedRequest": false } ], "columns": [ { "type": "type", "name": "name", "values": {} } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1988363+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "parentLookupId": "parentLookupId", "parentLookupVersion": 0, "childLookupId": "childLookupId", "childLookupVersion": 0, "properties": {}, "effectiveFrom": "2024-10-07T14:16:03.1988961+00:00", "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupLink' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupLinkId": "lookupLinkId", "name": "name", "parentLookupId": "parentLookupId", "parentLookupVersion": 0, "childLookupId": "childLookupId", "childLookupVersion": 0, "versionNumber": 0, "notes": "notes", "properties": {}, "effectiveFrom": "2024-10-07T14:16:03.1989664+00:00", "created": "2024-10-07T14:16:03.1989689+00:00", "status": "Draft", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1990050+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1990191+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1990333+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1990473+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupLinkId": "lookupLinkId", "name": "name", "parentLookupId": "parentLookupId", "parentLookupVersion": 0, "childLookupId": "childLookupId", "childLookupVersion": 0, "properties": {}, "versionNumber": 0, "notes": "notes", "effectiveFrom": "2024-10-07T14:16:03.1991251+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1991579+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1991725+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1991860+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1992001+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.1992774+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } }
];

async function ExecuteFenergoNebulaLookupCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let lookupId=''; let versionNumber=''; let id=''; let linkLookupId='';
switch(endpoint){ case 'CreateLookup': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateLookupItems': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/items';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateLookup': lookupId = base.getNodeParameter('lookupId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}'.replace('{lookupId}', lookupId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLookup': lookupId = base.getNodeParameter('lookupId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}'.replace('{lookupId}', lookupId);

break;
case 'CreateLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}'.replace('{lookupId}', lookupId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'BulkDeleteLookup': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/bulk-delete';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateLookupVersionItems': lookupId = base.getNodeParameter('lookupId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}/items'.replace('{lookupId}', lookupId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

break;
case 'UpdateLookupVersionItems': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/items'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SubmitLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/submit-for-approval'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

break;
case 'SignLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/sign'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/archive'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

break;
case 'ImportLookupCsvFile': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/file'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

break;
case 'CreateLookupLink': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookuplink';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookuplink/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLookupLink': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookuplink/{id}'.replace('{id}', id);

break;
case 'UpdateLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}'.replace('{id}', id).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}'.replace('{id}', id).replace('{versionNumber}', versionNumber);

break;
case 'SubmitLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}/submit'.replace('{id}', id).replace('{versionNumber}', versionNumber);

break;
case 'SignLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}/sign'.replace('{id}', id).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}/archive'.replace('{id}', id).replace('{versionNumber}', versionNumber);

break;
case 'ImportLinkLookupCsvFile': linkLookupId = base.getNodeParameter('linkLookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/lookupcommand/api/lookuplink/{linkLookupId}/version/{versionNumber}/file'.replace('{linkLookupId}', linkLookupId).replace('{versionNumber}', versionNumber);

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
    FenergoNebulaLookupCommandv10Properties,
    ExecuteFenergoNebulaLookupCommandv10
}
