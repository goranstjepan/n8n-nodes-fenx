import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	INodeProperties,
	NodeApiError
} from 'n8n-workflow';

import {
	OptionsWithUri,
} from 'request';

import { FenergoNebulaAssociationCommandv20Properties, ExecuteFenergoNebulaAssociationCommandv20 } from './FenX.FenergoNebulaAssociationCommandv20';
import { FenergoNebulaAssociationCommandv10Properties, ExecuteFenergoNebulaAssociationCommandv10 } from './FenX.FenergoNebulaAssociationCommandv10';
import { FenergoNebulaAssociationQueryv10Properties, ExecuteFenergoNebulaAssociationQueryv10 } from './FenX.FenergoNebulaAssociationQueryv10';
import { FenergoNebulaAuditQueryv20Properties, ExecuteFenergoNebulaAuditQueryv20 } from './FenX.FenergoNebulaAuditQueryv20';
import { FenergoNebulaAuditQueryv30Properties, ExecuteFenergoNebulaAuditQueryv30 } from './FenX.FenergoNebulaAuditQueryv30';
import { FenergoNebulaAuditQueryv10Properties, ExecuteFenergoNebulaAuditQueryv10 } from './FenX.FenergoNebulaAuditQueryv10';
import { FenergoNebulaAuthorizationCommandv10Properties, ExecuteFenergoNebulaAuthorizationCommandv10 } from './FenX.FenergoNebulaAuthorizationCommandv10';
import { FenergoNebulaAuthorizationQueryv10Properties, ExecuteFenergoNebulaAuthorizationQueryv10 } from './FenX.FenergoNebulaAuthorizationQueryv10';
import { FenergoNebulaBulkLoadCommandv10Properties, ExecuteFenergoNebulaBulkLoadCommandv10 } from './FenX.FenergoNebulaBulkLoadCommandv10';
import { FenergoNebulaBulkLoadQueryv10Properties, ExecuteFenergoNebulaBulkLoadQueryv10 } from './FenX.FenergoNebulaBulkLoadQueryv10';
import { FenergoNebulaBusinessMetricsCommandv10Properties, ExecuteFenergoNebulaBusinessMetricsCommandv10 } from './FenX.FenergoNebulaBusinessMetricsCommandv10';
import { FenergoNebulaBusinessMetricsQueryv10Properties, ExecuteFenergoNebulaBusinessMetricsQueryv10 } from './FenX.FenergoNebulaBusinessMetricsQueryv10';
import { FenergoNebulaCollateralCommandv10Properties, ExecuteFenergoNebulaCollateralCommandv10 } from './FenX.FenergoNebulaCollateralCommandv10';
import { FenergoNebulaCollateralQueryv10Properties, ExecuteFenergoNebulaCollateralQueryv10 } from './FenX.FenergoNebulaCollateralQueryv10';
import { FenergoNebulaCovenantsConditionsQueryAPIv10Properties, ExecuteFenergoNebulaCovenantsConditionsQueryAPIv10 } from './FenX.FenergoNebulaCovenantsConditionsQueryAPIv10';
import { FenergoNebulaConfigurationExchangeCommandv10Properties, ExecuteFenergoNebulaConfigurationExchangeCommandv10 } from './FenX.FenergoNebulaConfigurationExchangeCommandv10';
import { FenergoNebulaConfigurationExchangeQueryv10Properties, ExecuteFenergoNebulaConfigurationExchangeQueryv10 } from './FenX.FenergoNebulaConfigurationExchangeQueryv10';
import { FenergoNebulaConfigBaselineCommandv10Properties, ExecuteFenergoNebulaConfigBaselineCommandv10 } from './FenX.FenergoNebulaConfigBaselineCommandv10';
import { FenergoNebulaConfigBaselineQueryv10Properties, ExecuteFenergoNebulaConfigBaselineQueryv10 } from './FenX.FenergoNebulaConfigBaselineQueryv10';
import { FenergoNebulaCovenantsConditionsCommandAPIv10Properties, ExecuteFenergoNebulaCovenantsConditionsCommandAPIv10 } from './FenX.FenergoNebulaCovenantsConditionsCommandAPIv10';
import { FenergoNebulaCovenantsConditionsQueryAPIv10Properties, ExecuteFenergoNebulaCovenantsConditionsQueryAPIv10 } from './FenX.FenergoNebulaCovenantsConditionsQueryAPIv10';
import { FenergoNebulaCreditAssessmentCommandv10Properties, ExecuteFenergoNebulaCreditAssessmentCommandv10 } from './FenX.FenergoNebulaCreditAssessmentCommandv10';
import { FenergoNebulaCreditAssessmentQueryv10Properties, ExecuteFenergoNebulaCreditAssessmentQueryv10 } from './FenX.FenergoNebulaCreditAssessmentQueryv10';
import { FenergoNebulaCreditScreeningCommandv10Properties, ExecuteFenergoNebulaCreditScreeningCommandv10 } from './FenX.FenergoNebulaCreditScreeningCommandv10';
import { FenergoNebulaCreditScreeningQueryv10Properties, ExecuteFenergoNebulaCreditScreeningQueryv10 } from './FenX.FenergoNebulaCreditScreeningQueryv10';
import { FenergoNebulaAdapterReceptorv10Properties, ExecuteFenergoNebulaAdapterReceptorv10 } from './FenX.FenergoNebulaAdapterReceptorv10';
import { FenergoNebulaDashboardsCommandv100Properties, ExecuteFenergoNebulaDashboardsCommandv100 } from './FenX.FenergoNebulaDashboardsCommandv100';
import { FenergoNebulaDashboardsQueryv100Properties, ExecuteFenergoNebulaDashboardsQueryv100 } from './FenX.FenergoNebulaDashboardsQueryv100';
import { FenergoNebulaDataMigrationCommandv10Properties, ExecuteFenergoNebulaDataMigrationCommandv10 } from './FenX.FenergoNebulaDataMigrationCommandv10';
import { FenergoNebulaDataMigrationCommandv10Properties, ExecuteFenergoNebulaDataMigrationCommandv10 } from './FenX.FenergoNebulaDataMigrationCommandv10';
import { FenergoNebulaDataMigrationQueryv10Properties, ExecuteFenergoNebulaDataMigrationQueryv10 } from './FenX.FenergoNebulaDataMigrationQueryv10';
import { FenergoNebulaDataProtectionCommandv10Properties, ExecuteFenergoNebulaDataProtectionCommandv10 } from './FenX.FenergoNebulaDataProtectionCommandv10';
import { FenergoNebulaDataProtectionQueryv10Properties, ExecuteFenergoNebulaDataProtectionQueryv10 } from './FenX.FenergoNebulaDataProtectionQueryv10';
import { FenergoNebulaDealsCommandv10Properties, ExecuteFenergoNebulaDealsCommandv10 } from './FenX.FenergoNebulaDealsCommandv10';
import { FenergoNebulaDealsQueryv10Properties, ExecuteFenergoNebulaDealsQueryv10 } from './FenX.FenergoNebulaDealsQueryv10';
import { FenergoNebulaDigitalIDVCommandv10Properties, ExecuteFenergoNebulaDigitalIDVCommandv10 } from './FenX.FenergoNebulaDigitalIDVCommandv10';
import { FenergoNebulaDigitalIDVQueryv10Properties, ExecuteFenergoNebulaDigitalIDVQueryv10 } from './FenX.FenergoNebulaDigitalIDVQueryv10';
import { FenergoNebulaDocumentManagementCommandv20Properties, ExecuteFenergoNebulaDocumentManagementCommandv20 } from './FenX.FenergoNebulaDocumentManagementCommandv20';
import { FenergoNebulaDocumentManagementCommandv10Properties, ExecuteFenergoNebulaDocumentManagementCommandv10 } from './FenX.FenergoNebulaDocumentManagementCommandv10';
import { FenergoNebulaDocumentManagementCommandv10Properties, ExecuteFenergoNebulaDocumentManagementCommandv10 } from './FenX.FenergoNebulaDocumentManagementCommandv10';
import { FenergoNebulaDocumentManagementCommandv20Properties, ExecuteFenergoNebulaDocumentManagementCommandv20 } from './FenX.FenergoNebulaDocumentManagementCommandv20';
import { FenergoNebulaDocumentManagementQueryv10Properties, ExecuteFenergoNebulaDocumentManagementQueryv10 } from './FenX.FenergoNebulaDocumentManagementQueryv10';
import { FenergoNebulaEntityDataCommandv10Properties, ExecuteFenergoNebulaEntityDataCommandv10 } from './FenX.FenergoNebulaEntityDataCommandv10';
import { FenergoNebulaEntityDataCommandv20Properties, ExecuteFenergoNebulaEntityDataCommandv20 } from './FenX.FenergoNebulaEntityDataCommandv20';
import { FenergoNebulaEntityDataCommandv30Properties, ExecuteFenergoNebulaEntityDataCommandv30 } from './FenX.FenergoNebulaEntityDataCommandv30';
import { FenergoNebulaEntityDataCommandv10Properties, ExecuteFenergoNebulaEntityDataCommandv10 } from './FenX.FenergoNebulaEntityDataCommandv10';
import { FenergoNebulaEntityDataQueryv10Properties, ExecuteFenergoNebulaEntityDataQueryv10 } from './FenX.FenergoNebulaEntityDataQueryv10';
import { FenergoNebulaEntityDataQueryv20Properties, ExecuteFenergoNebulaEntityDataQueryv20 } from './FenX.FenergoNebulaEntityDataQueryv20';
import { FenergoNebulaEntityDataQueryv10Properties, ExecuteFenergoNebulaEntityDataQueryv10 } from './FenX.FenergoNebulaEntityDataQueryv10';
import { FenergoNebulaEventIngressv10Properties, ExecuteFenergoNebulaEventIngressv10 } from './FenX.FenergoNebulaEventIngressv10';
import { EventNotificationsPollingv20Properties, ExecuteEventNotificationsPollingv20 } from './FenX.EventNotificationsPollingv20';
import { EventNotificationsPollingv10Properties, ExecuteEventNotificationsPollingv10 } from './FenX.EventNotificationsPollingv10';
import { EventNotificationsWebhooksv10Properties, ExecuteEventNotificationsWebhooksv10 } from './FenX.EventNotificationsWebhooksv10';
import { FenergoNebulaExternalAuthenticationCommandv10Properties, ExecuteFenergoNebulaExternalAuthenticationCommandv10 } from './FenX.FenergoNebulaExternalAuthenticationCommandv10';
import { FenergoNebulaExternalAuthenticationQueryv10Properties, ExecuteFenergoNebulaExternalAuthenticationQueryv10 } from './FenX.FenergoNebulaExternalAuthenticationQueryv10';
import { FenergoNebulaExternalDataBFFv10Properties, ExecuteFenergoNebulaExternalDataBFFv10 } from './FenX.FenergoNebulaExternalDataBFFv10';
import { FenergoNebulaExternalDataCommandv10Properties, ExecuteFenergoNebulaExternalDataCommandv10 } from './FenX.FenergoNebulaExternalDataCommandv10';
import { FenergoNebulaExternalDataOutreachCommandv20Properties, ExecuteFenergoNebulaExternalDataOutreachCommandv20 } from './FenX.FenergoNebulaExternalDataOutreachCommandv20';
import { FenergoNebulaExternalDataOutreachCommandv10Properties, ExecuteFenergoNebulaExternalDataOutreachCommandv10 } from './FenX.FenergoNebulaExternalDataOutreachCommandv10';
import { FenergoExternalDataPortalOutreachQueryv10Properties, ExecuteFenergoExternalDataPortalOutreachQueryv10 } from './FenX.FenergoExternalDataPortalOutreachQueryv10';
import { FenergoNebulaExternalDataQueryv10Properties, ExecuteFenergoNebulaExternalDataQueryv10 } from './FenX.FenergoNebulaExternalDataQueryv10';
import { FenergoNebulaExternalDataAdapterReceptorv10Properties, ExecuteFenergoNebulaExternalDataAdapterReceptorv10 } from './FenX.FenergoNebulaExternalDataAdapterReceptorv10';
import { FenergoFinancialAnalysisCommandAPIv10Properties, ExecuteFenergoFinancialAnalysisCommandAPIv10 } from './FenX.FenergoFinancialAnalysisCommandAPIv10';
import { FenergoFinancialAnalysisQueryAPIv10Properties, ExecuteFenergoFinancialAnalysisQueryAPIv10 } from './FenX.FenergoFinancialAnalysisQueryAPIv10';
import { FenergoNebulaFinancialAnalysisImportAdapterReceptorv10Properties, ExecuteFenergoNebulaFinancialAnalysisImportAdapterReceptorv10 } from './FenX.FenergoNebulaFinancialAnalysisImportAdapterReceptorv10';
import { FenergoNebulaIdentitySelfServiceManagementCommandv10Properties, ExecuteFenergoNebulaIdentitySelfServiceManagementCommandv10 } from './FenX.FenergoNebulaIdentitySelfServiceManagementCommandv10';
import { FenergoNebulaIdentitySelfServiceManagementQueryv10Properties, ExecuteFenergoNebulaIdentitySelfServiceManagementQueryv10 } from './FenX.FenergoNebulaIdentitySelfServiceManagementQueryv10';
import { FenergoNebulaJourneyCommandv10Properties, ExecuteFenergoNebulaJourneyCommandv10 } from './FenX.FenergoNebulaJourneyCommandv10';
import { FenergoNebulaJourneyLogicEnginev20Properties, ExecuteFenergoNebulaJourneyLogicEnginev20 } from './FenX.FenergoNebulaJourneyLogicEnginev20';
import { FenergoNebulaJourneyLogicEnginev10Properties, ExecuteFenergoNebulaJourneyLogicEnginev10 } from './FenX.FenergoNebulaJourneyLogicEnginev10';
import { FenergoNebulaJourneyQueryv10Properties, ExecuteFenergoNebulaJourneyQueryv10 } from './FenX.FenergoNebulaJourneyQueryv10';
import { FenergoNebulaLocalisationCommandv10Properties, ExecuteFenergoNebulaLocalisationCommandv10 } from './FenX.FenergoNebulaLocalisationCommandv10';
import { FenergoNebulaLocalisationQueryv10Properties, ExecuteFenergoNebulaLocalisationQueryv10 } from './FenX.FenergoNebulaLocalisationQueryv10';
import { FenergoNebulaLookupCommandv10Properties, ExecuteFenergoNebulaLookupCommandv10 } from './FenX.FenergoNebulaLookupCommandv10';
import { FenergoNebulaLookupQueryv10Properties, ExecuteFenergoNebulaLookupQueryv10 } from './FenX.FenergoNebulaLookupQueryv10';
import { FenergoNebulaNarrativeCommandv10Properties, ExecuteFenergoNebulaNarrativeCommandv10 } from './FenX.FenergoNebulaNarrativeCommandv10';
import { FenergoNebulaNarrativeQueryv10Properties, ExecuteFenergoNebulaNarrativeQueryv10 } from './FenX.FenergoNebulaNarrativeQueryv10';
import { FenergoNebulaNewRequestv10Properties, ExecuteFenergoNebulaNewRequestv10 } from './FenX.FenergoNebulaNewRequestv10';
import { FenergoNebulaOutreachCommandv10Properties, ExecuteFenergoNebulaOutreachCommandv10 } from './FenX.FenergoNebulaOutreachCommandv10';
import { FenergoNebulaOutreachQueryv10Properties, ExecuteFenergoNebulaOutreachQueryv10 } from './FenX.FenergoNebulaOutreachQueryv10';
import { FenergoNebulaPolicyCommandv10Properties, ExecuteFenergoNebulaPolicyCommandv10 } from './FenX.FenergoNebulaPolicyCommandv10';
import { FenergoNebulaPolicyLogicEnginev20Properties, ExecuteFenergoNebulaPolicyLogicEnginev20 } from './FenX.FenergoNebulaPolicyLogicEnginev20';
import { FenergoNebulaPolicyLogicEnginev30Properties, ExecuteFenergoNebulaPolicyLogicEnginev30 } from './FenX.FenergoNebulaPolicyLogicEnginev30';
import { FenergoNebulaPolicyLogicEnginev10Properties, ExecuteFenergoNebulaPolicyLogicEnginev10 } from './FenX.FenergoNebulaPolicyLogicEnginev10';
import { FenergoNebulaPolicyLogicEnginev20Properties, ExecuteFenergoNebulaPolicyLogicEnginev20 } from './FenX.FenergoNebulaPolicyLogicEnginev20';
import { FenergoNebulaPolicyLogicEnginev30Properties, ExecuteFenergoNebulaPolicyLogicEnginev30 } from './FenX.FenergoNebulaPolicyLogicEnginev30';
import { FenergoNebulaPolicyLogicEnginev10Properties, ExecuteFenergoNebulaPolicyLogicEnginev10 } from './FenX.FenergoNebulaPolicyLogicEnginev10';
import { FenergoNebulaPolicyProvidersCommandv10Properties, ExecuteFenergoNebulaPolicyProvidersCommandv10 } from './FenX.FenergoNebulaPolicyProvidersCommandv10';
import { FenergoNebulaPolicyProvidersQueryv10Properties, ExecuteFenergoNebulaPolicyProvidersQueryv10 } from './FenX.FenergoNebulaPolicyProvidersQueryv10';
import { FenergoNebulaPolicyQueryv20Properties, ExecuteFenergoNebulaPolicyQueryv20 } from './FenX.FenergoNebulaPolicyQueryv20';
import { FenergoNebulaPolicyQueryv30Properties, ExecuteFenergoNebulaPolicyQueryv30 } from './FenX.FenergoNebulaPolicyQueryv30';
import { FenergoNebulaPolicyQueryv10Properties, ExecuteFenergoNebulaPolicyQueryv10 } from './FenX.FenergoNebulaPolicyQueryv10';
import { FenergoNebulaPortalTenantCommandv40Properties, ExecuteFenergoNebulaPortalTenantCommandv40 } from './FenX.FenergoNebulaPortalTenantCommandv40';
import { FenergoNebulaPortalTenantQueryv40Properties, ExecuteFenergoNebulaPortalTenantQueryv40 } from './FenX.FenergoNebulaPortalTenantQueryv40';
import { FenergoNebulaProductCommandv10Properties, ExecuteFenergoNebulaProductCommandv10 } from './FenX.FenergoNebulaProductCommandv10';
import { FenergoNebulaProductPolicyCommandv10Properties, ExecuteFenergoNebulaProductPolicyCommandv10 } from './FenX.FenergoNebulaProductPolicyCommandv10';
import { FenergoNebulaProductPolicyLogicEnginev10Properties, ExecuteFenergoNebulaProductPolicyLogicEnginev10 } from './FenX.FenergoNebulaProductPolicyLogicEnginev10';
import { FenergoNebulaProductPolicyQueryv10Properties, ExecuteFenergoNebulaProductPolicyQueryv10 } from './FenX.FenergoNebulaProductPolicyQueryv10';
import { FenergoNebulaProductQueryv10Properties, ExecuteFenergoNebulaProductQueryv10 } from './FenX.FenergoNebulaProductQueryv10';
import { FenergoNebulaReportingQueryv100Properties, ExecuteFenergoNebulaReportingQueryv100 } from './FenX.FenergoNebulaReportingQueryv100';
import { FenergoNebulaReportsCommandv20Properties, ExecuteFenergoNebulaReportsCommandv20 } from './FenX.FenergoNebulaReportsCommandv20';
import { FenergoNebulaReportsCommandv10Properties, ExecuteFenergoNebulaReportsCommandv10 } from './FenX.FenergoNebulaReportsCommandv10';
import { FenergoNebulaReportsQueryv20Properties, ExecuteFenergoNebulaReportsQueryv20 } from './FenX.FenergoNebulaReportsQueryv20';
import { FenergoNebulaReportsQueryv10Properties, ExecuteFenergoNebulaReportsQueryv10 } from './FenX.FenergoNebulaReportsQueryv10';
import { FenergoNebulaReviewCommandv10Properties, ExecuteFenergoNebulaReviewCommandv10 } from './FenX.FenergoNebulaReviewCommandv10';
import { FenergoNebulaReviewQueryv10Properties, ExecuteFenergoNebulaReviewQueryv10 } from './FenX.FenergoNebulaReviewQueryv10';
import { FenergoNebulaRiskCommandv10Properties, ExecuteFenergoNebulaRiskCommandv10 } from './FenX.FenergoNebulaRiskCommandv10';
import { FenergoNebulaRiskQueryv10Properties, ExecuteFenergoNebulaRiskQueryv10 } from './FenX.FenergoNebulaRiskQueryv10';
import { FenergoNebulaScreeningMockAdapterv10Properties, ExecuteFenergoNebulaScreeningMockAdapterv10 } from './FenX.FenergoNebulaScreeningMockAdapterv10';
import { FenergoNebulaScreeningCommandv20Properties, ExecuteFenergoNebulaScreeningCommandv20 } from './FenX.FenergoNebulaScreeningCommandv20';
import { FenergoNebulaScreeningCommandv10Properties, ExecuteFenergoNebulaScreeningCommandv10 } from './FenX.FenergoNebulaScreeningCommandv10';
import { FenergoNebulaScreeningQueryv20Properties, ExecuteFenergoNebulaScreeningQueryv20 } from './FenX.FenergoNebulaScreeningQueryv20';
import { FenergoNebulaScreeningQueryv30Properties, ExecuteFenergoNebulaScreeningQueryv30 } from './FenX.FenergoNebulaScreeningQueryv30';
import { FenergoNebulaScreeningQueryv10Properties, ExecuteFenergoNebulaScreeningQueryv10 } from './FenX.FenergoNebulaScreeningQueryv10';
import { SupergraphProperties, ExecuteSupergraph } from './FenX.Supergraph';

