import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXEMEA1B.node';

let FenergoNebulaReviewCommandv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: 'Create entity rule', value: 'CreateEntityRule' },{ name: 'Create entity rule version', value: 'CreateEntityRuleVersion' },{ name: 'Delete Entity Rule and all its versions', value: 'DeleteEntityRule' },{ name: 'Update Entity Rule version', value: 'UpdateEntityRuleVersion' },{ name: 'Delete Entity Rule version', value: 'DeleteEntityRuleVersion' },{ name: 'Clone Entity Rule version', value: 'CloneEntityRuleVersion' },{ name: 'Submit Entity Rule version for approval', value: 'SubmitEntityRuleVersion' },{ name: 'Sign Entity Rule version', value: 'SignEntityRuleVersion' },{ name: 'Archive Entity Rule version', value: 'ArchiveEntityRuleVersion' },{ name: 'Create Product Rule', value: 'CreateProductRule' },{ name: 'Create product rule version', value: 'CreateProductRuleVersion' },{ name: 'Delete Product Rule and all its versions', value: 'DeleteProductRule' },{ name: 'Update Product Rule version', value: 'UpdateProductRuleVersion' },{ name: 'Delete Product Rule version', value: 'DeleteProductRuleVersion' },{ name: 'Clone Product Rule version', value: 'CloneProductRuleVersion' },{ name: 'Submit Product Rule version for approval', value: 'SubmitProductRuleVersion' },{ name: 'Sign Product Rule version', value: 'SignProductRuleVersion' },{ name: 'Archive Product Rule version', value: 'ArchiveProductRuleVersion' },{ name: 'Creates a Review', value: 'CreateReview' },{ name: 'Update review', value: 'UpdateReview' },{ name: 'Delete Review', value: 'DeleteReview' },{ name: 'Triggers Review Journeys that are scheduled to be launched Today', value: 'TriggerReviewScheduler' }
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
    }, { displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity rule id', displayOptions: { show: { endpoint: [ 'CreateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'DeleteEntityRule' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule id', displayOptions: { show: { endpoint: [ 'UpdateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'DeleteEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'CloneEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to clone', displayOptions: { show: { endpoint: [ 'CloneEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'SubmitEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'SignEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'entityRuleId', name: 'entityRuleId', type: 'string', required: true, default: '', description: 'Entity Rule Id', displayOptions: { show: { endpoint: [ 'ArchiveEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product rule id', displayOptions: { show: { endpoint: [ 'CreateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'DeleteProductRule' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule id', displayOptions: { show: { endpoint: [ 'UpdateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to update', displayOptions: { show: { endpoint: [ 'UpdateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'DeleteProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to delete', displayOptions: { show: { endpoint: [ 'DeleteProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'CloneProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to clone', displayOptions: { show: { endpoint: [ 'CloneProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'SubmitProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to submit', displayOptions: { show: { endpoint: [ 'SubmitProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'SignProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to sign', displayOptions: { show: { endpoint: [ 'SignProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'productRuleId', name: 'productRuleId', type: 'string', required: true, default: '', description: 'Product Rule Id', displayOptions: { show: { endpoint: [ 'ArchiveProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'versionNumber', name: 'versionNumber', type: 'string', required: true, default: '', description: 'Version number to archive', displayOptions: { show: { endpoint: [ 'ArchiveProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Review id', displayOptions: { show: { endpoint: [ 'UpdateReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'id', name: 'id', type: 'string', required: true, default: '', description: 'Review id', displayOptions: { show: { endpoint: [ 'DeleteReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "ruleId": "ruleId", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ], "entityReviewRequired": false, "additionalReviewTypes": [ "" ], "versionNumber": 0, "effectiveFrom": "2024-10-07T14:16:03.9390034+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9390474+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9390552+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9390591+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9390665+00:00" }, "hasProcessedRequest": false } ], "created": "2024-10-07T14:16:03.9390708+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateEntityRule' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "ruleId": "ruleId", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ], "entityReviewRequired": false, "additionalReviewTypes": [ "" ], "versionNumber": 0, "effectiveFrom": "2024-10-07T14:16:03.9391661+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9391843+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9391884+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9391926+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9391967+00:00" }, "hasProcessedRequest": false } ], "created": "2024-10-07T14:16:03.9391986+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "version": -1, "id": "id", "ruleId": "ruleId", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ], "entityReviewRequired": false, "additionalReviewTypes": [ "" ], "versionNumber": 0, "effectiveFrom": "2024-10-07T14:16:03.9393020+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9393271+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9393351+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9393428+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9393495+00:00" }, "hasProcessedRequest": false } ], "created": "2024-10-07T14:16:03.9393543+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloneEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9394541+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignEntityRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "productRuleId": "productRuleId", "id": "id", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ], "versionNumber": 0, "effectiveFrom": "2024-10-07T14:16:03.9395649+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9395911+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9396004+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9396074+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9396173+00:00" }, "hasProcessedRequest": false } ], "created": "2024-10-07T14:16:03.9396208+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateProductRule' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "productRuleId": "productRuleId", "id": "id", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ], "versionNumber": 0, "effectiveFrom": "2024-10-07T14:16:03.9397291+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9397410+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9397467+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9397510+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9397546+00:00" }, "hasProcessedRequest": false } ], "created": "2024-10-07T14:16:03.9397581+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "version": -1, "productRuleId": "productRuleId", "id": "id", "name": "name", "description": "description", "journeyType": "journeyType", "launchJourneyIn": 0, "advanceLaunchBy": 0, "conditions": [ { "id": "id", "name": "name", "description": "description", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [ { "fieldName": "fieldName", "value": [ "" ], "valueId": [ "" ], "valueType": "valueType", "dataSource": "dataSource", "operation": "operation", "logicalOperation": "logicalOperation", "operands": [] } ] } ] } ] } ], "versionNumber": 0, "effectiveFrom": "2024-10-07T14:16:03.9399020+00:00", "signees": [ { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": { "subject": "subject", "successor": null, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9399195+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9399261+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9399336+00:00" }, "hasProcessedRequest": false }, "action": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9399410+00:00" }, "hasProcessedRequest": false } ], "created": "2024-10-07T14:16:03.9399444+00:00", "status": "Draft" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "name": "name" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CloneProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "comment": "comment", "decision": "Approve", "created": "2024-10-07T14:16:03.9400305+00:00" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'SignProductRuleVersion' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "ruleId": "ruleId", "reviewType": "reviewType", "typeId": "typeId", "entityId": "entityId", "properties": {}, "calculatedDate": "2024-10-07T14:16:03.9400738+00:00", "offset": 0, "launchDate": "2024-10-07T14:16:03.9400769+00:00", "status": "status", "journeyType": "journeyType" } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'CreateReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "data": { "id": "id", "ruleId": "ruleId", "entityId": "entityId", "properties": {}, "status": "status", "launchDate": "2024-10-07T14:16:03.9401594+00:00", "calculatedDate": "2024-10-07T14:16:03.9401621+00:00", "offset": 0 } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'UpdateReview' ], domain: [ 'FenergoNebulaReviewCommandv10' ] } } }
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
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/entity-rule';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}'.replace('{entityRuleId}', entityRuleId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteEntityRule': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}'.replace('{entityRuleId}', entityRuleId);

break;
case 'UpdateEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

break;
case 'CloneEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}/clone'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SubmitEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}/submit-for-approval'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

break;
case 'SignEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}/sign'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveEntityRuleVersion': entityRuleId = base.getNodeParameter('entityRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/entity-rule/{entityRuleId}/version/{versionNumber}/archive'.replace('{entityRuleId}', entityRuleId).replace('{versionNumber}', versionNumber);

break;
case 'CreateProductRule': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/product-rule';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'CreateProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/product-rule/{productRuleId}'.replace('{productRuleId}', productRuleId);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteProductRule': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/product-rule/{productRuleId}'.replace('{productRuleId}', productRuleId);

break;
case 'UpdateProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

break;
case 'CloneProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}/clone'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'SubmitProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}/submit-for-approval'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

break;
case 'SignProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}/sign'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ArchiveProductRuleVersion': productRuleId = base.getNodeParameter('productRuleId', 0) as string;
versionNumber = base.getNodeParameter('versionNumber', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/product-rule/{productRuleId}/version/{versionNumber}/archive'.replace('{productRuleId}', productRuleId).replace('{versionNumber}', versionNumber);

break;
case 'CreateReview': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/review';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'UpdateReview': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'PUT';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/review/{id}'.replace('{id}', id);

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'DeleteReview': id = base.getNodeParameter('id', 0) as string;
requestOptions.method = 'DELETE';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/review/{id}'.replace('{id}', id);

break;
case 'TriggerReviewScheduler': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.emea1b.fenergox.com/reviewcommand/api/review/trigger';

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
