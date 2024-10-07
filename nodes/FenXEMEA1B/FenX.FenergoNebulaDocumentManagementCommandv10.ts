import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaDocumentManagementCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create acceptable document set model', value: 'CreateAcceptableDocumentSet' },{ name: 'Create acceptable document set version by version number', value: 'CreateAcceptableDocumentSetVersionByVersionNumber' },{ name: 'Update acceptable document set version', value: 'UpdateAcceptableDocumentSetVersion' },{ name: 'Delete acceptable document set version', value: 'DeleteAcceptableDocumentSetVersion' },{ name: 'Create acceptable document set version with given acceptable documents', value: 'CreateAcceptableDocumentSetVersion' },{ name: 'Delete acceptable document set and all its versions', value: 'DeleteAcceptableDocumentSet' },{ name: 'Submit acceptable document set version for approval', value: 'SubmitForApprovalAcceptableDocumentSetVersion' },{ name: 'Sign acceptable document set version', value: 'SignAcceptableDocumentSetVersion' },{ name: 'Archive acceptable document set version', value: 'ArchiveAcceptableDocumentSetVersion' },{ name: 'Create acceptable document model', value: 'CreateAcceptableDocument' },{ name: 'Update an existing acceptable document model', value: 'UpdateAcceptableDocument' },{ name: 'Delete an existing acceptable document model', value: 'DeleteAcceptableDocument' },{ name: 'Create document assignment', value: 'CreateDocumentAssignment' },{ name: 'Update document assignment', value: 'UpdateDocumentAssignment' },{ name: 'Upload a document', value: 'UploadDocumentModel' },{ name: 'Updates a document', value: 'UpdateDocument' },{ name: 'Delete a document model', value: 'DeleteDocumentModel' },{ name: 'Update the requirements linked to a document', value: 'UpdateRequirementIds' },{ name: 'Update a document', value: 'UpdateDocumentFile' },{ name: 'Update the requirement datakey linked to a document', value: 'UpdateDataKey' },{ name: 'Creates a new DocumentRequirement.', value: 'CreateDocumentRequirement' },{ name: 'Updates an existing DocumentRequirement', value: 'UpdateDocumentRequirement' },{ name: 'Updates the existing properties on a DocumentRequirement', value: 'UpdateDocumentRequirementProperties' },{ name: 'Create a document requirement metadata set model', value: 'CreateDocumentRequirementMetadataSet' },{ name: 'Create document requirement metadata set version by version number', value: 'CreateDocumentRequirementMetadataSetVersionByVersionNumber' },{ name: 'Update document requirement metadata set version', value: 'UpdateDocumentRequirementMetadataSetVersion' },{ name: 'Delete document requirement metadata set version', value: 'DeleteDocumentRequirementMetadataSetVersion' },{ name: 'Create document requirement metadata set version with given document requirement metadata', value: 'CreateDocumentRequirementMetadataSetVersion' },{ name: 'Delete document requirement metadata set and all its versions', value: 'DeleteDocumentRequirementMetadataSet' },{ name: 'Submit document requirement metadata set version for approval', value: 'SubmitForApprovalDocumentRequirementMetadataSetVersion' },{ name: 'Sign document requirement metadata set version', value: 'SignDocumentRequirementMetadataSetVersion' },{ name: 'Archive document requirement metadata set version', value: 'ArchiveDocumentRequirementMetadataSetVersion' },{ name: 'Create document requirement metadata model', value: 'CreateDocumentRequirementMetadata' },{ name: 'Update an existing document requirement metadata model', value: 'UpdateDocumentRequirementMetadata' },{ name: 'Delete an existing document requirement metadata model', value: 'DeleteDocumentRequirementMetadata' },{ name: 'Sends a request with documents to external provider for eSignature.', value: 'SendDocumentsForSignature' },{ name: 'Save Provider status', value: 'SaveProviderStatus' },{ name: 'Save Configuration', value: 'SaveProviderConfiguration' },{ name: 'Refresh IDV Provider List', value: 'RefreshIdVProviders' },{ name: 'Creates a new eSignatureDocumentRequirement.', value: 'CreateESignatureDocumentRequirement' },{ name: 'Updates an existing eSignatureDocumentRequirement', value: 'UpdateESignatureDocumentRequirement' },{ name: 'Save temporary document metadata and generate the URL to upload the file for multiple Document Requirements', value: 'CreateTemporaryDocumentMultipleRequirements' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaDocumentManagementCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocumentSetVersionByVersionNumber' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to be cloned', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocumentSetVersionByVersionNumber' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocumentSet' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'SubmitForApprovalAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitForApprovalAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'SignAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'ArchiveAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the acceptable document will be added', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the acceptable document to be updated lives', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the acceptable document to be deleted lives', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the existing model to delete', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document assignment id', displayOptions: { show: { endpoint: [ 'UpdateDocumentAssignment' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the document existing', displayOptions: { show: { endpoint: [ 'DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateRequirementIds' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateDataKey' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementProperties' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadataSetVersionByVersionNumber' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to be cloned', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadataSetVersionByVersionNumber' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadataSet' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'SubmitForApprovalDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitForApprovalDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'SignDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'ArchiveDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the document requirement metadata will be added', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the document requirement metadata to be updated lives', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the document requirement metadata to be deleted lives', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the existing model to delete', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'SaveProviderStatus' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'SaveProviderConfiguration' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'RefreshIdVProviders' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateESignatureDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "setId": "setId", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9076425+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9076768+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9076977+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9077225+00:00" }, "hasProcessedRequest": false } ], "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "setId": "setId", "acceptableDocuments": [ { "type": "type", "description": "description", "dataKey": "dataKey", "extractData": false, "extractionCategories": [ "" ] } ], "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9142174+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "type": "type", "description": "description", "dataKey": "dataKey", "extractData": false, "extractionCategories": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "type": "type", "description": "description", "dataKey": "dataKey", "extractData": false, "extractionCategories": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "journeyId": "journeyId", "taskId": "taskId", "assignments": [ { "targetEntityId": "targetEntityId", "documentId": "documentId" } ], "snapshot": { "associationsSnapshots": [ { "id": "id", "sourceId": "sourceId", "targetId": "targetId", "type": "type" } ], "documentSnapshots": [ { "id": "id", "name": "name", "documentType": "documentType", "uploadedBy": "uploadedBy", "uploadedOn": "2024-10-07T14:16:01.9144413+00:00" } ], "entitiesSnapshots": [ { "id": "id", "fullName": "fullName", "type": "type", "role": "role", "created": "2024-10-07T14:16:01.9144634+00:00" } ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentAssignment' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "journeyId": "journeyId", "taskId": "taskId", "assignments": [ { "targetEntityId": "targetEntityId", "documentId": "documentId" } ], "snapshot": { "associationsSnapshots": [ { "id": "id", "sourceId": "sourceId", "targetId": "targetId", "type": "type" } ], "documentSnapshots": [ { "id": "id", "name": "name", "documentType": "documentType", "uploadedBy": "uploadedBy", "uploadedOn": "2024-10-07T14:16:01.9145848+00:00" } ], "entitiesSnapshots": [ { "id": "id", "fullName": "fullName", "type": "type", "role": "role", "created": "2024-10-07T14:16:01.9146052+00:00" } ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentAssignment' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirementIds": [ "" ], "documentDataKey": "documentDataKey", "properties": {}, "skipStatusReset": false, "documentURL": "documentURL" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '[ "" ]', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateRequirementIds' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementId": "requirementId", "requirementName": "requirementName", "documentDataKey": "documentDataKey", "isMandatory": false, "journeyId": "journeyId", "entityId": "entityId", "status": "status", "comment": "comment", "deferUntil": "2024-10-07T14:16:01.9147990+00:00", "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "status": "status", "comment": "comment", "deferUntil": "2024-10-07T14:16:01.9148663+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementProperties' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "setId": "setId", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9149886+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9150084+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9150259+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9150447+00:00" }, "hasProcessedRequest": false } ], "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "setId": "setId", "documentRequirementMetadata": [ { "name": "name", "databaseFieldName": "databaseFieldName", "type": "type", "lookup": "lookup", "defaultValue": "defaultValue", "value": "value", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-10-07T14:16:01.9153135+00:00", "maxDate": "2024-10-07T14:16:01.9153172+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 } } } ], "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:01.9154457+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "databaseFieldName": "databaseFieldName", "type": "type", "lookup": "lookup", "defaultValue": "defaultValue", "value": "value", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-10-07T14:16:01.9156490+00:00", "maxDate": "2024-10-07T14:16:01.9156520+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "databaseFieldName": "databaseFieldName", "type": "type", "lookup": "lookup", "defaultValue": "defaultValue", "value": "value", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-10-07T14:16:01.9158964+00:00", "maxDate": "2024-10-07T14:16:01.9158995+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 } }, "id": "id" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "taskId": "taskId", "entityId": "entityId", "journeyId": "journeyId", "entityName": "entityName", "providerName": "providerName", "documentRequirementsIds": [ "" ], "signers": [ { "signerType": "signerType", "fullName": "fullName", "email": "email", "relationship": "relationship", "hasSigned": false, "order": 0, "accessCode": "accessCode", "recipientIdentityVerification": { "inputOptions": [ { "name": "name", "phoneNumberList": [ { "countryCode": "countryCode", "countryCodeLock": "countryCodeLock", "countryCodeMetadata": { "options": [ "" ], "rights": "rights" }, "extension": "extension", "extensionMetadata": { "options": [ "" ], "rights": "rights" }, "number": "number", "numberMetadata": { "options": [ "" ], "rights": "rights" } } ], "valueType": "valueType" } ], "workflowId": "workflowId", "workflowIdMetadata": { "options": [ "" ], "rights": "rights" }, "workflowLabel": "workflowLabel" } } ], "isDraft": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SendDocumentsForSignature' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": false }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveProviderStatus' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "configuration": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveProviderConfiguration' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementId": "requirementId", "requirementName": "requirementName", "documentDataKey": "documentDataKey", "isMandatory": false, "journeyId": "journeyId", "entityId": "entityId", "status": "status", "comment": "comment", "deferUntil": "2024-10-07T14:16:01.9162969+00:00", "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "properties": {}, "envelopeId": "envelopeId", "dateSent": "2024-10-07T14:16:01.9163222+00:00", "lastNotificationDate": "2024-10-07T14:16:01.9163251+00:00", "signers": [ { "signerType": "signerType", "fullName": "fullName", "email": "email", "relationship": "relationship", "hasSigned": false, "order": 0, "accessCode": "accessCode", "recipientIdentityVerification": { "inputOptions": [ { "name": "name", "phoneNumberList": [ { "countryCode": "countryCode", "countryCodeLock": "countryCodeLock", "countryCodeMetadata": { "options": [ "" ], "rights": "rights" }, "extension": "extension", "extensionMetadata": { "options": [ "" ], "rights": "rights" }, "number": "number", "numberMetadata": { "options": [ "" ], "rights": "rights" } } ], "valueType": "valueType" } ], "workflowId": "workflowId", "workflowIdMetadata": { "options": [ "" ], "rights": "rights" }, "workflowLabel": "workflowLabel" } } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateESignatureDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "status": "status", "comment": "comment", "deferUntil": "2024-10-07T14:16:01.9165249+00:00", "envelopeId": "envelopeId", "dateSent": "2024-10-07T14:16:01.9165315+00:00", "lastNotificationDate": "2024-10-07T14:16:01.9165345+00:00", "signers": [ { "signerType": "signerType", "fullName": "fullName", "email": "email", "relationship": "relationship", "hasSigned": false, "order": 0, "accessCode": "accessCode", "recipientIdentityVerification": { "inputOptions": [ { "name": "name", "phoneNumberList": [ { "countryCode": "countryCode", "countryCodeLock": "countryCodeLock", "countryCodeMetadata": { "options": [ "" ], "rights": "rights" }, "extension": "extension", "extensionMetadata": { "options": [ "" ], "rights": "rights" }, "number": "number", "numberMetadata": { "options": [ "" ], "rights": "rights" } } ], "valueType": "valueType" } ], "workflowId": "workflowId", "workflowIdMetadata": { "options": [ "" ], "rights": "rights" }, "workflowLabel": "workflowLabel" } } ], "doNotOverrideESignature": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateESignatureDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "fileName": "fileName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirements": [ { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "Name": "Name", "IsMandatory": false, "DocumentAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId" } ], "isDocumentForESignature": false, "comesFromESignatureProvider": false, "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateTemporaryDocumentMultipleRequirements' ], domain: [ 'FenergoNebulaDocumentManagementCommandv10' ] } } }
];

