import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaDocumentManagementCommandv20Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create acceptable document set model', value: 'CreateAcceptableDocumentSet' },{ name: 'Create acceptable document set version by version number', value: 'CreateAcceptableDocumentSetVersionByVersionNumber' },{ name: 'Update acceptable document set version', value: 'UpdateAcceptableDocumentSetVersion' },{ name: 'Delete acceptable document set version', value: 'DeleteAcceptableDocumentSetVersion' },{ name: 'Create acceptable document set version with given acceptable documents', value: 'CreateAcceptableDocumentSetVersion' },{ name: 'Delete acceptable document set and all its versions', value: 'DeleteAcceptableDocumentSet' },{ name: 'Submit acceptable document set version for approval', value: 'SubmitForApprovalAcceptableDocumentSetVersion' },{ name: 'Sign acceptable document set version', value: 'SignAcceptableDocumentSetVersion' },{ name: 'Archive acceptable document set version', value: 'ArchiveAcceptableDocumentSetVersion' },{ name: 'Create acceptable document model', value: 'CreateAcceptableDocument' },{ name: 'Update an existing acceptable document model', value: 'UpdateAcceptableDocument' },{ name: 'Delete an existing acceptable document model', value: 'DeleteAcceptableDocument' },{ name: 'Create document assignment', value: 'CreateDocumentAssignment' },{ name: 'Update document assignment', value: 'UpdateDocumentAssignment' },{ name: 'Save document metadata and generate the URL to upload the file - CreateDocumentModel', value: 'CreateDocumentModel' },{ name: 'Save document metadata and generate the URL to upload the file - product/CreateDocumentModel', value: 'product/CreateDocumentModel' },{ name: 'Save document metadata and generate the URL to upload the file - deal/CreateDocumentModel', value: 'deal/CreateDocumentModel' },{ name: 'Save document metadata including the URL to the virtual file - CreateVirtualDocumentModel', value: 'CreateVirtualDocumentModel' },{ name: 'Save document metadata including the URL to the virtual file - product/CreateVirtualDocumentModel', value: 'product/CreateVirtualDocumentModel' },{ name: 'Save document metadata including the URL to the virtual file - deal/CreateVirtualDocumentModel', value: 'deal/CreateVirtualDocumentModel' },{ name: 'Generate URL to upload the new document file - UpdateFile', value: 'UpdateFile' },{ name: 'Update document model access layers - UpdateDocumentAccessLayers', value: 'UpdateDocumentAccessLayers' },{ name: 'Update document model access layers - product/UpdateDocumentAccessLayers', value: 'product/UpdateDocumentAccessLayers' },{ name: 'Update document model access layers - deal/UpdateDocumentAccessLayers', value: 'deal/UpdateDocumentAccessLayers' },{ name: 'Save document metadata and generate the URL to upload the file for multiple Document Requirements - CreateDocumentModelMultipleRequirements', value: 'CreateDocumentModelMultipleRequirements' },{ name: 'Save document metadata and generate the URL to upload the file for multiple Document Requirements - product/CreateDocumentModelMultipleRequirements', value: 'product/CreateDocumentModelMultipleRequirements' },{ name: 'Save document metadata and generate the URL to upload the file for multiple Document Requirements - deal/CreateDocumentModelMultipleRequirements', value: 'deal/CreateDocumentModelMultipleRequirements' },{ name: 'Save document metadata including the URL to the virtual file for multiple Document Requirements - CreateVirtualDocumentModelMultipleRequirements', value: 'CreateVirtualDocumentModelMultipleRequirements' },{ name: 'Save document metadata including the URL to the virtual file for multiple Document Requirements - product/CreateVirtualDocumentModelMultipleRequirements', value: 'product/CreateVirtualDocumentModelMultipleRequirements' },{ name: 'Save document metadata including the URL to the virtual file for multiple Document Requirements - deal/CreateVirtualDocumentModelMultipleRequirements', value: 'deal/CreateVirtualDocumentModelMultipleRequirements' },{ name: 'Clones Document Model which references Original Physical File - CloneDocumentModel', value: 'CloneDocumentModel' },{ name: 'Clones Document Model which references Original Physical File - product/CloneDocumentModel', value: 'product/CloneDocumentModel' },{ name: 'Clones Document Model which references Original Physical File - deal/CloneDocumentModel', value: 'deal/CloneDocumentModel' },{ name: 'Update Document Model Status to "Error" - UpdateDocumentModelStatusError', value: 'UpdateDocumentModelStatusError' },{ name: 'Update Document Model Status to "Error" - product/UpdateDocumentModelStatusError', value: 'product/UpdateDocumentModelStatusError' },{ name: 'Update Document Model Status to "Error" - deal/UpdateDocumentModelStatusError', value: 'deal/UpdateDocumentModelStatusError' },{ name: 'Update Document Model Status to "Error" with custom error code and message - UpdateDocumentModelCustomError', value: 'UpdateDocumentModelCustomError' },{ name: 'Update Document Model Status to "Error" with custom error code and message - product/UpdateDocumentModelCustomError', value: 'product/UpdateDocumentModelCustomError' },{ name: 'Update Document Model Status to "Error" with custom error code and message - deal/UpdateDocumentModelCustomError', value: 'deal/UpdateDocumentModelCustomError' },{ name: 'Updates a document - UpdateDocument', value: 'UpdateDocument' },{ name: 'Delete a document model - DeleteDocumentModel', value: 'DeleteDocumentModel' },{ name: 'Updates a document - product/UpdateDocument', value: 'product/UpdateDocument' },{ name: 'Delete a document model - product/DeleteDocumentModel', value: 'product/DeleteDocumentModel' },{ name: 'Updates a document - deal/UpdateDocument', value: 'deal/UpdateDocument' },{ name: 'Delete a document model - deal/DeleteDocumentModel', value: 'deal/DeleteDocumentModel' },{ name: 'Update the requirements linked to a document - UpdateRequirementIds', value: 'UpdateRequirementIds' },{ name: 'Update the requirements linked to a document - product/UpdateRequirementIds', value: 'product/UpdateRequirementIds' },{ name: 'Update the requirements linked to a document - deal/UpdateRequirementIds', value: 'deal/UpdateRequirementIds' },{ name: 'Update the requirement datakey linked to a document - UpdateDataKey', value: 'UpdateDataKey' },{ name: 'Update the requirement datakey linked to a document - product/UpdateDataKey', value: 'product/UpdateDataKey' },{ name: 'Update the requirement datakey linked to a document - deal/UpdateDataKey', value: 'deal/UpdateDataKey' },{ name: 'Update the uploadedByUsername property of a document - UpdateDocumentUploadedByUserName', value: 'UpdateDocumentUploadedByUserName' },{ name: 'Updates an existing DocumentRequirement - UpdateDocumentRequirement', value: 'UpdateDocumentRequirement' },{ name: 'Updates an existing DocumentRequirement - product/UpdateDocumentRequirement', value: 'product/UpdateDocumentRequirement' },{ name: 'Updates an existing DocumentRequirement - deal/UpdateDocumentRequirement', value: 'deal/UpdateDocumentRequirement' },{ name: 'Creates a new DocumentRequirement. - CreateDocumentRequirement', value: 'CreateDocumentRequirement' },{ name: 'Creates a new DocumentRequirement. - product/CreateDocumentRequirement', value: 'product/CreateDocumentRequirement' },{ name: 'Creates a new DocumentRequirement. - deal/CreateDocumentRequirement', value: 'deal/CreateDocumentRequirement' },{ name: 'Create a document requirement metadata set model', value: 'CreateDocumentRequirementMetadataSet' },{ name: 'Create document requirement metadata set version by version number', value: 'CreateDocumentRequirementMetadataSetVersionByVersionNumber' },{ name: 'Update document requirement metadata set version', value: 'UpdateDocumentRequirementMetadataSetVersion' },{ name: 'Delete document requirement metadata set version', value: 'DeleteDocumentRequirementMetadataSetVersion' },{ name: 'Create document requirement metadata set version with given document requirement metadata', value: 'CreateDocumentRequirementMetadataSetVersion' },{ name: 'Delete document requirement metadata set and all its versions', value: 'DeleteDocumentRequirementMetadataSet' },{ name: 'Submit document requirement metadata set version for approval', value: 'SubmitForApprovalDocumentRequirementMetadataSetVersion' },{ name: 'Sign document requirement metadata set version', value: 'SignDocumentRequirementMetadataSetVersion' },{ name: 'Archive document requirement metadata set version', value: 'ArchiveDocumentRequirementMetadataSetVersion' },{ name: 'Create document requirement metadata model', value: 'CreateDocumentRequirementMetadata' },{ name: 'Update an existing document requirement metadata model', value: 'UpdateDocumentRequirementMetadata' },{ name: 'Delete an existing document requirement metadata model', value: 'DeleteDocumentRequirementMetadata' },{ name: 'Sends a request with documents to external provider for eSignature.', value: 'SendDocumentsForSignature' },{ name: 'Save Provider status', value: 'SaveProviderStatus' },{ name: 'Save Configuration', value: 'SaveProviderConfiguration' },{ name: 'Refresh IDV Provider List', value: 'RefreshIdVProviders' },{ name: 'Creates a new eSignatureDocumentRequirement.', value: 'CreateESignatureDocumentRequirement' },{ name: 'Updates an existing eSignatureDocumentRequirement', value: 'UpdateESignatureDocumentRequirement' },{ name: 'Save temporary document metadata and generate the URL to upload the file for multiple Document Requirements', value: 'CreateTemporaryDocumentMultipleRequirements' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaDocumentManagementCommandv20',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocumentSetVersionByVersionNumber' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to be cloned', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocumentSetVersionByVersionNumber' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocumentSet' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'SubmitForApprovalAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitForApprovalAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'SignAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'ArchiveAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the acceptable document will be added', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the acceptable document to be updated lives', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Acceptable document set id', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the acceptable document to be deleted lives', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the existing model to delete', displayOptions: { show: { endpoint: [ 'DeleteAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document assignment id', displayOptions: { show: { endpoint: [ 'UpdateDocumentAssignment' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'UpdateDocumentAccessLayers' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'product/UpdateDocumentAccessLayers' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'deal/UpdateDocumentAccessLayers' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'CloneDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'product/CloneDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'deal/CloneDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'UpdateDocumentModelStatusError' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'product/UpdateDocumentModelStatusError' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'deal/UpdateDocumentModelStatusError' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'UpdateDocumentModelCustomError' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'product/UpdateDocumentModelCustomError' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Document model id', displayOptions: { show: { endpoint: [ 'deal/UpdateDocumentModelCustomError' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the document existing', displayOptions: { show: { endpoint: [ 'DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'product/UpdateDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the document existing', displayOptions: { show: { endpoint: [ 'product/DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'deal/UpdateDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the document existing', displayOptions: { show: { endpoint: [ 'deal/DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateRequirementIds' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'product/UpdateRequirementIds' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'deal/UpdateRequirementIds' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateDataKey' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'product/UpdateDataKey' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'deal/UpdateDataKey' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateDocumentUploadedByUserName' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'product/UpdateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'deal/UpdateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadataSetVersionByVersionNumber' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to be cloned', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadataSetVersionByVersionNumber' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadataSet' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'SubmitForApprovalDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitForApprovalDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'SignDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'ArchiveDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the document requirement metadata will be added', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the document requirement metadata to be updated lives', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the existing model', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'Document Requirement Metadata set id', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number where the document requirement metadata to be deleted lives', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The id of the existing model to delete', displayOptions: { show: { endpoint: [ 'DeleteDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'SaveProviderStatus' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'SaveProviderConfiguration' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: '', displayOptions: { show: { endpoint: [ 'RefreshIdVProviders' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The Id of the existing model to update', displayOptions: { show: { endpoint: [ 'UpdateESignatureDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "setId": "setId", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7143891+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7143999+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7144062+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7144132+00:00" }, "hasProcessedRequest": false } ], "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "setId": "setId", "acceptableDocuments": [ { "type": "type", "description": "description", "dataKey": "dataKey", "extractData": false, "extractionCategories": [ "" ] } ], "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7145059+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "type": "type", "description": "description", "dataKey": "dataKey", "extractData": false, "extractionCategories": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "type": "type", "description": "description", "dataKey": "dataKey", "extractData": false, "extractionCategories": [ "" ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateAcceptableDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "journeyId": "journeyId", "taskId": "taskId", "assignments": [ { "targetEntityId": "targetEntityId", "documentId": "documentId" } ], "snapshot": { "associationsSnapshots": [ { "id": "id", "sourceId": "sourceId", "targetId": "targetId", "type": "type" } ], "documentSnapshots": [ { "id": "id", "name": "name", "documentType": "documentType", "uploadedBy": "uploadedBy", "uploadedOn": "2024-05-28T06:55:51.7146004+00:00" } ], "entitiesSnapshots": [ { "id": "id", "fullName": "fullName", "type": "type", "role": "role", "created": "2024-05-28T06:55:51.7146089+00:00" } ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentAssignment' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "journeyId": "journeyId", "taskId": "taskId", "assignments": [ { "targetEntityId": "targetEntityId", "documentId": "documentId" } ], "snapshot": { "associationsSnapshots": [ { "id": "id", "sourceId": "sourceId", "targetId": "targetId", "type": "type" } ], "documentSnapshots": [ { "id": "id", "name": "name", "documentType": "documentType", "uploadedBy": "uploadedBy", "uploadedOn": "2024-05-28T06:55:51.7146532+00:00" } ], "entitiesSnapshots": [ { "id": "id", "fullName": "fullName", "type": "type", "role": "role", "created": "2024-05-28T06:55:51.7146607+00:00" } ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentAssignment' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "fileName": "fileName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirementIds": [ "" ], "documentDataKey": "documentDataKey", "isDocumentForESignature": false, "comesFromESignatureProvider": false, "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "autoClassify": false, "metadata": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "fileName": "fileName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirementIds": [ "" ], "documentDataKey": "documentDataKey", "isDocumentForESignature": false, "comesFromESignatureProvider": false, "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "autoClassify": false, "metadata": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/CreateDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "fileName": "fileName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirementIds": [ "" ], "documentDataKey": "documentDataKey", "isDocumentForESignature": false, "comesFromESignatureProvider": false, "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "autoClassify": false, "metadata": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/CreateDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "friendlyName": "friendlyName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "documentDataKey": "documentDataKey", "documentURL": "documentURL", "documentRequirementIds": [ "" ], "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "isDocumentForESignature": false, "comesFromESignatureProvider": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateVirtualDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "friendlyName": "friendlyName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "documentDataKey": "documentDataKey", "documentURL": "documentURL", "documentRequirementIds": [ "" ], "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "isDocumentForESignature": false, "comesFromESignatureProvider": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/CreateVirtualDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "friendlyName": "friendlyName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "documentDataKey": "documentDataKey", "documentURL": "documentURL", "documentRequirementIds": [ "" ], "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "isDocumentForESignature": false, "comesFromESignatureProvider": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/CreateVirtualDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "fileName": "fileName" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateFile' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentAccessLayers' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/UpdateDocumentAccessLayers' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/UpdateDocumentAccessLayers' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "fileName": "fileName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirements": [ { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "Name": "Name", "IsMandatory": false, "DocumentAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId" } ], "isDocumentForESignature": false, "comesFromESignatureProvider": false, "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentModelMultipleRequirements' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "fileName": "fileName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirements": [ { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "Name": "Name", "IsMandatory": false, "DocumentAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId" } ], "isDocumentForESignature": false, "comesFromESignatureProvider": false, "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/CreateDocumentModelMultipleRequirements' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "fileName": "fileName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirements": [ { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "Name": "Name", "IsMandatory": false, "DocumentAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId" } ], "isDocumentForESignature": false, "comesFromESignatureProvider": false, "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/CreateDocumentModelMultipleRequirements' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "friendlyName": "friendlyName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "documentDataKey": "documentDataKey", "documentURL": "documentURL", "documentRequirements": [ { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "Name": "Name", "IsMandatory": false, "DocumentAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId" } ], "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "isDocumentForESignature": false, "comesFromESignatureProvider": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateVirtualDocumentModelMultipleRequirements' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "friendlyName": "friendlyName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "documentDataKey": "documentDataKey", "documentURL": "documentURL", "documentRequirements": [ { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "Name": "Name", "IsMandatory": false, "DocumentAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId" } ], "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "isDocumentForESignature": false, "comesFromESignatureProvider": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/CreateVirtualDocumentModelMultipleRequirements' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "friendlyName": "friendlyName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "documentDataKey": "documentDataKey", "documentURL": "documentURL", "documentRequirements": [ { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "Name": "Name", "IsMandatory": false, "DocumentAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId" } ], "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "isDocumentForESignature": false, "comesFromESignatureProvider": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/CreateVirtualDocumentModelMultipleRequirements' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "EntityId": "EntityId", "JourneyId": "JourneyId", "DocumentRequirementIds": [ "" ], "AccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId", "skipStatusReset": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloneDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "EntityId": "EntityId", "JourneyId": "JourneyId", "DocumentRequirementIds": [ "" ], "AccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId", "skipStatusReset": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/CloneDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "EntityId": "EntityId", "JourneyId": "JourneyId", "DocumentRequirementIds": [ "" ], "AccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId", "skipStatusReset": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/CloneDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "errorCode": "errorCode", "errorMessage": "errorMessage" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentModelCustomError' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "errorCode": "errorCode", "errorMessage": "errorMessage" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/UpdateDocumentModelCustomError' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "errorCode": "errorCode", "errorMessage": "errorMessage" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/UpdateDocumentModelCustomError' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirementIds": [ "" ], "documentDataKey": "documentDataKey", "properties": {}, "skipStatusReset": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirementIds": [ "" ], "documentDataKey": "documentDataKey", "properties": {}, "skipStatusReset": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/UpdateDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirementIds": [ "" ], "documentDataKey": "documentDataKey", "properties": {}, "skipStatusReset": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/UpdateDocument' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '[ "" ]', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateRequirementIds' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '[ "" ]', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/UpdateRequirementIds' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '[ "" ]', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/UpdateRequirementIds' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "status": "status", "comment": "comment", "deferUntil": "2024-05-28T06:55:51.7156201+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "status": "status", "comment": "comment", "deferUntil": "2024-05-28T06:55:51.7156366+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/UpdateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "status": "status", "comment": "comment", "deferUntil": "2024-05-28T06:55:51.7156517+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/UpdateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementId": "requirementId", "requirementName": "requirementName", "documentDataKey": "documentDataKey", "isMandatory": false, "journeyId": "journeyId", "entityId": "entityId", "status": "status", "comment": "comment", "deferUntil": "2024-05-28T06:55:51.7156767+00:00", "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementId": "requirementId", "requirementName": "requirementName", "documentDataKey": "documentDataKey", "isMandatory": false, "journeyId": "journeyId", "entityId": "entityId", "status": "status", "comment": "comment", "deferUntil": "2024-05-28T06:55:51.7157103+00:00", "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'product/CreateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementId": "requirementId", "requirementName": "requirementName", "documentDataKey": "documentDataKey", "isMandatory": false, "journeyId": "journeyId", "entityId": "entityId", "status": "status", "comment": "comment", "deferUntil": "2024-05-28T06:55:51.7157386+00:00", "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "properties": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'deal/CreateDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "setId": "setId", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7157910+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7157976+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7158041+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7158110+00:00" }, "hasProcessedRequest": false } ], "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "setId": "setId", "documentRequirementMetadata": [ { "name": "name", "databaseFieldName": "databaseFieldName", "type": "type", "lookup": "lookup", "defaultValue": "defaultValue", "value": "value", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-05-28T06:55:51.7159366+00:00", "maxDate": "2024-05-28T06:55:51.7159377+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 } } } ], "notes": "notes" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2024-05-28T06:55:51.7159879+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "databaseFieldName": "databaseFieldName", "type": "type", "lookup": "lookup", "defaultValue": "defaultValue", "value": "value", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-05-28T06:55:51.7160713+00:00", "maxDate": "2024-05-28T06:55:51.7160723+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 } } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name", "databaseFieldName": "databaseFieldName", "type": "type", "lookup": "lookup", "defaultValue": "defaultValue", "value": "value", "validationData": { "isMandatory": { "active": false, "message": "message" }, "specialCharacters": { "active": false, "message": "message", "excludedCharacters": [ "" ] }, "noNumbers": { "active": false, "message": "message" }, "onlyInteger": { "active": false, "message": "message" }, "noNegative": { "active": false, "message": "message" }, "onlyDecimal": { "active": false, "message": "message" }, "regex": { "active": false, "message": "message", "isCaseSensitive": false, "regexValue": "regexValue" }, "characterLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "numberLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 }, "noFutureDates": { "active": false, "message": "message" }, "noPastDates": { "active": false, "message": "message" }, "dateLimit": { "active": false, "message": "message", "minDate": "2024-05-28T06:55:51.7161637+00:00", "maxDate": "2024-05-28T06:55:51.7161647+00:00" }, "multiSelectLimit": { "active": false, "message": "message", "minValue": 0, "maxValue": 0 } }, "id": "id" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateDocumentRequirementMetadata' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "taskId": "taskId", "entityId": "entityId", "journeyId": "journeyId", "entityName": "entityName", "providerName": "providerName", "documentRequirementsIds": [ "" ], "signers": [ { "signerType": "signerType", "fullName": "fullName", "email": "email", "relationship": "relationship", "hasSigned": false, "order": 0 } ], "isDraft": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SendDocumentsForSignature' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": false }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveProviderStatus' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "configuration": {} } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SaveProviderConfiguration' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "requirementId": "requirementId", "requirementName": "requirementName", "documentDataKey": "documentDataKey", "isMandatory": false, "journeyId": "journeyId", "entityId": "entityId", "status": "status", "comment": "comment", "deferUntil": "2024-05-28T06:55:51.7162801+00:00", "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "properties": {}, "envelopeId": "envelopeId", "dateSent": "2024-05-28T06:55:51.7162888+00:00", "lastNotificationDate": "2024-05-28T06:55:51.7162902+00:00", "signers": [ { "signerType": "signerType", "fullName": "fullName", "email": "email", "relationship": "relationship", "hasSigned": false, "order": 0 } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateESignatureDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "status": "status", "comment": "comment", "deferUntil": "2024-05-28T06:55:51.7163200+00:00", "envelopeId": "envelopeId", "dateSent": "2024-05-28T06:55:51.7163222+00:00", "lastNotificationDate": "2024-05-28T06:55:51.7163233+00:00", "signers": [ { "signerType": "signerType", "fullName": "fullName", "email": "email", "relationship": "relationship", "hasSigned": false, "order": 0 } ], "doNotOverrideESignature": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateESignatureDocumentRequirement' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "fileName": "fileName", "entityId": "entityId", "journeyId": "journeyId", "documentType": "documentType", "friendlyName": "friendlyName", "documentRequirements": [ { "Id": "Id", "DocumentDataKey": "DocumentDataKey", "Name": "Name", "IsMandatory": false, "DocumentAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "requirementModelId": "requirementModelId" } ], "isDocumentForESignature": false, "comesFromESignatureProvider": false, "properties": {}, "accessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] }, "policyEnforcedAccessLayers": { "geographic": [ "" ], "businessRelated": [ "" ] } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateTemporaryDocumentMultipleRequirements' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'requirementModelId', name: 'requirementModelId', type: 'string', required: true, default: '', description: 'The id of the requirement the document model was linked to', displayOptions: { show: { endpoint: [ 'DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'skipStatusReset', name: 'skipStatusReset', type: 'string', required: true, default: '', description: 'Skip status reset to In Progress step after document is deleted', displayOptions: { show: { endpoint: [ 'DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'requirementModelId', name: 'requirementModelId', type: 'string', required: true, default: '', description: 'The id of the requirement the document model was linked to', displayOptions: { show: { endpoint: [ 'product/DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'skipStatusReset', name: 'skipStatusReset', type: 'string', required: true, default: '', description: 'Skip status reset to In Progress step after document is deleted', displayOptions: { show: { endpoint: [ 'product/DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'requirementModelId', name: 'requirementModelId', type: 'string', required: true, default: '', description: 'The id of the requirement the document model was linked to', displayOptions: { show: { endpoint: [ 'deal/DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } },{ displayName: 'skipStatusReset', name: 'skipStatusReset', type: 'string', required: true, default: '', description: 'Skip status reset to In Progress step after document is deleted', displayOptions: { show: { endpoint: [ 'deal/DeleteDocumentModel' ], domain: [ 'FenergoNebulaDocumentManagementCommandv20' ] } } }
];

async function ExecuteFenergoNebulaDocumentManagementCommandv20(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set';

break;
case 'CreateAcceptableDocumentSetVersionByVersionNumber': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'UpdateAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'CreateAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}'.replace('{setId}', setId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteAcceptableDocumentSet': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}'.replace('{setId}', setId);

break;
case 'SubmitForApprovalAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}/version/{versionNumber}/submit-for-approval'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'SignAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}/version/{versionNumber}/sign'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}/version/{versionNumber}/archive'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'CreateAcceptableDocument': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}/version/{versionNumber}/acceptableDocument'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateAcceptableDocument': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}/version/{versionNumber}/acceptableDocument/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteAcceptableDocument': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/acceptabledocument/set/{setId}/version/{versionNumber}/acceptableDocument/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'CreateDocumentAssignment': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentassignment';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocumentAssignment': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentassignment/update/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateDocumentModel': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/CreateDocumentModel': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/CreateDocumentModel';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/CreateDocumentModel': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/CreateDocumentModel';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateVirtualDocumentModel': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/virtual';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/CreateVirtualDocumentModel': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/virtual';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/CreateVirtualDocumentModel': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/virtual';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateFile': 
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/updateFile';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocumentAccessLayers': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/{id}/access-layers'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/UpdateDocumentAccessLayers': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/{id}/access-layers'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/UpdateDocumentAccessLayers': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/{id}/access-layers'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateDocumentModelMultipleRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/CreateDocumentModelMultipleRequirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/CreateDocumentModelMultipleRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/CreateDocumentModelMultipleRequirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/CreateDocumentModelMultipleRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/CreateDocumentModelMultipleRequirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateVirtualDocumentModelMultipleRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/virtual/multiple-requirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/CreateVirtualDocumentModelMultipleRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/virtual/multiple-requirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/CreateVirtualDocumentModelMultipleRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/virtual/multiple-requirements';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CloneDocumentModel': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/{id}/clone'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/CloneDocumentModel': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/{id}/clone'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/CloneDocumentModel': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/{id}/clone'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocumentModelStatusError': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/error/{id}'.replace('{id}', id);

break;
case 'product/UpdateDocumentModelStatusError': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/error/{id}'.replace('{id}', id);

break;
case 'deal/UpdateDocumentModelStatusError': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/error/{id}'.replace('{id}', id);

break;
case 'UpdateDocumentModelCustomError': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/custom-error/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/UpdateDocumentModelCustomError': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/custom-error/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/UpdateDocumentModelCustomError': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/custom-error/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocument': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteDocumentModel': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/{id}'.replace('{id}', id);
requestOptions.qs = { requirementModelId: base.getNodeParameter('requirementModelId', 0) as string,skipStatusReset: base.getNodeParameter('skipStatusReset', 0) as string };
break;
case 'product/UpdateDocument': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/DeleteDocumentModel': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/{id}'.replace('{id}', id);
requestOptions.qs = { requirementModelId: base.getNodeParameter('requirementModelId', 0) as string,skipStatusReset: base.getNodeParameter('skipStatusReset', 0) as string };
break;
case 'deal/UpdateDocument': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/DeleteDocumentModel': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/{id}'.replace('{id}', id);
requestOptions.qs = { requirementModelId: base.getNodeParameter('requirementModelId', 0) as string,skipStatusReset: base.getNodeParameter('skipStatusReset', 0) as string };
break;
case 'UpdateRequirementIds': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/{id}/requirement-ids'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/UpdateRequirementIds': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/{id}/requirement-ids'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/UpdateRequirementIds': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/{id}/requirement-ids'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDataKey': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/{id}/datakey'.replace('{id}', id);

break;
case 'product/UpdateDataKey': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/product/{id}/datakey'.replace('{id}', id);

break;
case 'deal/UpdateDataKey': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/deal/{id}/datakey'.replace('{id}', id);

break;
case 'UpdateDocumentUploadedByUserName': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentmanagement/{id}/updateDocumentUploadedByUserName'.replace('{id}', id);

break;
case 'UpdateDocumentRequirement': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirement/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/UpdateDocumentRequirement': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirement/product/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/UpdateDocumentRequirement': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirement/deal/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateDocumentRequirement': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirement';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'product/CreateDocumentRequirement': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirement/product/CreateDocumentRequirement';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'deal/CreateDocumentRequirement': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirement/deal/CreateDocumentRequirement';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateDocumentRequirementMetadataSet': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set';

break;
case 'CreateDocumentRequirementMetadataSetVersionByVersionNumber': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'UpdateDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'CreateDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}'.replace('{setId}', setId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteDocumentRequirementMetadataSet': setId = base.getNodeParameter('setId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}'.replace('{setId}', setId);

break;
case 'SubmitForApprovalDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}/version/{versionNumber}/submit-for-approval'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'SignDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}/version/{versionNumber}/sign'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}/version/{versionNumber}/archive'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'CreateDocumentRequirementMetadata': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}/version/{versionNumber}/documentRequirementMetadata'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateDocumentRequirementMetadata': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}/version/{versionNumber}/documentRequirementMetadata/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteDocumentRequirementMetadata': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/documentrequirementmetadata/set/{setId}/version/{versionNumber}/documentRequirementMetadata/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'SendDocumentsForSignature': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/esignature';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SaveProviderStatus': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/esignatureconfiguration/provider/{providerId}/status'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SaveProviderConfiguration': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/esignatureconfiguration/provider/{providerId}/configuration'.replace('{providerId}', providerId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'RefreshIdVProviders': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/esignatureconfiguration/provider/{providerId}/refreshIdVProviders'.replace('{providerId}', providerId);

break;
case 'CreateESignatureDocumentRequirement': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/esignaturedocumentrequirement';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateESignatureDocumentRequirement': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/esignaturedocumentrequirement/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateTemporaryDocumentMultipleRequirements': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/documentmanagementcommand/api/v2/temporarydocumentmanagement';

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
    FenergoNebulaDocumentManagementCommandv20Properties,
    ExecuteFenergoNebulaDocumentManagementCommandv20
}
