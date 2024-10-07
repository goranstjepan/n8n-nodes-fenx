import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
    NodeApiError,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { FenXToken } from './FenXAPAC.node';

let FenergoNebulaScreeningMockAdapterv10Properties: INodeProperties[] = [
    {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'options',
        options: [
            { name: '', value: 'Screen' },{ name: '', value: 'ResolveMatches' },{ name: '', value: 'Test' },{ name: '', value: 'OngoingScreening' },{ name: '', value: 'OngoingScreeningUpdate' }
        ],
        displayOptions: {
            show: {
                domain: [
                    'FenergoNebulaScreeningMockAdapterv10',
                ],
            },
        },
        default: '',
        required: true,
        description: 'Operation to execute',
    }, { displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "Id": "Id", "Tenant": "Tenant", "ProviderId": "ProviderId", "Type": "Screen", "Data": { "Entities": [ { "EntityId": "EntityId", "LegalEntityId": "LegalEntityId", "SearchCriteria": { "FullName": "FullName", "FirstName": "FirstName", "MiddleName": "MiddleName", "LastName": "LastName", "DateOfBirth": "DateOfBirth", "Gender": "Male", "LegalEntityName": "LegalEntityName", "Type": "Individual", "Address": { "AddressLine1": "AddressLine1", "AddressLine2": "AddressLine2", "City": "City", "PostalCode": "PostalCode", "Country": "Country", "StateProvince": "StateProvince", "Type": "Type" }, "IDNumber": "IDNumber", "PhoneNumber": "PhoneNumber", "EmailAddress": "EmailAddress", "Nationality": "Nationality", "CountryOfResidence": "CountryOfResidence", "PlaceOfBirth": "PlaceOfBirth", "Citizenship": "Citizenship", "RegisteredCountry": "RegisteredCountry", "Subtype": "Subtype", "UniqueId": "UniqueId" } } ], "OverriddenBatch": { "PreviousStatus": "Open", "Entities": [ { "LegalEntityId": "LegalEntityId", "IsLegalEntityNewInJourney": false, "MatchesCount": 0 } ], "AdditionalSettings": [ { "FieldId": "FieldId", "Value": "Value" } ] }, "OverriddenBatches": [ { "PreviousStatus": "Open", "Entities": [ { "LegalEntityId": "LegalEntityId", "IsLegalEntityNewInJourney": false, "MatchesCount": 0 } ], "AdditionalSettings": [ { "FieldId": "FieldId", "Value": "Value" } ] } ], "JourneyId": "JourneyId", "ProcessId": "ProcessId", "AdditionalSettings": [ { "FieldId": "FieldId", "Value": "Value" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Screen' ], domain: [ 'FenergoNebulaScreeningMockAdapterv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "Id": "Id", "Tenant": "Tenant", "ProviderId": "ProviderId", "Type": "Screen", "Data": { "BatchExternalIds": [ { "Source": "Source", "Name": "Name", "Value": "Value" } ], "Entities": [ { "EntityId": "EntityId", "LegalEntityId": "LegalEntityId", "ExternalIds": [ { "Source": "Source", "Name": "Name", "Value": "Value" } ], "MatchesData": [ { "MatchId": "MatchId", "ExternalId": "ExternalId", "ProviderId": "ProviderId", "Status": "Match", "Reason": "Reason", "Comments": "Comments", "SubsidiaryFields": {} } ] } ], "AdditionalSettings": [ { "FieldId": "FieldId", "Value": "Value" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'ResolveMatches' ], domain: [ 'FenergoNebulaScreeningMockAdapterv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "Id": "Id", "Tenant": "Tenant", "ProviderId": "ProviderId", "Type": "Screen", "Data": { "AdditionalSettings": [ { "FieldId": "FieldId", "Value": "Value" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'Test' ], domain: [ 'FenergoNebulaScreeningMockAdapterv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "Id": "Id", "Tenant": "Tenant", "ProviderId": "ProviderId", "Type": "Screen", "Data": { "Enable": false, "EntityId": "EntityId", "LegalEntityId": "LegalEntityId", "SearchCriteria": { "FullName": "FullName", "FirstName": "FirstName", "MiddleName": "MiddleName", "LastName": "LastName", "DateOfBirth": "DateOfBirth", "Gender": "Male", "LegalEntityName": "LegalEntityName", "Type": "Individual", "Address": { "AddressLine1": "AddressLine1", "AddressLine2": "AddressLine2", "City": "City", "PostalCode": "PostalCode", "Country": "Country", "StateProvince": "StateProvince", "Type": "Type" }, "IDNumber": "IDNumber", "PhoneNumber": "PhoneNumber", "EmailAddress": "EmailAddress", "Nationality": "Nationality", "CountryOfResidence": "CountryOfResidence", "PlaceOfBirth": "PlaceOfBirth", "Citizenship": "Citizenship", "RegisteredCountry": "RegisteredCountry", "Subtype": "Subtype", "UniqueId": "UniqueId" }, "AdditionalSettingsForEnable": [ { "FieldId": "FieldId", "Value": "Value" } ] } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'OngoingScreening' ], domain: [ 'FenergoNebulaScreeningMockAdapterv10' ] } } },{ displayName: 'Request', name: 'request', type: 'json', required: true, default: '{ "Id": "Id", "Tenant": "Tenant", "ProviderId": "ProviderId", "Type": "Screen", "Data": { "EntityId": "EntityId", "LegalEntityId": "LegalEntityId", "SearchCriteria": { "FullName": "FullName", "FirstName": "FirstName", "MiddleName": "MiddleName", "LastName": "LastName", "DateOfBirth": "DateOfBirth", "Gender": "Male", "LegalEntityName": "LegalEntityName", "Type": "Individual", "Address": { "AddressLine1": "AddressLine1", "AddressLine2": "AddressLine2", "City": "City", "PostalCode": "PostalCode", "Country": "Country", "StateProvince": "StateProvince", "Type": "Type" }, "IDNumber": "IDNumber", "PhoneNumber": "PhoneNumber", "EmailAddress": "EmailAddress", "Nationality": "Nationality", "CountryOfResidence": "CountryOfResidence", "PlaceOfBirth": "PlaceOfBirth", "Citizenship": "Citizenship", "RegisteredCountry": "RegisteredCountry", "Subtype": "Subtype", "UniqueId": "UniqueId" } } }', description: 'Request body', displayOptions: { show: { endpoint: [ 'OngoingScreeningUpdate' ], domain: [ 'FenergoNebulaScreeningMockAdapterv10' ] } } }
];

async function ExecuteFenergoNebulaScreeningMockAdapterv10(base: IExecuteFunctions): Promise < INodeExecutionData[][] > {
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

    
switch(endpoint){ case 'Screen': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/mockadaptercommand/api/screen';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'ResolveMatches': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/mockadaptercommand/api/resolvematches';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'Test': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/mockadaptercommand/api/test';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'OngoingScreening': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/mockadaptercommand/api/ongoingscreening';

requestOptions.body = base.getNodeParameter('request', 0) as string; requestOptions.json = true;break;
case 'OngoingScreeningUpdate': 
requestOptions.method = 'POST';
requestOptions.uri = 'https://api.apac1.fenergox.com/mockadaptercommand/api/ongoingscreeningupdate';

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
    FenergoNebulaScreeningMockAdapterv10Properties,
    ExecuteFenergoNebulaScreeningMockAdapterv10
}