async function ExecuteFenergoNebulaDocumentManagementCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let setId=''; let versionNumber=''; let id=''; let providerId='';
switch(endpoint){ case 'CreateAcceptableDocumentSet': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set';

break;
case 'CreateAcceptableDocumentSetVersionByVersionNumber': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'UpdateAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'CreateAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}'.replace('{setId}', setId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteAcceptableDocumentSet': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}'.replace('{setId}', setId);

break;
case 'SubmitForApprovalAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}/version/{versionNumber}/submit-for-approval'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'SignAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}/version/{versionNumber}/sign'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}/version/{versionNumber}/archive'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'CreateAcceptableDocument': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}/version/{versionNumber}/acceptableDocument'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateAcceptableDocument': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}/version/{versionNumber}/acceptableDocument/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteAcceptableDocument': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/acceptabledocument/set/{setId}/version/{versionNumber}/acceptableDocument/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'CreateDocumentAssignment': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentassignment';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocumentAssignment': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentassignment/update/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UploadDocumentModel': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentmanagement';

break;
case 'UpdateDocument': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentmanagement/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteDocumentModel': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentmanagement/{id}'.replace('{id}', id);

break;
case 'UpdateRequirementIds': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentmanagement/{id}/requirement-ids'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocumentFile': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentmanagement/updateFile';

