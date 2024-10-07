import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXNAR.node';

let FenergoNebulaDocumentManagementQueryv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Gets an Acceptable Document by Id', value: 'GetAcceptableDocumentById' },{ name: 'Gets all Acceptable Documents', value: 'GetLatestAcceptableDocuments' },{ name: 'Gets the default Acceptable Document Set of the tenant', value: 'GetDefaultAcceptableDocumentSet' },{ name: 'Gets an Acceptable Document Set Version by setId and version number', value: 'GetAcceptableDocumentSetVersion' },{ name: 'Get all documents by deal id', value: 'GetAllDealDocumentsByDealId' },{ name: 'Retrieves paginated document models based on a specific deal ID and tenant ID', value: 'GetPagedDocumentsByDealId' },{ name: 'Gets all Document Models for an Deal Id and Journey Id.', value: 'GetAllModelsByDealIdAndJourneyId' },{ name: 'Get a document by id and tenant', value: 'GetDealDocumentModelById' },{ name: 'Get all documents by journey id', value: 'GetAllDealDocumentsByJourneyId' },{ name: 'Method to get a signed URL from S3', value: 'GetSignedUrlForDealDocument' },{ name: 'Get all supported mime types when uploading a file in the document requirements.', value: 'GetMimeTypesAllowedForDeal' },{ name: 'Gets all requirements for a Journey Id.', value: 'GetAllDealRequirementModelsByJourneyId' },{ name: 'Gets a DocumentRequirementModel by Journey Id and Requirement Id', value: 'GetDealDocumentRequirementModelByJourneyIdAndRequirementId' },{ name: 'Gets a DocumentRequirementModel by Journey Id and DocumentDataKey', value: 'GetDealDocumentRequirementModelByJourneyIdandDocumentDataKey' },{ name: 'Gets all Document Requirement Statuses for an Deal Id and Journey Id.', value: 'GetAllRequirementModelsByDealIdAndJourneyId' },{ name: 'Gets all Document Requirement Statuses for an Deal Id.', value: 'GetAllRequirementModelsByDealId' },{ name: 'Gets Document assignment by Id', value: 'GetDocumentAssignmentById' },{ name: 'Get all document assignments for journey', value: 'GetAllDocumentAssignmentByJourneyId' },{ name: 'Get a document by id and tenant', value: 'GetDocumentModelById' },{ name: 'Get all documents by journey id', value: 'GetAllDocumentsByJourneyId' },{ name: 'Get all documents by entity id', value: 'GetAllDocumentsByEntityId' },{ name: 'Retrieves paginated document models based on a specific entity ID and tenant ID', value: 'GetPagedDocumentsByEntityId' },{ name: 'Gets all Document Models for an Entity Id and Journey Id.', value: 'GetAllModelsByEntityIdAndJourneyId' },{ name: 'Method to get a signed URL from S3', value: 'GetSignedUrl' },{ name: 'Get all supported mime types when uploading a file in the document requirements.', value: 'Getallsupportedmimetypeswhenuploadingafileinthedocumentrequirements.' },{ name: 'Gets all requirements for a Journey Id.', value: 'GetAllRequirementModelsByJourneyId' },{ name: 'Gets a DocumentRequirementModel by Journey Id and Requirement Id', value: 'GetDocumentRequirementModelById' },{ name: 'Gets all Document Requirement Statuses for an Entity Id and Journey Id.', value: 'GetAllRequirementModelsByEntityIdAndJourneyId' },{ name: 'Gets all Document Requirement Statuses for an Entity Id.', value: 'GetAllRequirementModelsByEntityId' },{ name: 'Gets a DocumentRequirementModel by Journey Id and DocumentDataKey', value: 'GetDocumentRequirementModelByJourneyIdandDocumentDataKey' },{ name: 'Gets a Document Requirement Metadata by Id', value: 'GetDocumentRequirementMetadataById' },{ name: 'Gets all Document Requirement Metadata', value: 'GetLatestDocumentRequirementMetadata' },{ name: 'Gets the default Document Requirement Metadata Set of the tenant', value: 'GetDefaultDocumentRequirementMetadataSet' },{ name: 'Gets a Document Requirement Metadata Set Version by setId and version number', value: 'GetDocumentRequirementMetadataSetVersion' },{ name: 'Get Configuration', value: 'GetConfiguration' },{ name: 'Get provider configuration', value: 'GetProviderConfiguration' },{ name: 'Gets all requirements for a Journey Id.', value: 'GetAllESignatureRequirementModelsByJourneyId' },{ name: 'Gets a eSignatureDocumentRequirementModel by Journey Id and Requirement Id', value: 'GetESignatureDocumentRequirementModelById' },{ name: 'Gets all eSignature Document Requirement Statuses for an Entity Id and Journey Id.', value: 'GetAllESignatureRequirementModelsByEntityIdAndJourneyId' },{ name: 'Gets a eSignatureDocumentRequirementModel by Journey Id and DocumentDataKey', value: 'GetESignatureDocumentRequirementModelByJourneyIdandDocumentDataKey' },{ name: 'Get all documents by entity id', value: 'GetAllProductDocumentsByProductId' },{ name: 'Retrieves paginated document models based on a specific product ID and tenant ID.', value: 'GetPagedDocumentsByProductId' },{ name: 'Gets all Document Models for an Entity Id and Journey Id.', value: 'GetAllModelsByProductIdAndJourneyId' },{ name: 'Get a document by id and tenant', value: 'GetProductDocumentModelById' },{ name: 'Get all documents by journey id', value: 'GetAllProductDocumentsByJourneyId' },{ name: 'Method to get a signed URL from S3', value: 'GetSignedUrlForProductDocument' },{ name: 'Get all supported mime types when uploading a file in the document requirements.', value: 'GetMimeTypesAllowedForProduct' },{ name: 'Gets all requirements for a Journey Id.', value: 'GetAllProductRequirementModelsByJourneyId' },{ name: 'Gets a DocumentRequirementModel by Journey Id and Requirement Id', value: 'GetProductDocumentRequirementModelById' },{ name: 'Gets a DocumentRequirementModel by Journey Id and DocumentDataKey', value: 'GetProductDocumentRequirementModelByJourneyIdandDocumentDataKey' },{ name: 'Gets all Document Requirement Statuses for an Product Id and Journey Id.', value: 'GetAllRequirementModelsByProductIdAndJourneyId' },{ name: 'Gets all Document Requirement Statuses for an Product Id.', value: 'GetAllRequirementModelsByProductId' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaDocumentManagementQueryv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The set id of the set where the acceptable document lives', displayOptions: { show: { endpoint: [ 'GetAcceptableDocumentById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version the acceptable document lives', displayOptions: { show: { endpoint: [ 'GetAcceptableDocumentById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the Acceptable Document', displayOptions: { show: { endpoint: [ 'GetAcceptableDocumentById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The ID of the Acceptable Document Set', displayOptions: { show: { endpoint: [ 'GetAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number to retrieve', displayOptions: { show: { endpoint: [ 'GetAcceptableDocumentSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'dealId', name: 'dealId', type: 'string', required: true, default: '', description: 'deal id', displayOptions: { show: { endpoint: [ 'GetAllDealDocumentsByDealId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'dealId', name: 'dealId', type: 'string', required: true, default: '', description: 'The entity identifier.', displayOptions: { show: { endpoint: [ 'GetAllModelsByDealIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllModelsByDealIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of an existing document', displayOptions: { show: { endpoint: [ 'GetDealDocumentModelById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id', displayOptions: { show: { endpoint: [ 'GetAllDealDocumentsByJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of document', displayOptions: { show: { endpoint: [ 'GetSignedUrlForDealDocument' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllDealRequirementModelsByJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetDealDocumentRequirementModelByJourneyIdAndRequirementId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'requirementId', name: 'requirementId', type: 'string', required: true, default: '', description: 'The requirement identifier.', displayOptions: { show: { endpoint: [ 'GetDealDocumentRequirementModelByJourneyIdAndRequirementId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetDealDocumentRequirementModelByJourneyIdandDocumentDataKey' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'documentDataKey', name: 'documentDataKey', type: 'string', required: true, default: '', description: 'The requirement identifier defined in policy configuration.', displayOptions: { show: { endpoint: [ 'GetDealDocumentRequirementModelByJourneyIdandDocumentDataKey' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'dealId', name: 'dealId', type: 'string', required: true, default: '', description: 'The deal identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByDealIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByDealIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'dealId', name: 'dealId', type: 'string', required: true, default: '', description: 'The deal identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByDealId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the Document Assignment', displayOptions: { show: { endpoint: [ 'GetDocumentAssignmentById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id', displayOptions: { show: { endpoint: [ 'GetAllDocumentAssignmentByJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of an existing document', displayOptions: { show: { endpoint: [ 'GetDocumentModelById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id', displayOptions: { show: { endpoint: [ 'GetAllDocumentsByJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'Entity id', displayOptions: { show: { endpoint: [ 'GetAllDocumentsByEntityId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The entity identifier.', displayOptions: { show: { endpoint: [ 'GetAllModelsByEntityIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllModelsByEntityIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of document', displayOptions: { show: { endpoint: [ 'GetSignedUrl' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetDocumentRequirementModelById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'requirementId', name: 'requirementId', type: 'string', required: true, default: '', description: 'The requirement identifier.', displayOptions: { show: { endpoint: [ 'GetDocumentRequirementModelById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The entity identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByEntityIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByEntityIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The entity identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByEntityId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetDocumentRequirementModelByJourneyIdandDocumentDataKey' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'documentDataKey', name: 'documentDataKey', type: 'string', required: true, default: '', description: 'The requirement identifier defined in policy configuration.', displayOptions: { show: { endpoint: [ 'GetDocumentRequirementModelByJourneyIdandDocumentDataKey' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The set id of the set where the document requirement metadata lives', displayOptions: { show: { endpoint: [ 'GetDocumentRequirementMetadataById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number of the version the document requirement metadata lives', displayOptions: { show: { endpoint: [ 'GetDocumentRequirementMetadataById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'The ID of the Document Requirement Metadata', displayOptions: { show: { endpoint: [ 'GetDocumentRequirementMetadataById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'setId', name: 'setId', type: 'string', required: true, default: '', description: 'The ID of the Document Requirement Metadata Set', displayOptions: { show: { endpoint: [ 'GetDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'The version number to retrieve', displayOptions: { show: { endpoint: [ 'GetDocumentRequirementMetadataSetVersion' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'providerId', name: 'providerId', type: 'string', required: true, default: '', description: 'The ID of provider', displayOptions: { show: { endpoint: [ 'GetProviderConfiguration' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllESignatureRequirementModelsByJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetESignatureDocumentRequirementModelById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'requirementId', name: 'requirementId', type: 'string', required: true, default: '', description: 'The requirement identifier.', displayOptions: { show: { endpoint: [ 'GetESignatureDocumentRequirementModelById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'entityId', name: 'entityId', type: 'string', required: true, default: '', description: 'The entity identifier.', displayOptions: { show: { endpoint: [ 'GetAllESignatureRequirementModelsByEntityIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllESignatureRequirementModelsByEntityIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetESignatureDocumentRequirementModelByJourneyIdandDocumentDataKey' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'documentDataKey', name: 'documentDataKey', type: 'string', required: true, default: '', description: 'The requirement identifier defined in policy configuration.', displayOptions: { show: { endpoint: [ 'GetESignatureDocumentRequirementModelByJourneyIdandDocumentDataKey' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'product id', displayOptions: { show: { endpoint: [ 'GetAllProductDocumentsByProductId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'The entity identifier.', displayOptions: { show: { endpoint: [ 'GetAllModelsByProductIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllModelsByProductIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of an existing document', displayOptions: { show: { endpoint: [ 'GetProductDocumentModelById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'Journey id', displayOptions: { show: { endpoint: [ 'GetAllProductDocumentsByJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Id of document', displayOptions: { show: { endpoint: [ 'GetSignedUrlForProductDocument' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllProductRequirementModelsByJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetProductDocumentRequirementModelById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'requirementId', name: 'requirementId', type: 'string', required: true, default: '', description: 'The requirement identifier.', displayOptions: { show: { endpoint: [ 'GetProductDocumentRequirementModelById' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetProductDocumentRequirementModelByJourneyIdandDocumentDataKey' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'documentDataKey', name: 'documentDataKey', type: 'string', required: true, default: '', description: 'The requirement identifier defined in policy configuration.', displayOptions: { show: { endpoint: [ 'GetProductDocumentRequirementModelByJourneyIdandDocumentDataKey' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'The product identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByProductIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'journeyId', name: 'journeyId', type: 'string', required: true, default: '', description: 'The journey identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByProductIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'productId', name: 'productId', type: 'string', required: true, default: '', description: 'The product identifier.', displayOptions: { show: { endpoint: [ 'GetAllRequirementModelsByProductId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "startIndex": 0, "pageSize": 0, "deduplicationEnabled": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPagedDocumentsByDealId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "startIndex": 0, "pageSize": 0, "deduplicationEnabled": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPagedDocumentsByEntityId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "entityId": "entityId", "startIndex": 0, "pageSize": 0, "deduplicationEnabled": false } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'GetPagedDocumentsByProductId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'deduplicationEnabled', name: 'deduplicationEnabled', type: 'string', required: true, default: '', description: 'Indicates if the documents returned should be deduplicated.', displayOptions: { show: { endpoint: [ 'GetAllDocumentsByJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'deduplicationEnabled', name: 'deduplicationEnabled', type: 'string', required: true, default: '', description: 'Indicates if the documents returned should be deduplicated.', displayOptions: { show: { endpoint: [ 'GetAllDocumentsByEntityId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } },{ displayName: 'deduplicationEnabled', name: 'deduplicationEnabled', type: 'string', required: true, default: '', description: 'Indicates if the documents returned should be deduplicated.', displayOptions: { show: { endpoint: [ 'GetAllModelsByEntityIdAndJourneyId' ], domain: [ 'FenergoNebulaDocumentManagementQueryv10' ] } } }
];

async function ExecuteFenergoNebulaDocumentManagementQueryv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let setId=''; let versionNumber=''; let id=''; let dealId=''; let journeyId=''; let requirementId=''; let documentDataKey=''; let entityId=''; let providerId=''; let productId='';
switch(endpoint){ case 'GetAcceptableDocumentById': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/acceptabledocument/set/{setId}/version/{versionNumber}/acceptableDocument/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'GetLatestAcceptableDocuments': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/acceptabledocument';

break;
case 'GetDefaultAcceptableDocumentSet': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/acceptabledocument/set';

break;
case 'GetAcceptableDocumentSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/acceptabledocument/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'GetAllDealDocumentsByDealId': dealId = base.getNodeParameter('dealId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentmanagement/deal/{dealId}'.replace('{dealId}', dealId);

break;
case 'GetPagedDocumentsByDealId': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentmanagement/deal/paged';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAllModelsByDealIdAndJourneyId': dealId = base.getNodeParameter('dealId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentmanagement/deal/{dealId}/journey/{journeyId}'.replace('{dealId}', dealId).replace('{journeyId}', journeyId);

break;
case 'GetDealDocumentModelById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentmanagement/{id}'.replace('{id}', id);

break;
case 'GetAllDealDocumentsByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentmanagement/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetSignedUrlForDealDocument': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentmanagement/signedurl/{id}'.replace('{id}', id);

break;
case 'GetMimeTypesAllowedForDeal': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentmanagement/mimeTypesAllowed';

break;
case 'GetAllDealRequirementModelsByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentrequirement/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetDealDocumentRequirementModelByJourneyIdAndRequirementId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requirementId = base.getNodeParameter('requirementId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentrequirement/{journeyId}/{requirementId}'.replace('{journeyId}', journeyId).replace('{requirementId}', requirementId);

break;
case 'GetDealDocumentRequirementModelByJourneyIdandDocumentDataKey': journeyId = base.getNodeParameter('journeyId', 0) as string;
documentDataKey = base.getNodeParameter('documentDataKey', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentrequirement/journey/{journeyId}/dataKey/{documentDataKey}'.replace('{journeyId}', journeyId).replace('{documentDataKey}', documentDataKey);

break;
case 'GetAllRequirementModelsByDealIdAndJourneyId': dealId = base.getNodeParameter('dealId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentrequirement/deal/{dealId}/journey/{journeyId}'.replace('{dealId}', dealId).replace('{journeyId}', journeyId);

break;
case 'GetAllRequirementModelsByDealId': dealId = base.getNodeParameter('dealId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/deal/documentrequirement/deal/{dealId}'.replace('{dealId}', dealId);

break;
case 'GetDocumentAssignmentById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentassignment/{id}'.replace('{id}', id);

break;
case 'GetAllDocumentAssignmentByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentassignment/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetDocumentModelById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentmanagement/{id}'.replace('{id}', id);

break;
case 'GetAllDocumentsByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentmanagement/journey/{journeyId}'.replace('{journeyId}', journeyId);
requestOptions.qs = { deduplicationEnabled: base.getNodeParameter('deduplicationEnabled', 0) as string };
break;
case 'GetAllDocumentsByEntityId': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentmanagement/entity/{entityId}'.replace('{entityId}', entityId);
requestOptions.qs = { deduplicationEnabled: base.getNodeParameter('deduplicationEnabled', 0) as string };
break;
case 'GetPagedDocumentsByEntityId': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentmanagement/entity/paged';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAllModelsByEntityIdAndJourneyId': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentmanagement/entity/{entityId}/journey/{journeyId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId);
requestOptions.qs = { deduplicationEnabled: base.getNodeParameter('deduplicationEnabled', 0) as string };
break;
case 'GetSignedUrl': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentmanagement/signedurl/{id}'.replace('{id}', id);

break;
case 'Getallsupportedmimetypeswhenuploadingafileinthedocumentrequirements.': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentmanagement/mimeTypesAllowed';

break;
case 'GetAllRequirementModelsByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentrequirement/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetDocumentRequirementModelById': journeyId = base.getNodeParameter('journeyId', 0) as string;
requirementId = base.getNodeParameter('requirementId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentrequirement/{journeyId}/{requirementId}'.replace('{journeyId}', journeyId).replace('{requirementId}', requirementId);

break;
case 'GetAllRequirementModelsByEntityIdAndJourneyId': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentrequirement/entity/{entityId}/journey/{journeyId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId);

break;
case 'GetAllRequirementModelsByEntityId': entityId = base.getNodeParameter('entityId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentrequirement/entity/{entityId}'.replace('{entityId}', entityId);

break;
case 'GetDocumentRequirementModelByJourneyIdandDocumentDataKey': journeyId = base.getNodeParameter('journeyId', 0) as string;
documentDataKey = base.getNodeParameter('documentDataKey', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentrequirement/journey/{journeyId}/dataKey/{documentDataKey}'.replace('{journeyId}', journeyId).replace('{documentDataKey}', documentDataKey);

break;
case 'GetDocumentRequirementMetadataById': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}/documentRequirementMetadata/{id}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber).replace('{id}', id);

break;
case 'GetLatestDocumentRequirementMetadata': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentrequirementmetadata';

break;
case 'GetDefaultDocumentRequirementMetadataSet': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentrequirementmetadata/set';

break;
case 'GetDocumentRequirementMetadataSetVersion': setId = base.getNodeParameter('setId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/documentrequirementmetadata/set/{setId}/version/{versionNumber}'.replace('{setId}', setId).replace('{versionNumber}', versionNumber);

break;
case 'GetConfiguration': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/esignatureconfiguration';

break;
case 'GetProviderConfiguration': providerId = base.getNodeParameter('providerId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/esignatureconfiguration/provider/{providerId}'.replace('{providerId}', providerId);

break;
case 'GetAllESignatureRequirementModelsByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/esignaturedocumentrequirement/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetESignatureDocumentRequirementModelById': journeyId = base.getNodeParameter('journeyId', 0) as string;
requirementId = base.getNodeParameter('requirementId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/esignaturedocumentrequirement/{journeyId}/{requirementId}'.replace('{journeyId}', journeyId).replace('{requirementId}', requirementId);

break;
case 'GetAllESignatureRequirementModelsByEntityIdAndJourneyId': entityId = base.getNodeParameter('entityId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/esignaturedocumentrequirement/entity/{entityId}/journey/{journeyId}'.replace('{entityId}', entityId).replace('{journeyId}', journeyId);

break;
case 'GetESignatureDocumentRequirementModelByJourneyIdandDocumentDataKey': journeyId = base.getNodeParameter('journeyId', 0) as string;
documentDataKey = base.getNodeParameter('documentDataKey', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/esignaturedocumentrequirement/journey/{journeyId}/dataKey/{documentDataKey}'.replace('{journeyId}', journeyId).replace('{documentDataKey}', documentDataKey);

break;
case 'GetAllProductDocumentsByProductId': productId = base.getNodeParameter('productId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentmanagement/product/{productId}'.replace('{productId}', productId);

break;
case 'GetPagedDocumentsByProductId': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentmanagement/product/paged';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'GetAllModelsByProductIdAndJourneyId': productId = base.getNodeParameter('productId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentmanagement/product/{productId}/journey/{journeyId}'.replace('{productId}', productId).replace('{journeyId}', journeyId);

break;
case 'GetProductDocumentModelById': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentmanagement/{id}'.replace('{id}', id);

break;
case 'GetAllProductDocumentsByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentmanagement/journey/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetSignedUrlForProductDocument': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentmanagement/signedurl/{id}'.replace('{id}', id);

break;
case 'GetMimeTypesAllowedForProduct': 
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentmanagement/mimeTypesAllowed';

break;
case 'GetAllProductRequirementModelsByJourneyId': journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentrequirement/{journeyId}'.replace('{journeyId}', journeyId);

break;
case 'GetProductDocumentRequirementModelById': journeyId = base.getNodeParameter('journeyId', 0) as string;
requirementId = base.getNodeParameter('requirementId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentrequirement/{journeyId}/{requirementId}'.replace('{journeyId}', journeyId).replace('{requirementId}', requirementId);

break;
case 'GetProductDocumentRequirementModelByJourneyIdandDocumentDataKey': journeyId = base.getNodeParameter('journeyId', 0) as string;
documentDataKey = base.getNodeParameter('documentDataKey', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentrequirement/journey/{journeyId}/dataKey/{documentDataKey}'.replace('{journeyId}', journeyId).replace('{documentDataKey}', documentDataKey);

break;
case 'GetAllRequirementModelsByProductIdAndJourneyId': productId = base.getNodeParameter('productId', 0) as string;
journeyId = base.getNodeParameter('journeyId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentrequirement/product/{productId}/journey/{journeyId}'.replace('{productId}', productId).replace('{journeyId}', journeyId);

break;
case 'GetAllRequirementModelsByProductId': productId = base.getNodeParameter('productId', 0) as string;
requestOptions.method = 'GET';
requestOptions.uri = 'https://api.nar1.fenergox.com/documentmanagementquery/api/product/documentrequirement/product/{productId}'.replace('{productId}', productId);

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
    FenergoNebulaDocumentManagementQueryv10Properties,
    ExecuteFenergoNebulaDocumentManagementQueryv10
}
