import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaReviewCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create entity rule', value: 'CreateEntityRule' },{ name: 'Create entity rule version', value: 'CreateEntityRuleVersion' },{ name: 'Delete Entity Rule and all its versions', value: 'DeleteEntityRule' },{ name: 'Update Entity Rule version', value: 'UpdateEntityRuleVersion' },{ name: 'Delete Entity Rule version', value: 'DeleteEntityRuleVersion' },{ name: 'Clone Entity Rule version', value: 'CloneEntityRuleVersion' },{ name: 'Submit Entity Rule version for approval', value: 'SubmitEntityRuleVersion' },{ name: 'Sign Entity Rule version', value: 'SignEntityRuleVersion' },{ name: 'Archive Entity Rule version', value: 'ArchiveEntityRuleVersion' },{ name: 'Create Product Rule', value: 'CreateProductRule' },{ name: 'Create product rule version', value: 'CreateProductRuleVersion' },{ name: 'Delete Product Rule and all its versions', value: 'DeleteProductRule' },{ name: 'Update Product Rule version', value: 'UpdateProductRuleVersion' },{ name: 'Delete Product Rule version', value: 'DeleteProductRuleVersion' },{ name: 'Clone Product Rule version', value: 'CloneProductRuleVersion' },{ name: 'Submit Product Rule version for approval', value: 'SubmitProductRuleVersion' },{ name: 'Sign Product Rule version', value: 'SignProductRuleVersion' },{ name: 'Archive Product Rule version', value: 'ArchiveProductRuleVersion' },{ name: 'Creates a Review', value: 'CreateReview' },{ name: 'Update Review', value: 'UpdateReview' },{ name: 'Update part of an existing Review', value: 'PatchReview' },{ name: 'Delete Review', value: 'DeleteReview' },{ name: 'Triggers Review Journeys that are scheduled to be launched Today', value: 'TriggerReviewScheduler' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaReviewCommandv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity rule id', displayOptions: { show: { endpoint: [ 'CreateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'DeleteEntityRule' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule id', displayOptions: { show: { endpoint: [ 'UpdateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'DeleteEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'CloneEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to clone', displayOptions: { show: { endpoint: [ 'CloneEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'SubmitEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'SignEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'ArchiveEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product rule id', displayOptions: { show: { endpoint: [ 'CreateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'DeleteProductRule' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule id', displayOptions: { show: { endpoint: [ 'UpdateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'DeleteProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'CloneProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to clone', displayOptions: { show: { endpoint: [ 'CloneProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'SubmitProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'SignProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'ArchiveProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Review id', displayOptions: { show: { endpoint: [ 'UpdateReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Review id', displayOptions: { show: { endpoint: [ 'PatchReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Review id', displayOptions: { show: { endpoint: [ 'DeleteReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "ruleId": "ruleId", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ] } ], "entityReviewRequired": false, "additionalReviewTypes": [ "" ], "versionNumber": 0, "effectiveFrom": "2025-01-21T08:34:28.8609972+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8610213+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8610286+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8610317+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8610386+00:00" }, "hasProcessedRequest": false } ], "created": "2025-01-21T08:34:28.8610406+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateEntityRule' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "ruleId": "ruleId", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ] } ], "entityReviewRequired": false, "additionalReviewTypes": [ "" ], "versionNumber": 0, "effectiveFrom": "2025-01-21T08:34:28.8614260+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8614541+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8614690+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8614854+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8615060+00:00" }, "hasProcessedRequest": false } ], "created": "2025-01-21T08:34:28.8615119+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "version": -1, "id": "id", "ruleId": "ruleId", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ] } ], "entityReviewRequired": false, "additionalReviewTypes": [ "" ], "versionNumber": 0, "effectiveFrom": "2025-01-21T08:34:28.8619257+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8619555+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8619598+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8619685+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8619773+00:00" }, "hasProcessedRequest": false } ], "created": "2025-01-21T08:34:28.8619795+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloneEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8627636+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "productRuleId": "productRuleId", "id": "id", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ] } ], "versionNumber": 0, "effectiveFrom": "2025-01-21T08:34:28.8631847+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8632032+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8632131+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8632199+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8632234+00:00" }, "hasProcessedRequest": false } ], "created": "2025-01-21T08:34:28.8632287+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateProductRule' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "productRuleId": "productRuleId", "id": "id", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ] } ], "versionNumber": 0, "effectiveFrom": "2025-01-21T08:34:28.8635345+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8635567+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8635683+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8635829+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8635952+00:00" }, "hasProcessedRequest": false } ], "created": "2025-01-21T08:34:28.8635975+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "version": -1, "productRuleId": "productRuleId", "id": "id", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ], "valueField": { "dataSource": "dataSource", "field": "field" } } ] } ], "versionNumber": 0, "effectiveFrom": "2025-01-21T08:34:28.8640170+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8640328+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8640399+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8640456+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8640540+00:00" }, "hasProcessedRequest": false } ], "created": "2025-01-21T08:34:28.8640560+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloneProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2025-01-21T08:34:28.8647257+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "ruleId": "ruleId", "reviewType": "reviewType", "typeId": "typeId", "entityId": "entityId", "properties": {}, "calculatedDate": "2025-01-21T08:34:28.8650874+00:00", "offset": 0, "launchDate": "2025-01-21T08:34:28.8650903+00:00", "status": "status", "journeyType": "journeyType" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "ruleId": "ruleId", "entityId": "entityId", "properties": {}, "status": "status", "launchDate": "2025-01-21T08:34:28.8652324+00:00", "calculatedDate": "2025-01-21T08:34:28.8652339+00:00", "offset": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "launchDate": "2025-01-21T08:34:28.8653502+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'PatchReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } }
];

async function ExecuteFenergoNebulaReviewCommandv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    let entityRuleId=''; let versionNumber=''; let productRuleId=''; let id='';
switch(endpoint){ case 'CreateEntityRule': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/entity-rule';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}'.replace('{entityRuleId}', entityRuleId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteEntityRule': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}'.replace('{entityRuleId}', entityRuleId);

break;
case 'UpdateEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

break;
case 'CloneEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}/clone'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SubmitEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}/submit-for-approval'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

break;
case 'SignEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}/sign'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}/archive'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

break;
case 'CreateProductRule': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/product-rule';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/product-rule/{productRuleId}'.replace('{productRuleId}', productRuleId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteProductRule': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/product-rule/{productRuleId}'.replace('{productRuleId}', productRuleId);

break;
case 'UpdateProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

break;
case 'CloneProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}/clone'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SubmitProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}/submit-for-approval'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

break;
case 'SignProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}/sign'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}/archive'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

break;
case 'CreateReview': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/review';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateReview': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/review/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'PatchReview': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PATCH';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/review/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteReview': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/review/{id}'.replace('{id}', id);

break;
case 'TriggerReviewScheduler': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/reviewcommand/api/review/trigger';

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
    FenergoNebulaReviewCommandv10Properties,
    ExecuteFenergoNebulaReviewCommandv10
}