break;
case 'UpdateDataKey': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentmanagement/{id}/datakey'.replace('{id}', id);

break;
case 'CreateDocumentRequirement': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirement';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocumentRequirement': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirement/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocumentRequirementProperties': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirement/{id}/properties'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateDocumentRequirementMetadataSet': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set';

break;
case 'CreateDocumentRequirementMetadataSetVersionByVersionNumber': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'UpdateDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'CreateDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}'.replace('{setId}', setId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteDocumentRequirementMetadataSet': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}'.replace('{setId}', setId);

break;
case 'SubmitForApprovalDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}/submit-for-approval'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'SignDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}/sign'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}/archive'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'CreateDocumentRequirementMetadata': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}/documentRequirementMetadata'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocumentRequirementMetadata': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}/documentRequirementMetadata/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteDocumentRequirementMetadata': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}/documentRequirementMetadata/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'SendDocumentsForSignature': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/esignature';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SaveProviderStatus': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/esignatureconfiguration/provider/{providerId}/status'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SaveProviderConfiguration': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/esignatureconfiguration/provider/{providerId}/configuration'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'RefreshIdVProviders': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/esignatureconfiguration/provider/{providerId}/refreshIdVProviders'.replace('{providerId}', providerId);

break;
case 'CreateESignatureDocumentRequirement': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/esignaturedocumentrequirement';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateESignatureDocumentRequirement': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/esignaturedocumentrequirement/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateTemporaryDocumentMultipleRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/temporarydocumentmanagement';

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
    FenergoNebulaDocumentManagementCommandv10Properties,
    ExecuteFenergoNebulaDocumentManagementCommandv10
}