let DefaultProperties: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'options',
		options: [
			{ name: 'Fenergo Nebula Association Command v2.0', value: 'FenergoNebulaAssociationCommandv20' },{ name: 'Fenergo Nebula Association Command v1.0', value: 'FenergoNebulaAssociationCommandv10' },{ name: 'Fenergo Nebula Association Query v1.0', value: 'FenergoNebulaAssociationQueryv10' },{ name: 'Fenergo Nebula Audit Query v2.0', value: 'FenergoNebulaAuditQueryv20' },{ name: 'Fenergo Nebula Audit Query v3.0', value: 'FenergoNebulaAuditQueryv30' },{ name: 'Fenergo Nebula Audit Query v1.0', value: 'FenergoNebulaAuditQueryv10' },{ name: 'Fenergo Nebula Authorization Command v1.0', value: 'FenergoNebulaAuthorizationCommandv10' },{ name: 'Fenergo Nebula Authorization Query v1.0', value: 'FenergoNebulaAuthorizationQueryv10' },{ name: 'Fenergo Nebula BulkLoad Command v1.0', value: 'FenergoNebulaBulkLoadCommandv10' },{ name: 'Fenergo Nebula BulkLoad Query v1.0', value: 'FenergoNebulaBulkLoadQueryv10' },{ name: 'Fenergo Nebula Business Metrics Command v1.0', value: 'FenergoNebulaBusinessMetricsCommandv10' },{ name: 'Fenergo Nebula Business Metrics Query v1.0', value: 'FenergoNebulaBusinessMetricsQueryv10' },{ name: 'Fenergo Nebula Collateral Command v1.0', value: 'FenergoNebulaCollateralCommandv10' },{ name: 'Fenergo Nebula Collateral Query v1.0', value: 'FenergoNebulaCollateralQueryv10' },{ name: 'Fenergo Nebula Covenants & Conditions Query API v1.0', value: 'FenergoNebulaCovenantsConditionsQueryAPIv10' },{ name: 'Fenergo Nebula Configuration Exchange Command v1.0', value: 'FenergoNebulaConfigurationExchangeCommandv10' },{ name: 'Fenergo Nebula Configuration Exchange Query v1.0', value: 'FenergoNebulaConfigurationExchangeQueryv10' },{ name: 'Fenergo Nebula ConfigBaseline Command v1.0', value: 'FenergoNebulaConfigBaselineCommandv10' },{ name: 'Fenergo Nebula ConfigBaseline Query v1.0', value: 'FenergoNebulaConfigBaselineQueryv10' },{ name: 'Fenergo Nebula Covenants & Conditions Command API v1.0', value: 'FenergoNebulaCovenantsConditionsCommandAPIv10' },{ name: 'Fenergo Nebula Covenants & Conditions Query API v1.0', value: 'FenergoNebulaCovenantsConditionsQueryAPIv10' },{ name: 'Fenergo Nebula CreditAssessment Command v1.0', value: 'FenergoNebulaCreditAssessmentCommandv10' },{ name: 'Fenergo Nebula CreditAssessment Query v1.0', value: 'FenergoNebulaCreditAssessmentQueryv10' },{ name: 'Fenergo Nebula CreditScreening Command v1.0', value: 'FenergoNebulaCreditScreeningCommandv10' },{ name: 'Fenergo Nebula CreditScreening Query v1.0', value: 'FenergoNebulaCreditScreeningQueryv10' },{ name: 'Fenergo Nebula Adapter Receptor v1.0', value: 'FenergoNebulaAdapterReceptorv10' },{ name: 'Fenergo Nebula Dashboards Command v1.0.0', value: 'FenergoNebulaDashboardsCommandv100' },{ name: 'Fenergo Nebula Dashboards Query v1.0.0', value: 'FenergoNebulaDashboardsQueryv100' },{ name: 'Fenergo Nebula Data Migration Command v1.0', value: 'FenergoNebulaDataMigrationCommandv10' },{ name: 'Fenergo Nebula Data Migration Command v1.0', value: 'FenergoNebulaDataMigrationCommandv10' },{ name: 'Fenergo Nebula Data Migration Query v1.0', value: 'FenergoNebulaDataMigrationQueryv10' },{ name: 'Fenergo Nebula Data Protection Command v1.0', value: 'FenergoNebulaDataProtectionCommandv10' },{ name: 'Fenergo Nebula Data Protection Query v1.0', value: 'FenergoNebulaDataProtectionQueryv10' },{ name: 'Fenergo Nebula Deals Command v1.0', value: 'FenergoNebulaDealsCommandv10' },{ name: 'Fenergo Nebula Deals Query v1.0', value: 'FenergoNebulaDealsQueryv10' },{ name: 'Fenergo Nebula Digital IDV Command v1.0', value: 'FenergoNebulaDigitalIDVCommandv10' },{ name: 'Fenergo Nebula Digital IDV Query v1.0', value: 'FenergoNebulaDigitalIDVQueryv10' },{ name: 'Fenergo Nebula Document Management Command v2.0', value: 'FenergoNebulaDocumentManagementCommandv20' },{ name: 'Fenergo Nebula Document Management Command v1.0', value: 'FenergoNebulaDocumentManagementCommandv10' },{ name: 'Fenergo Nebula Document Management Command v1.0', value: 'FenergoNebulaDocumentManagementCommandv10' },{ name: 'Fenergo Nebula Document Management Command v2.0', value: 'FenergoNebulaDocumentManagementCommandv20' },{ name: 'Fenergo Nebula Document Management Query v1.0', value: 'FenergoNebulaDocumentManagementQueryv10' },{ name: 'Fenergo Nebula EntityData Command v1.0', value: 'FenergoNebulaEntityDataCommandv10' },{ name: 'Fenergo Nebula EntityData Command v2.0', value: 'FenergoNebulaEntityDataCommandv20' },{ name: 'Fenergo Nebula EntityData Command v3.0', value: 'FenergoNebulaEntityDataCommandv30' },{ name: 'Fenergo Nebula EntityData Command v1.0', value: 'FenergoNebulaEntityDataCommandv10' },{ name: 'Fenergo Nebula EntityData Query v1.0', value: 'FenergoNebulaEntityDataQueryv10' },{ name: 'Fenergo Nebula EntityData Query v2.0', value: 'FenergoNebulaEntityDataQueryv20' },{ name: 'Fenergo Nebula EntityData Query v1.0', value: 'FenergoNebulaEntityDataQueryv10' },{ name: 'Fenergo Nebula Event Ingress v1.0', value: 'FenergoNebulaEventIngressv10' },{ name: 'Event Notifications Polling v2.0', value: 'EventNotificationsPollingv20' },{ name: 'Event Notifications Polling v1.0', value: 'EventNotificationsPollingv10' },{ name: 'Event Notifications Webhooks v1.0', value: 'EventNotificationsWebhooksv10' },{ name: 'Fenergo Nebula External Authentication Command v1.0', value: 'FenergoNebulaExternalAuthenticationCommandv10' },{ name: 'Fenergo Nebula External Authentication Query v1.0', value: 'FenergoNebulaExternalAuthenticationQueryv10' },{ name: 'Fenergo Nebula External Data BFF v1.0', value: 'FenergoNebulaExternalDataBFFv10' },{ name: 'Fenergo Nebula External Data Command v1.0', value: 'FenergoNebulaExternalDataCommandv10' },{ name: 'Fenergo Nebula External Data Outreach Command v2.0', value: 'FenergoNebulaExternalDataOutreachCommandv20' },{ name: 'Fenergo Nebula External Data Outreach Command v1.0', value: 'FenergoNebulaExternalDataOutreachCommandv10' },{ name: 'Fenergo External Data Portal Outreach Query v1.0', value: 'FenergoExternalDataPortalOutreachQueryv10' },{ name: 'Fenergo Nebula External Data Query v1.0', value: 'FenergoNebulaExternalDataQueryv10' },{ name: 'Fenergo Nebula External Data Adapter Receptor v1.0', value: 'FenergoNebulaExternalDataAdapterReceptorv10' },{ name: 'Fenergo Financial Analysis Command API v1.0', value: 'FenergoFinancialAnalysisCommandAPIv10' },{ name: 'Fenergo Financial Analysis Query API v1.0', value: 'FenergoFinancialAnalysisQueryAPIv10' },{ name: 'Fenergo Nebula Financial Analysis Import Adapter Receptor v1.0', value: 'FenergoNebulaFinancialAnalysisImportAdapterReceptorv10' },{ name: 'Fenergo Nebula Identity - Self-Service Management Command v1.0', value: 'FenergoNebulaIdentitySelfServiceManagementCommandv10' },{ name: 'Fenergo Nebula Identity - Self-Service Management Query v1.0', value: 'FenergoNebulaIdentitySelfServiceManagementQueryv10' },{ name: 'Fenergo Nebula Journey Command v1.0', value: 'FenergoNebulaJourneyCommandv10' },{ name: 'Fenergo Nebula Journey Logic Engine v2.0', value: 'FenergoNebulaJourneyLogicEnginev20' },{ name: 'Fenergo Nebula Journey Logic Engine v1.0', value: 'FenergoNebulaJourneyLogicEnginev10' },{ name: 'Fenergo Nebula Journey Query v1.0', value: 'FenergoNebulaJourneyQueryv10' },{ name: 'Fenergo Nebula Localisation Command v1.0', value: 'FenergoNebulaLocalisationCommandv10' },{ name: 'Fenergo Nebula Localisation Query v1.0', value: 'FenergoNebulaLocalisationQueryv10' },{ name: 'Fenergo Nebula Lookup Command v1.0', value: 'FenergoNebulaLookupCommandv10' },{ name: 'Fenergo Nebula Lookup Query v1.0', value: 'FenergoNebulaLookupQueryv10' },{ name: 'Fenergo Nebula Narrative Command v1.0', value: 'FenergoNebulaNarrativeCommandv10' },{ name: 'Fenergo Nebula Narrative Query v1.0', value: 'FenergoNebulaNarrativeQueryv10' },{ name: 'Fenergo Nebula New Request v1.0', value: 'FenergoNebulaNewRequestv10' },{ name: 'Fenergo Nebula Outreach Command v1.0', value: 'FenergoNebulaOutreachCommandv10' },{ name: 'Fenergo Nebula Outreach Query v1.0', value: 'FenergoNebulaOutreachQueryv10' },{ name: 'Fenergo Nebula Policy Command v1.0', value: 'FenergoNebulaPolicyCommandv10' },{ name: 'Fenergo Nebula Policy Logic Engine v2.0', value: 'FenergoNebulaPolicyLogicEnginev20' },{ name: 'Fenergo Nebula Policy Logic Engine v3.0', value: 'FenergoNebulaPolicyLogicEnginev30' },{ name: 'Fenergo Nebula Policy Logic Engine v1.0', value: 'FenergoNebulaPolicyLogicEnginev10' },{ name: 'Fenergo Nebula Policy Logic Engine v2.0', value: 'FenergoNebulaPolicyLogicEnginev20' },{ name: 'Fenergo Nebula Policy Logic Engine v3.0', value: 'FenergoNebulaPolicyLogicEnginev30' },{ name: 'Fenergo Nebula Policy Logic Engine v1.0', value: 'FenergoNebulaPolicyLogicEnginev10' },{ name: 'Fenergo Nebula Policy Providers Command v1.0', value: 'FenergoNebulaPolicyProvidersCommandv10' },{ name: 'Fenergo Nebula Policy Providers Query v1.0', value: 'FenergoNebulaPolicyProvidersQueryv10' },{ name: 'Fenergo Nebula Policy Query v2.0', value: 'FenergoNebulaPolicyQueryv20' },{ name: 'Fenergo Nebula Policy Query v3.0', value: 'FenergoNebulaPolicyQueryv30' },{ name: 'Fenergo Nebula Policy Query v1.0', value: 'FenergoNebulaPolicyQueryv10' },{ name: 'Fenergo Nebula Portal Tenant Command v4.0', value: 'FenergoNebulaPortalTenantCommandv40' },{ name: 'Fenergo Nebula Portal Tenant Query v4.0', value: 'FenergoNebulaPortalTenantQueryv40' },{ name: 'Fenergo Nebula Product Command v1.0', value: 'FenergoNebulaProductCommandv10' },{ name: 'Fenergo Nebula Product Policy Command v1.0', value: 'FenergoNebulaProductPolicyCommandv10' },{ name: 'Fenergo Nebula Product Policy Logic Engine v1.0', value: 'FenergoNebulaProductPolicyLogicEnginev10' },{ name: 'Fenergo Nebula Product Policy Query v1.0', value: 'FenergoNebulaProductPolicyQueryv10' },{ name: 'Fenergo Nebula Product Query v1.0', value: 'FenergoNebulaProductQueryv10' },{ name: 'Fenergo Nebula Reporting Query v1.0.0', value: 'FenergoNebulaReportingQueryv100' },{ name: 'Fenergo Nebula Reports Command v2.0', value: 'FenergoNebulaReportsCommandv20' },{ name: 'Fenergo Nebula Reports Command v1.0', value: 'FenergoNebulaReportsCommandv10' },{ name: 'Fenergo Nebula Reports Query v2.0', value: 'FenergoNebulaReportsQueryv20' },{ name: 'Fenergo Nebula Reports Query v1.0', value: 'FenergoNebulaReportsQueryv10' },{ name: 'Fenergo Nebula Review Command v1.0', value: 'FenergoNebulaReviewCommandv10' },{ name: 'Fenergo Nebula Review Query v1.0', value: 'FenergoNebulaReviewQueryv10' },{ name: 'Fenergo Nebula Risk Command v1.0', value: 'FenergoNebulaRiskCommandv10' },{ name: 'Fenergo Nebula Risk Query v1.0', value: 'FenergoNebulaRiskQueryv10' },{ name: 'Fenergo Nebula Screening - Mock Adapter v1.0', value: 'FenergoNebulaScreeningMockAdapterv10' },{ name: 'Fenergo Nebula Screening Command v2.0', value: 'FenergoNebulaScreeningCommandv20' },{ name: 'Fenergo Nebula Screening Command v1.0', value: 'FenergoNebulaScreeningCommandv10' },{ name: 'Fenergo Nebula Screening Query v2.0', value: 'FenergoNebulaScreeningQueryv20' },{ name: 'Fenergo Nebula Screening Query v3.0', value: 'FenergoNebulaScreeningQueryv30' },{ name: 'Fenergo Nebula Screening Query v1.0', value: 'FenergoNebulaScreeningQueryv10' }
,{name: 'Supergraph', value: 'Supergraph'}
		],
		default: '',
		required: true,
		description: 'Domain from which to consume the APIs',
	}
];

