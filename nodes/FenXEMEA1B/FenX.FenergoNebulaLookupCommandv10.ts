import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

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
    }, { displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'Lookup Id', displayOptions: { show: { endpoint: [ 'DeleteLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'CreateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'CreateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Number of version to update', displayOptions: { show: { endpoint: [ 'UpdateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'Lookup Id', displayOptions: { show: { endpoint: [ 'DeleteLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Number of version to update', displayOptions: { show: { endpoint: [ 'UpdateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'SubmitLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to submit', displayOptions: { show: { endpoint: [ 'SubmitLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'SignLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to sign', displayOptions: { show: { endpoint: [ 'SignLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'ArchiveLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to archive', displayOptions: { show: { endpoint: [ 'ArchiveLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'lookupId', name: 'lookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'ImportLookupCsvFile' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'ImportLookupCsvFile' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'CreateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'DeleteLookupLink' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'UpdateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Number of version to update', displayOptions: { show: { endpoint: [ 'UpdateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'DeleteLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'DeleteLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'SubmitLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to submit', displayOptions: { show: { endpoint: [ 'SubmitLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Link', displayOptions: { show: { endpoint: [ 'SignLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to sign', displayOptions: { show: { endpoint: [ 'SignLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing Linked Lookup', displayOptions: { show: { endpoint: [ 'ArchiveLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version to archive', displayOptions: { show: { endpoint: [ 'ArchiveLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'linkLookupId', name: 'linkLookupId', type: 'string', required: true, default: '', description: 'The Id of the existing model', displayOptions: { show: { endpoint: [ 'ImportLinkLookupCsvFile' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'ImportLinkLookupCsvFile' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "values": [ "" ], "items": [ { "id": "id", "value": "value" } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2025-01-21T08:34:28.1795041+00:00", "created": "2025-01-21T08:34:28.1795091+00:00", "status": "Draft", "isSystemLookup": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1795827+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1795975+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1796098+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1796227+00:00" }, "hasProcessedRequest": false } ], "skipValueIdDefaultGeneration": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "items": [ { "id": "id", "value": "value" } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2025-01-21T08:34:28.1799375+00:00", "created": "2025-01-21T08:34:28.1799402+00:00", "status": "Draft", "isSystemLookup": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1799756+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1799891+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1800016+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1800132+00:00" }, "hasProcessedRequest": false } ], "skipValueIdDefaultGeneration": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "isSystemLookup": false }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "values": [ "" ], "items": [ { "id": "id", "value": "value" } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2025-01-21T08:34:28.1808970+00:00", "created": "2025-01-21T08:34:28.1809005+00:00", "status": "Draft", "isSystemLookup": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1809375+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1809651+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1809957+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1810085+00:00" }, "hasProcessedRequest": false } ], "skipValueIdDefaultGeneration": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "ids": [ "" ] }', description: 'Request body', displayOptions: { show: { endpoint: [ 'BulkDeleteLookup' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "items": [ { "id": "id", "value": "value" } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2025-01-21T08:34:28.1815981+00:00", "created": "2025-01-21T08:34:28.1816010+00:00", "status": "Draft", "isSystemLookup": false, "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1816413+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1816566+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1816790+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1817011+00:00" }, "hasProcessedRequest": false } ], "skipValueIdDefaultGeneration": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "values": [ "" ], "items": [ { "id": "id", "value": "value" } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2025-01-21T08:34:28.1819932+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1820245+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1820375+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1820503+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1820629+00:00" }, "hasProcessedRequest": false } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "skipValueIdDefaultGeneration": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupId": "lookupId", "lookupName": "lookupName", "items": [ { "id": "id", "value": "value" } ], "versionNumber": 0, "notes": "notes", "effectiveFrom": "2025-01-21T08:34:28.1824616+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1824954+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1825092+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1825225+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1825442+00:00" }, "hasProcessedRequest": false } ], "columns": [ { "type": "type", "name": "name", "values": {} } ], "skipValueIdDefaultGeneration": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLookupVersionItems' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1829165+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignLookupVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "parentLookupId": "parentLookupId", "parentLookupVersion": 0, "childLookupId": "childLookupId", "childLookupVersion": 0, "properties": {}, "effectiveFrom": "2025-01-21T08:34:28.1832912+00:00", "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupLink' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupLinkId": "lookupLinkId", "name": "name", "parentLookupId": "parentLookupId", "parentLookupVersion": 0, "childLookupId": "childLookupId", "childLookupVersion": 0, "versionNumber": 0, "notes": "notes", "properties": {}, "effectiveFrom": "2025-01-21T08:34:28.1834486+00:00", "created": "2025-01-21T08:34:28.1834510+00:00", "status": "Draft", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1834862+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1834998+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1835118+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1835247+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "lookupLinkId": "lookupLinkId", "name": "name", "parentLookupId": "parentLookupId", "parentLookupVersion": 0, "childLookupId": "childLookupId", "childLookupVersion": 0, "properties": {}, "versionNumber": 0, "notes": "notes", "effectiveFrom": "2025-01-21T08:34:28.1838030+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1838336+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1838460+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1838581+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1838699+00:00" }, "hasProcessedRequest": false } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.1842104+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignLookupLinkVersion' ], domain: [ 'FenergoNebulaLookupCommandv10' ] } } }
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
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateLookupItems': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/items';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateLookup': lookupId = base.getNodeParameter('lookupId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}'.replace('{lookupId}', lookupId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLookup': lookupId = base.getNodeParameter('lookupId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}'.replace('{lookupId}', lookupId);

break;
case 'CreateLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}'.replace('{lookupId}', lookupId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'BulkDeleteLookup': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/bulk-delete';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateLookupVersionItems': lookupId = base.getNodeParameter('lookupId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}/items'.replace('{lookupId}', lookupId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

break;
case 'UpdateLookupVersionItems': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/items'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SubmitLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/submit-for-approval'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

break;
case 'SignLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/sign'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveLookupVersion': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/archive'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

break;
case 'ImportLookupCsvFile': lookupId = base.getNodeParameter('lookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookup/{lookupId}/version/{versionNumber}/file'.replace('{lookupId}', lookupId).replace('{versionNumber}', versionNumber);

break;
case 'CreateLookupLink': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookuplink';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookuplink/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLookupLink': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookuplink/{id}'.replace('{id}', id);

break;
case 'UpdateLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}'.replace('{id}', id).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}'.replace('{id}', id).replace('{versionNumber}', versionNumber);

break;
case 'SubmitLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}/submit'.replace('{id}', id).replace('{versionNumber}', versionNumber);

break;
case 'SignLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}/sign'.replace('{id}', id).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveLookupLinkVersion': id = base.getNodeParameter('id', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookuplink/{id}/version/{versionNumber}/archive'.replace('{id}', id).replace('{versionNumber}', versionNumber);

break;
case 'ImportLinkLookupCsvFile': linkLookupId = base.getNodeParameter('linkLookupId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/lookupcommand/api/lookuplink/{linkLookupId}/version/{versionNumber}/file'.replace('{linkLookupId}', linkLookupId).replace('{versionNumber}', versionNumber);

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