export class FenX implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Fen-X ',
		name: 'fenX',
		icon: 'file:FenX.png',
		group: ['transform'],
		version: 1,
		description: 'Consume Fen-X APIs',
		defaults: {
			name: 'Fen-X ',
			color: '#1A82e2',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'fenX',
				required: true,
			}
		],
		properties: DefaultProperties
			.concat(FenergoNebulaAssociationCommandv20Properties)
.concat(FenergoNebulaAssociationCommandv10Properties)
.concat(FenergoNebulaAssociationQueryv10Properties)
.concat(FenergoNebulaAuditQueryv20Properties)
.concat(FenergoNebulaAuditQueryv30Properties)
.concat(FenergoNebulaAuditQueryv10Properties)
.concat(FenergoNebulaAuthorizationCommandv10Properties)
.concat(FenergoNebulaAuthorizationQueryv10Properties)
.concat(FenergoNebulaBulkLoadCommandv10Properties)
.concat(FenergoNebulaBulkLoadQueryv10Properties)
.concat(FenergoNebulaBusinessMetricsCommandv10Properties)
.concat(FenergoNebulaBusinessMetricsQueryv10Properties)
.concat(FenergoNebulaCollateralCommandv10Properties)
.concat(FenergoNebulaCollateralQueryv10Properties)
.concat(FenergoNebulaCovenantsConditionsQueryAPIv10Properties)
.concat(FenergoNebulaConfigurationExchangeCommandv10Properties)
.concat(FenergoNebulaConfigurationExchangeQueryv10Properties)
.concat(FenergoNebulaConfigBaselineCommandv10Properties)
.concat(FenergoNebulaConfigBaselineQueryv10Properties)
.concat(FenergoNebulaCovenantsConditionsCommandAPIv10Properties)
.concat(FenergoNebulaCovenantsConditionsQueryAPIv10Properties)
.concat(FenergoNebulaCreditAssessmentCommandv10Properties)
.concat(FenergoNebulaCreditAssessmentQueryv10Properties)
.concat(FenergoNebulaCreditScreeningCommandv10Properties)
.concat(FenergoNebulaCreditScreeningQueryv10Properties)
.concat(FenergoNebulaAdapterReceptorv10Properties)
.concat(FenergoNebulaDashboardsCommandv100Properties)
.concat(FenergoNebulaDashboardsQueryv100Properties)
.concat(FenergoNebulaDataMigrationCommandv10Properties)
.concat(FenergoNebulaDataMigrationCommandv10Properties)
.concat(FenergoNebulaDataMigrationQueryv10Properties)
.concat(FenergoNebulaDataProtectionCommandv10Properties)
.concat(FenergoNebulaDataProtectionQueryv10Properties)
.concat(FenergoNebulaDealsCommandv10Properties)
.concat(FenergoNebulaDealsQueryv10Properties)
.concat(FenergoNebulaDigitalIDVCommandv10Properties)
.concat(FenergoNebulaDigitalIDVQueryv10Properties)
.concat(FenergoNebulaDocumentManagementCommandv20Properties)
.concat(FenergoNebulaDocumentManagementCommandv10Properties)
.concat(FenergoNebulaDocumentManagementCommandv10Properties)
.concat(FenergoNebulaDocumentManagementCommandv20Properties)
.concat(FenergoNebulaDocumentManagementQueryv10Properties)
.concat(FenergoNebulaEntityDataCommandv10Properties)
.concat(FenergoNebulaEntityDataCommandv20Properties)
.concat(FenergoNebulaEntityDataCommandv30Properties)
.concat(FenergoNebulaEntityDataCommandv10Properties)
.concat(FenergoNebulaEntityDataQueryv10Properties)
.concat(FenergoNebulaEntityDataQueryv20Properties)
.concat(FenergoNebulaEntityDataQueryv10Properties)
.concat(FenergoNebulaEventIngressv10Properties)
.concat(EventNotificationsPollingv20Properties)
.concat(EventNotificationsPollingv10Properties)
.concat(EventNotificationsWebhooksv10Properties)
.concat(FenergoNebulaExternalAuthenticationCommandv10Properties)
.concat(FenergoNebulaExternalAuthenticationQueryv10Properties)
.concat(FenergoNebulaExternalDataBFFv10Properties)
.concat(FenergoNebulaExternalDataCommandv10Properties)
.concat(FenergoNebulaExternalDataOutreachCommandv20Properties)
.concat(FenergoNebulaExternalDataOutreachCommandv10Properties)
.concat(FenergoExternalDataPortalOutreachQueryv10Properties)
.concat(FenergoNebulaExternalDataQueryv10Properties)
.concat(FenergoNebulaExternalDataAdapterReceptorv10Properties)
.concat(FenergoFinancialAnalysisCommandAPIv10Properties)
.concat(FenergoFinancialAnalysisQueryAPIv10Properties)
.concat(FenergoNebulaFinancialAnalysisImportAdapterReceptorv10Properties)
.concat(FenergoNebulaIdentitySelfServiceManagementCommandv10Properties)
.concat(FenergoNebulaIdentitySelfServiceManagementQueryv10Properties)
.concat(FenergoNebulaJourneyCommandv10Properties)
.concat(FenergoNebulaJourneyLogicEnginev20Properties)
.concat(FenergoNebulaJourneyLogicEnginev10Properties)
.concat(FenergoNebulaJourneyQueryv10Properties)
.concat(FenergoNebulaLocalisationCommandv10Properties)
.concat(FenergoNebulaLocalisationQueryv10Properties)
.concat(FenergoNebulaLookupCommandv10Properties)
.concat(FenergoNebulaLookupQueryv10Properties)
.concat(FenergoNebulaNarrativeCommandv10Properties)
.concat(FenergoNebulaNarrativeQueryv10Properties)
.concat(FenergoNebulaNewRequestv10Properties)
.concat(FenergoNebulaOutreachCommandv10Properties)
.concat(FenergoNebulaOutreachQueryv10Properties)
.concat(FenergoNebulaPolicyCommandv10Properties)
.concat(FenergoNebulaPolicyLogicEnginev20Properties)
.concat(FenergoNebulaPolicyLogicEnginev30Properties)
.concat(FenergoNebulaPolicyLogicEnginev10Properties)
.concat(FenergoNebulaPolicyLogicEnginev20Properties)
.concat(FenergoNebulaPolicyLogicEnginev30Properties)
.concat(FenergoNebulaPolicyLogicEnginev10Properties)
.concat(FenergoNebulaPolicyProvidersCommandv10Properties)
.concat(FenergoNebulaPolicyProvidersQueryv10Properties)
.concat(FenergoNebulaPolicyQueryv20Properties)
.concat(FenergoNebulaPolicyQueryv30Properties)
.concat(FenergoNebulaPolicyQueryv10Properties)
.concat(FenergoNebulaPortalTenantCommandv40Properties)
.concat(FenergoNebulaPortalTenantQueryv40Properties)
.concat(FenergoNebulaProductCommandv10Properties)
.concat(FenergoNebulaProductPolicyCommandv10Properties)
.concat(FenergoNebulaProductPolicyLogicEnginev10Properties)
.concat(FenergoNebulaProductPolicyQueryv10Properties)
.concat(FenergoNebulaProductQueryv10Properties)
.concat(FenergoNebulaReportingQueryv100Properties)
.concat(FenergoNebulaReportsCommandv20Properties)
.concat(FenergoNebulaReportsCommandv10Properties)
.concat(FenergoNebulaReportsQueryv20Properties)
.concat(FenergoNebulaReportsQueryv10Properties)
.concat(FenergoNebulaReviewCommandv10Properties)
.concat(FenergoNebulaReviewQueryv10Properties)
.concat(FenergoNebulaRiskCommandv10Properties)
.concat(FenergoNebulaRiskQueryv10Properties)
.concat(FenergoNebulaScreeningMockAdapterv10Properties)
.concat(FenergoNebulaScreeningCommandv20Properties)
.concat(FenergoNebulaScreeningCommandv10Properties)
.concat(FenergoNebulaScreeningQueryv20Properties)
.concat(FenergoNebulaScreeningQueryv30Properties)
.concat(FenergoNebulaScreeningQueryv10Properties)
.concat(SupergraphProperties),
		codex: {
			categories: ["Finance & Accounting"],
			alias: ["Fen-X "]
		}
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const domain = this.getNodeParameter('domain', 0) as string;

		switch(domain){
			case 'FenergoNebulaAssociationCommandv20': return await ExecuteFenergoNebulaAssociationCommandv20(this);
case 'FenergoNebulaAssociationCommandv10': return await ExecuteFenergoNebulaAssociationCommandv10(this);
case 'FenergoNebulaAssociationQueryv10': return await ExecuteFenergoNebulaAssociationQueryv10(this);
case 'FenergoNebulaAuditQueryv20': return await ExecuteFenergoNebulaAuditQueryv20(this);
case 'FenergoNebulaAuditQueryv30': return await ExecuteFenergoNebulaAuditQueryv30(this);
case 'FenergoNebulaAuditQueryv10': return await ExecuteFenergoNebulaAuditQueryv10(this);
case 'FenergoNebulaAuthorizationCommandv10': return await ExecuteFenergoNebulaAuthorizationCommandv10(this);
case 'FenergoNebulaAuthorizationQueryv10': return await ExecuteFenergoNebulaAuthorizationQueryv10(this);
case 'FenergoNebulaBulkLoadCommandv10': return await ExecuteFenergoNebulaBulkLoadCommandv10(this);
case 'FenergoNebulaBulkLoadQueryv10': return await ExecuteFenergoNebulaBulkLoadQueryv10(this);
case 'FenergoNebulaBusinessMetricsCommandv10': return await ExecuteFenergoNebulaBusinessMetricsCommandv10(this);
case 'FenergoNebulaBusinessMetricsQueryv10': return await ExecuteFenergoNebulaBusinessMetricsQueryv10(this);
case 'FenergoNebulaCollateralCommandv10': return await ExecuteFenergoNebulaCollateralCommandv10(this);
case 'FenergoNebulaCollateralQueryv10': return await ExecuteFenergoNebulaCollateralQueryv10(this);
case 'FenergoNebulaCovenantsConditionsQueryAPIv10': return await ExecuteFenergoNebulaCovenantsConditionsQueryAPIv10(this);
case 'FenergoNebulaConfigurationExchangeCommandv10': return await ExecuteFenergoNebulaConfigurationExchangeCommandv10(this);
case 'FenergoNebulaConfigurationExchangeQueryv10': return await ExecuteFenergoNebulaConfigurationExchangeQueryv10(this);
case 'FenergoNebulaConfigBaselineCommandv10': return await ExecuteFenergoNebulaConfigBaselineCommandv10(this);
case 'FenergoNebulaConfigBaselineQueryv10': return await ExecuteFenergoNebulaConfigBaselineQueryv10(this);
case 'FenergoNebulaCovenantsConditionsCommandAPIv10': return await ExecuteFenergoNebulaCovenantsConditionsCommandAPIv10(this);
case 'FenergoNebulaCovenantsConditionsQueryAPIv10': return await ExecuteFenergoNebulaCovenantsConditionsQueryAPIv10(this);
case 'FenergoNebulaCreditAssessmentCommandv10': return await ExecuteFenergoNebulaCreditAssessmentCommandv10(this);
case 'FenergoNebulaCreditAssessmentQueryv10': return await ExecuteFenergoNebulaCreditAssessmentQueryv10(this);
case 'FenergoNebulaCreditScreeningCommandv10': return await ExecuteFenergoNebulaCreditScreeningCommandv10(this);
case 'FenergoNebulaCreditScreeningQueryv10': return await ExecuteFenergoNebulaCreditScreeningQueryv10(this);
case 'FenergoNebulaAdapterReceptorv10': return await ExecuteFenergoNebulaAdapterReceptorv10(this);
case 'FenergoNebulaDashboardsCommandv100': return await ExecuteFenergoNebulaDashboardsCommandv100(this);
case 'FenergoNebulaDashboardsQueryv100': return await ExecuteFenergoNebulaDashboardsQueryv100(this);
case 'FenergoNebulaDataMigrationCommandv10': return await ExecuteFenergoNebulaDataMigrationCommandv10(this);
case 'FenergoNebulaDataMigrationCommandv10': return await ExecuteFenergoNebulaDataMigrationCommandv10(this);
case 'FenergoNebulaDataMigrationQueryv10': return await ExecuteFenergoNebulaDataMigrationQueryv10(this);
case 'FenergoNebulaDataProtectionCommandv10': return await ExecuteFenergoNebulaDataProtectionCommandv10(this);
case 'FenergoNebulaDataProtectionQueryv10': return await ExecuteFenergoNebulaDataProtectionQueryv10(this);
case 'FenergoNebulaDealsCommandv10': return await ExecuteFenergoNebulaDealsCommandv10(this);
case 'FenergoNebulaDealsQueryv10': return await ExecuteFenergoNebulaDealsQueryv10(this);
case 'FenergoNebulaDigitalIDVCommandv10': return await ExecuteFenergoNebulaDigitalIDVCommandv10(this);
case 'FenergoNebulaDigitalIDVQueryv10': return await ExecuteFenergoNebulaDigitalIDVQueryv10(this);
case 'FenergoNebulaDocumentManagementCommandv20': return await ExecuteFenergoNebulaDocumentManagementCommandv20(this);
case 'FenergoNebulaDocumentManagementCommandv10': return await ExecuteFenergoNebulaDocumentManagementCommandv10(this);
case 'FenergoNebulaDocumentManagementCommandv10': return await ExecuteFenergoNebulaDocumentManagementCommandv10(this);
case 'FenergoNebulaDocumentManagementCommandv20': return await ExecuteFenergoNebulaDocumentManagementCommandv20(this);
case 'FenergoNebulaDocumentManagementQueryv10': return await ExecuteFenergoNebulaDocumentManagementQueryv10(this);
case 'FenergoNebulaEntityDataCommandv10': return await ExecuteFenergoNebulaEntityDataCommandv10(this);
case 'FenergoNebulaEntityDataCommandv20': return await ExecuteFenergoNebulaEntityDataCommandv20(this);
case 'FenergoNebulaEntityDataCommandv30': return await ExecuteFenergoNebulaEntityDataCommandv30(this);
case 'FenergoNebulaEntityDataCommandv10': return await ExecuteFenergoNebulaEntityDataCommandv10(this);
case 'FenergoNebulaEntityDataQueryv10': return await ExecuteFenergoNebulaEntityDataQueryv10(this);
case 'FenergoNebulaEntityDataQueryv20': return await ExecuteFenergoNebulaEntityDataQueryv20(this);
case 'FenergoNebulaEntityDataQueryv10': return await ExecuteFenergoNebulaEntityDataQueryv10(this);
case 'FenergoNebulaEventIngressv10': return await ExecuteFenergoNebulaEventIngressv10(this);
case 'EventNotificationsPollingv20': return await ExecuteEventNotificationsPollingv20(this);
case 'EventNotificationsPollingv10': return await ExecuteEventNotificationsPollingv10(this);
case 'EventNotificationsWebhooksv10': return await ExecuteEventNotificationsWebhooksv10(this);
case 'FenergoNebulaExternalAuthenticationCommandv10': return await ExecuteFenergoNebulaExternalAuthenticationCommandv10(this);
case 'FenergoNebulaExternalAuthenticationQueryv10': return await ExecuteFenergoNebulaExternalAuthenticationQueryv10(this);
case 'FenergoNebulaExternalDataBFFv10': return await ExecuteFenergoNebulaExternalDataBFFv10(this);
case 'FenergoNebulaExternalDataCommandv10': return await ExecuteFenergoNebulaExternalDataCommandv10(this);
case 'FenergoNebulaExternalDataOutreachCommandv20': return await ExecuteFenergoNebulaExternalDataOutreachCommandv20(this);
case 'FenergoNebulaExternalDataOutreachCommandv10': return await ExecuteFenergoNebulaExternalDataOutreachCommandv10(this);
case 'FenergoExternalDataPortalOutreachQueryv10': return await ExecuteFenergoExternalDataPortalOutreachQueryv10(this);
case 'FenergoNebulaExternalDataQueryv10': return await ExecuteFenergoNebulaExternalDataQueryv10(this);
case 'FenergoNebulaExternalDataAdapterReceptorv10': return await ExecuteFenergoNebulaExternalDataAdapterReceptorv10(this);
case 'FenergoFinancialAnalysisCommandAPIv10': return await ExecuteFenergoFinancialAnalysisCommandAPIv10(this);
case 'FenergoFinancialAnalysisQueryAPIv10': return await ExecuteFenergoFinancialAnalysisQueryAPIv10(this);
case 'FenergoNebulaFinancialAnalysisImportAdapterReceptorv10': return await ExecuteFenergoNebulaFinancialAnalysisImportAdapterReceptorv10(this);
case 'FenergoNebulaIdentitySelfServiceManagementCommandv10': return await ExecuteFenergoNebulaIdentitySelfServiceManagementCommandv10(this);
case 'FenergoNebulaIdentitySelfServiceManagementQueryv10': return await ExecuteFenergoNebulaIdentitySelfServiceManagementQueryv10(this);
case 'FenergoNebulaJourneyCommandv10': return await ExecuteFenergoNebulaJourneyCommandv10(this);
case 'FenergoNebulaJourneyLogicEnginev20': return await ExecuteFenergoNebulaJourneyLogicEnginev20(this);
case 'FenergoNebulaJourneyLogicEnginev10': return await ExecuteFenergoNebulaJourneyLogicEnginev10(this);
case 'FenergoNebulaJourneyQueryv10': return await ExecuteFenergoNebulaJourneyQueryv10(this);
case 'FenergoNebulaLocalisationCommandv10': return await ExecuteFenergoNebulaLocalisationCommandv10(this);
case 'FenergoNebulaLocalisationQueryv10': return await ExecuteFenergoNebulaLocalisationQueryv10(this);
case 'FenergoNebulaLookupCommandv10': return await ExecuteFenergoNebulaLookupCommandv10(this);
case 'FenergoNebulaLookupQueryv10': return await ExecuteFenergoNebulaLookupQueryv10(this);
case 'FenergoNebulaNarrativeCommandv10': return await ExecuteFenergoNebulaNarrativeCommandv10(this);
case 'FenergoNebulaNarrativeQueryv10': return await ExecuteFenergoNebulaNarrativeQueryv10(this);
case 'FenergoNebulaNewRequestv10': return await ExecuteFenergoNebulaNewRequestv10(this);
case 'FenergoNebulaOutreachCommandv10': return await ExecuteFenergoNebulaOutreachCommandv10(this);
case 'FenergoNebulaOutreachQueryv10': return await ExecuteFenergoNebulaOutreachQueryv10(this);
case 'FenergoNebulaPolicyCommandv10': return await ExecuteFenergoNebulaPolicyCommandv10(this);
case 'FenergoNebulaPolicyLogicEnginev20': return await ExecuteFenergoNebulaPolicyLogicEnginev20(this);
case 'FenergoNebulaPolicyLogicEnginev30': return await ExecuteFenergoNebulaPolicyLogicEnginev30(this);
case 'FenergoNebulaPolicyLogicEnginev10': return await ExecuteFenergoNebulaPolicyLogicEnginev10(this);
case 'FenergoNebulaPolicyLogicEnginev20': return await ExecuteFenergoNebulaPolicyLogicEnginev20(this);
case 'FenergoNebulaPolicyLogicEnginev30': return await ExecuteFenergoNebulaPolicyLogicEnginev30(this);
case 'FenergoNebulaPolicyLogicEnginev10': return await ExecuteFenergoNebulaPolicyLogicEnginev10(this);
case 'FenergoNebulaPolicyProvidersCommandv10': return await ExecuteFenergoNebulaPolicyProvidersCommandv10(this);
case 'FenergoNebulaPolicyProvidersQueryv10': return await ExecuteFenergoNebulaPolicyProvidersQueryv10(this);
case 'FenergoNebulaPolicyQueryv20': return await ExecuteFenergoNebulaPolicyQueryv20(this);
case 'FenergoNebulaPolicyQueryv30': return await ExecuteFenergoNebulaPolicyQueryv30(this);
case 'FenergoNebulaPolicyQueryv10': return await ExecuteFenergoNebulaPolicyQueryv10(this);
case 'FenergoNebulaPortalTenantCommandv40': return await ExecuteFenergoNebulaPortalTenantCommandv40(this);
case 'FenergoNebulaPortalTenantQueryv40': return await ExecuteFenergoNebulaPortalTenantQueryv40(this);
case 'FenergoNebulaProductCommandv10': return await ExecuteFenergoNebulaProductCommandv10(this);
case 'FenergoNebulaProductPolicyCommandv10': return await ExecuteFenergoNebulaProductPolicyCommandv10(this);
case 'FenergoNebulaProductPolicyLogicEnginev10': return await ExecuteFenergoNebulaProductPolicyLogicEnginev10(this);
case 'FenergoNebulaProductPolicyQueryv10': return await ExecuteFenergoNebulaProductPolicyQueryv10(this);
case 'FenergoNebulaProductQueryv10': return await ExecuteFenergoNebulaProductQueryv10(this);
case 'FenergoNebulaReportingQueryv100': return await ExecuteFenergoNebulaReportingQueryv100(this);
case 'FenergoNebulaReportsCommandv20': return await ExecuteFenergoNebulaReportsCommandv20(this);
case 'FenergoNebulaReportsCommandv10': return await ExecuteFenergoNebulaReportsCommandv10(this);
case 'FenergoNebulaReportsQueryv20': return await ExecuteFenergoNebulaReportsQueryv20(this);
case 'FenergoNebulaReportsQueryv10': return await ExecuteFenergoNebulaReportsQueryv10(this);
case 'FenergoNebulaReviewCommandv10': return await ExecuteFenergoNebulaReviewCommandv10(this);
case 'FenergoNebulaReviewQueryv10': return await ExecuteFenergoNebulaReviewQueryv10(this);
case 'FenergoNebulaRiskCommandv10': return await ExecuteFenergoNebulaRiskCommandv10(this);
case 'FenergoNebulaRiskQueryv10': return await ExecuteFenergoNebulaRiskQueryv10(this);
case 'FenergoNebulaScreeningMockAdapterv10': return await ExecuteFenergoNebulaScreeningMockAdapterv10(this);
case 'FenergoNebulaScreeningCommandv20': return await ExecuteFenergoNebulaScreeningCommandv20(this);
case 'FenergoNebulaScreeningCommandv10': return await ExecuteFenergoNebulaScreeningCommandv10(this);
case 'FenergoNebulaScreeningQueryv20': return await ExecuteFenergoNebulaScreeningQueryv20(this);
case 'FenergoNebulaScreeningQueryv30': return await ExecuteFenergoNebulaScreeningQueryv30(this);
case 'FenergoNebulaScreeningQueryv10': return await ExecuteFenergoNebulaScreeningQueryv10(this);
case 'Supergraph': return await ExecuteSupergraph(this);
		}

		return [[]];
	}

}


export class FenXToken {
	private static token: string = "FenX Token";
	private static tokenExpires: Date = new Date();
	static tenant: string = "";

	static async getToken(func: IExecuteFunctions){
		var currentDate = new Date();
		if(FenXToken.tokenExpires <= currentDate){
			let auth = await func.getCredentials('fenX');
			let clientId = auth?.clientId as string;
			let clientSecret = auth?.secret as string;
			this.tenant = auth?.tenant as string;
			await FenXToken.generateNewToken(func, clientId, clientSecret);
		}
		return FenXToken.token;
	}

	private static async generateNewToken(func: IExecuteFunctions, clientId:string, clientSecret:string){
		console.log("Generating new Fen-X token.");
		const requestPromises = [];
		let url = "https://identity.fenergox.com/connect/token";

		let requestOptions: OptionsWithUri = {
			headers: {
				'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
			},
			method: "POST",
			uri: url,
			gzip: true,
			timeout: 3600000,
			form: {
				"grant_type": "client_credentials",
				"scope": "fenx.all",
				"client_id": clientId,
				"client_secret": clientSecret
			}
		};
		let request = func.helpers.request(requestOptions);
		requestPromises.push(request);

		// @ts-ignore
		const promisesResponses = await Promise.allSettled(requestPromises);
		let response: any; // tslint:disable-line:no-any
		response = promisesResponses.shift();
		if (response!.status !== 'fulfilled') {
				// throw error;
				console.log(request);
				throw new NodeApiError(func.getNode(), response);
		}
		response = JSON.parse(response.value);
		FenXToken.token = response.access_token;
		FenXToken.tokenExpires = new Date(new Date().getTime() + response.expires_in*1000);
	}
}
