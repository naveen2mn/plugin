jQuery(document).ready(function () {
    var data = [
        {
            "AttributeId": 1,
            "Category": "Packaged Medicinal Product",
            "TableName": "BatchIdentifier",
            "ClassName": "Batch Identifier",
            "ColumnName": "BAID1",
            "Attribute": "BAID_1",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "EXCEL"
            ]
        },
        {
            "AttributeId": 2,
            "Category": "Packaged Medicinal Product",
            "TableName": "BatchIdentifier",
            "ClassName": "Batch Identifier",
            "ColumnName": "BAID2",
            "Attribute": "BAID_2",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 3,
            "Category": "Organization",
            "TableName": "ContactPerson",
            "ClassName": "Contact Person",
            "ColumnName": "ConfidentialityIndicator",
            "Attribute": "Confidentiality Indicator",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 4,
            "Category": "Organization",
            "TableName": "ContactPerson",
            "ClassName": "Contact Person",
            "ColumnName": "Name",
            "Attribute": "Name",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 5,
            "Category": "Organization",
            "TableName": "ContactPerson",
            "ClassName": "Contact Person",
            "ColumnName": "Role",
            "Attribute": "Role",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 6,
            "Category": "Organization",
            "TableName": "ContactPerson",
            "ClassName": "Contact Person",
            "ColumnName": "Telecom",
            "Attribute": "Telecom",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 7,
            "Category": "Clinical Particulars",
            "TableName": "ContraIndications",
            "ClassName": "Contra-Indication",
            "ColumnName": "CoMorbidity",
            "Attribute": "Co-Morbidity",
            "Priorities": [
                "PROCESS",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 8,
            "Category": "Clinical Particulars",
            "TableName": "ContraIndications",
            "ClassName": "Contra-Indication",
            "ColumnName": "IndicationType",
            "Attribute": "Contra-Indication as \"Disease/ Symptom / Procedure\"",
            "Priorities": [
                "PROCESS",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 9,
            "Category": "Clinical Particulars",
            "TableName": "ContraIndications",
            "ClassName": "Contra-Indication",
            "ColumnName": "Text",
            "Attribute": "Contra-Indication Text",
            "Priorities": [
                "PROCESS",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 10,
            "Category": "Clinical Particulars",
            "TableName": "ContraIndications",
            "ClassName": "Contra-Indication",
            "ColumnName": "DiseaseStatus",
            "Attribute": "Disease Status",
            "Priorities": [
                "PROCESS",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 11,
            "Category": "Medicinal Product",
            "TableName": "Country",
            "ClassName": "Country / Language",
            "ColumnName": "Country",
            "Attribute": "Country",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 12,
            "Category": "Medicinal Product",
            "TableName": "Country",
            "ClassName": "Country / Language",
            "ColumnName": "Jurisdiction",
            "Attribute": "Jurisdiction",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 13,
            "Category": "Medicinal Product",
            "TableName": "Country",
            "ClassName": "Country / Language",
            "ColumnName": "Language",
            "Attribute": "Language",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 14,
            "Category": "Packaged Medicinal Product",
            "TableName": "DataCarrierIdentifier",
            "ClassName": "Data Carrier Identifier",
            "ColumnName": "Code",
            "Attribute": "Data Carrier Identifier Code System",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 15,
            "Category": "Packaged Medicinal Product",
            "TableName": "DataCarrierIdentifier",
            "ClassName": "Data Carrier Identifier",
            "ColumnName": "Value",
            "Attribute": "Data Carrier Identifier Value",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 16,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "AllegenicityIndicator",
            "Attribute": "Allergenicity Indicator",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 17,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "BatchNumber",
            "Attribute": "Batch Number",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 18,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "AlternateMaterial",
            "Attribute": "Device Alternate Material",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 19,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "ListingNumber",
            "Attribute": "Device Listing Numbers",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 20,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "Material",
            "Attribute": "Device Material",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 21,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "Quantity",
            "Attribute": "Device Quantity",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 22,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "TradeName",
            "Attribute": "Device Trade Name",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 23,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "Type",
            "Attribute": "Device Type",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 24,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "Usage",
            "Attribute": "Device Usage",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 25,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "ExpirationDate",
            "Attribute": "Expiration Date",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 26,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "ModelNumber",
            "Attribute": "Model Number",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 27,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "SterilityIndicator",
            "Attribute": "Sterility Indicator",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 28,
            "Category": "Packaged Medicinal Product",
            "TableName": "Device",
            "ClassName": "Device",
            "ColumnName": "SterilisationRequirementIndicator",
            "Attribute": "Sterilization requirement Indicator",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 29,
            "Category": "Packaged Medicinal Product",
            "TableName": "DeviceBatchIdentification",
            "ClassName": "Device Batch Identification",
            "ColumnName": "BatchNumber",
            "Attribute": "Batch Number",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 30,
            "Category": "Packaged Medicinal Product",
            "TableName": "DeviceBatchIdentification",
            "ClassName": "Device Batch Identification",
            "ColumnName": "ExpiryDate",
            "Attribute": "Expiry Date",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 31,
            "Category": "Packaged Medicinal Product",
            "TableName": "DeviceNomenclature",
            "ClassName": "Device Nomenclature",
            "ColumnName": "Code",
            "Attribute": "Nomenclature Coding System",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 32,
            "Category": "Packaged Medicinal Product",
            "TableName": "DeviceNomenclature",
            "ClassName": "Device Nomenclature",
            "ColumnName": "Term",
            "Attribute": "Nomenclature Term",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 33,
            "Category": "Substances",
            "TableName": "Ingredient",
            "ClassName": "Ingredient",
            "ColumnName": "Role/SubstanceName",
            "Attribute": "Ingredient Role",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 34,
            "Category": "Clinical Particulars",
            "TableName": "Interactant",
            "ClassName": "Interactant",
            "ColumnName": "Code",
            "Attribute": "Interactant Code System",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 35,
            "Category": "Clinical Particulars",
            "TableName": "Interactant",
            "ClassName": "Interactant",
            "ColumnName": "Value",
            "Attribute": "Interactant Value",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 36,
            "Category": "Clinical Particulars",
            "TableName": "Interactions",
            "ClassName": "Interactions",
            "ColumnName": "Effect",
            "Attribute": "Interaction Effect",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 37,
            "Category": "Clinical Particulars",
            "TableName": "Interactions",
            "ClassName": "Interactions",
            "ColumnName": "Incidence",
            "Attribute": "Interaction Incidence",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 38,
            "Category": "Clinical Particulars",
            "TableName": "Interactions",
            "ClassName": "Interactions",
            "ColumnName": "Text",
            "Attribute": "Interaction Text",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 39,
            "Category": "Clinical Particulars",
            "TableName": "Interactions",
            "ClassName": "Interactions",
            "ColumnName": "Type",
            "Attribute": "Interaction Type",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 40,
            "Category": "Clinical Particulars",
            "TableName": "Interactions",
            "ClassName": "Interactions",
            "ColumnName": "ManagementActions",
            "Attribute": "Management Actions",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 41,
            "Category": "Packaged Medicinal Product",
            "TableName": "ManufacturedItem",
            "ClassName": "Manufactured Item",
            "ColumnName": "DoseForm",
            "Attribute": "Manufactured Dose Form",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 42,
            "Category": "Packaged Medicinal Product",
            "TableName": "ManufacturedItem",
            "ClassName": "Manufactured Item",
            "ColumnName": "Quantity",
            "Attribute": "Manufactured Item Quantity",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 43,
            "Category": "Packaged Medicinal Product",
            "TableName": "ManufacturedItem",
            "ClassName": "Manufactured Item",
            "ColumnName": "PresentationUnit",
            "Attribute": "Unit of Presentation",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 44,
            "Category": "Manufacturer / Establishment",
            "TableName": "ManufacturingOperation",
            "ClassName": "Manufacturing Operation",
            "ColumnName": "ConfidentialityIndicator",
            "Attribute": "Confidentiality Indicator",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 45,
            "Category": "Manufacturer / Establishment",
            "TableName": "ManufacturingOperation",
            "ClassName": "Manufacturing Operation",
            "ColumnName": "EffectiveDate",
            "Attribute": "Effective Date",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 46,
            "Category": "Manufacturer / Establishment",
            "TableName": "ManufacturingOperation",
            "ClassName": "Manufacturing Operation",
            "ColumnName": "AuthorisationReferenceNumber",
            "Attribute": "Manufacturing Authorisation Reference Number",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 47,
            "Category": "Manufacturer / Establishment",
            "TableName": "ManufacturingOperation",
            "ClassName": "Manufacturing Operation",
            "ColumnName": "OperationType",
            "Attribute": "Operation Type",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 48,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisation",
            "ClassName": "Marketing Authorisation",
            "ColumnName": "AuthorisationStatus",
            "Attribute": "Authorisation Status",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "EXCEL"
            ]
        },
        {
            "AttributeId": 49,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisation",
            "ClassName": "Marketing Authorisation",
            "ColumnName": "AuthorisationDate",
            "Attribute": "Authorisation Status Date",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "EXCEL"
            ]
        },
        {
            "AttributeId": 50,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisation",
            "ClassName": "Marketing Authorisation",
            "ColumnName": "Country",
            "Attribute": "Country",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "EXCEL"
            ]
        },
        {
            "AttributeId": 51,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisation",
            "ClassName": "Marketing Authorisation",
            "ColumnName": "SupplyLegalStatus",
            "Attribute": "Legal Status of Supply",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "EXCEL"
            ]
        },
        {
            "AttributeId": 52,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisation",
            "ClassName": "Marketing Authorisation",
            "ColumnName": "Number",
            "Attribute": "Marketing Authorisation Number",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "EXCEL"
            ]
        },
        {
            "AttributeId": 53,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisation",
            "ClassName": "Marketing Authorisation",
            "ColumnName": "ValidityPeriod",
            "Attribute": "Validity Period",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "EXCEL"
            ]
        },
        {
            "AttributeId": 54,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisationApplication",
            "ClassName": "Marketing Authorisation Application",
            "ColumnName": "Date",
            "Attribute": "Application Date",
            "Priorities": [
                "SmPC",
                "EXCEL",
                "PROCESS"
            ]
        },
        {
            "AttributeId": 55,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisationApplication",
            "ClassName": "Marketing Authorisation Application",
            "ColumnName": "Number",
            "Attribute": "Application Identifier/Number",
            "Priorities": [
                "SmPC",
                "EXCEL",
                "PROCESS"
            ]
        },
        {
            "AttributeId": 56,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisationApplication",
            "ClassName": "Marketing Authorisation Application",
            "ColumnName": "Type",
            "Attribute": "Application Type",
            "Priorities": [
                "SmPC",
                "EXCEL",
                "PROCESS"
            ]
        },
        {
            "AttributeId": 57,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisationApplication",
            "ClassName": "Marketing Authorisation Application",
            "ColumnName": "FirstAuthorizationDate",
            "Attribute": "Date of First Authorization",
            "Priorities": [
                "SmPC",
                "EXCEL",
                "PROCESS"
            ]
        },
        {
            "AttributeId": 58,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisationProcedure",
            "ClassName": "Marketing Authorisation Procedure",
            "ColumnName": "Date",
            "Attribute": "Procedure Date",
            "Priorities": [
                "PROCESS",
                "SmPC",
                "SmPC"
            ]
        },
        {
            "AttributeId": 59,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisationProcedure",
            "ClassName": "Marketing Authorisation Procedure",
            "ColumnName": "IdentifierNumber",
            "Attribute": "Procedure Identifier/Number",
            "Priorities": [
                "SmPC",
                "SmPC",
                "SmPC"
            ]
        },
        {
            "AttributeId": 60,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisationProcedure",
            "ClassName": "Marketing Authorisation Procedure",
            "ColumnName": "Type",
            "Attribute": "Procedure Type",
            "Priorities": [
                "PROCESS",
                "SmPC",
                "SmPC"
            ]
        },
        {
            "AttributeId": 61,
            "Category": "Authorisation",
            "TableName": "MarketingStatus",
            "ClassName": "Marketing Status",
            "ColumnName": "Country",
            "Attribute": "Country",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 62,
            "Category": "Authorisation",
            "TableName": "MarketingStatus",
            "ClassName": "Marketing Status",
            "ColumnName": "Jurisdiction",
            "Attribute": "Jurisdiction",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 63,
            "Category": "Authorisation",
            "TableName": "MarketingStatus",
            "ClassName": "Marketing Status",
            "ColumnName": "JurisdictionLegalStatus",
            "Attribute": "Jurisdictional Legal Status of Supply",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 64,
            "Category": "Authorisation",
            "TableName": "MarketingStatus",
            "ClassName": "Marketing Status",
            "ColumnName": "JurisdictionMAnumber",
            "Attribute": "Jurisdictional Marketing Authorisation Number",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 65,
            "Category": "Authorisation",
            "TableName": "MarketingStatus",
            "ClassName": "Marketing Status",
            "ColumnName": "Date",
            "Attribute": "Marketing Date (start/stop)",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 66,
            "Category": "Medicinal Product",
            "TableName": "MasterFile",
            "ClassName": "Master File",
            "ColumnName": "Location",
            "Attribute": "MF Location",
            "Priorities": [
                "PROCESS",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 67,
            "Category": "Medicinal Product",
            "TableName": "MasterFile",
            "ClassName": "Master File",
            "ColumnName": "Code",
            "Attribute": "MFL Code",
            "Priorities": [
                "PROCESS",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 68,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProduct",
            "ClassName": "Medicinal Product",
            "ColumnName": "AdditionalIndicator",
            "Attribute": "Additional Monitoring Indicator",
            "Priorities": [
                "PROCESS",
                "SmPC",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 69,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProduct",
            "ClassName": "Medicinal Product",
            "ColumnName": "DoseForm",
            "Attribute": "Combined Pharmaceutical Dose form",
            "Priorities": [
                "PROCESS",
                "SmPC",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 70,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProduct",
            "ClassName": "Medicinal Product",
            "ColumnName": "IMPIDCrossReference",
            "Attribute": "IMPID Cross-Reference",
            "Priorities": [
                "PROCESS",
                "SmPC",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 71,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProduct",
            "ClassName": "Medicinal Product",
            "ColumnName": "MP_ID",
            "Attribute": "MPID",
            "Priorities": [
                "PROCESS",
                "SmPC",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 72,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProduct",
            "ClassName": "Medicinal Product",
            "ColumnName": "OrphanStatus",
            "Attribute": "Orphan Designation Status",
            "Priorities": [
                "PROCESS",
                "SmPC",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 73,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProduct",
            "ClassName": "Medicinal Product",
            "ColumnName": "SpecialMeasures",
            "Attribute": "Special Measures",
            "Priorities": [
                "PROCESS",
                "SmPC",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 74,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductClassification",
            "ClassName": "Medicinal Product Classification",
            "ColumnName": "System",
            "Attribute": "Classification System",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 75,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductClassification",
            "ClassName": "Medicinal Product Classification",
            "ColumnName": "ATCCode",
            "Attribute": "Classification System Value",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 76,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "Container",
            "Attribute": "Container or Pack Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 77,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "Device",
            "Attribute": "Device Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 78,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "Flavour",
            "Attribute": "Flavour Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 79,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "Formulation",
            "Attribute": "Formulation Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 80,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "IntendedUse",
            "Attribute": "Intended Use Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 81,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "InventedName",
            "Attribute": "Invented Name Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 82,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "Name",
            "Attribute": "Name",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 83,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "DoseForm",
            "Attribute": "Pharmaceutical Dose Form Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 84,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "ScientificName",
            "Attribute": "Scientific Name Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 85,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "Strength",
            "Attribute": "Strength Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 86,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "TargetPopulation",
            "Attribute": "Target Population Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 87,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "Time",
            "Attribute": "Time/Period Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 88,
            "Category": "Medicinal Product",
            "TableName": "MedicinalProductName",
            "ClassName": "Medicinal Product Name",
            "ColumnName": "Trademark",
            "Attribute": "Trademark or Company Name Part",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 89,
            "Category": "Organization",
            "TableName": "Organization",
            "ClassName": "Organization",
            "ColumnName": "Address",
            "Attribute": "Address",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 90,
            "Category": "Organization",
            "TableName": "Organization",
            "ClassName": "Organization",
            "ColumnName": "ConfidentialityIndicator",
            "Attribute": "Confidentiality Indicator",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 91,
            "Category": "Organization",
            "TableName": "Organization",
            "ClassName": "Organization",
            "ColumnName": "Identifier",
            "Attribute": "Identifier",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 92,
            "Category": "Organization",
            "TableName": "Organization",
            "ClassName": "Organization",
            "ColumnName": "Name",
            "Attribute": "Name",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 93,
            "Category": "Packaged Medicinal Product",
            "TableName": "OtherCharacteristics",
            "ClassName": "Other Characteristics",
            "ColumnName": "OtherCharacteristicsCodeSystem",
            "Attribute": "Other Characteristics Code System",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 94,
            "Category": "Packaged Medicinal Product",
            "TableName": "OtherCharacteristics",
            "ClassName": "Other Characteristics",
            "ColumnName": "OtherCharacteristicsCodeValue",
            "Attribute": "Other Characteristics Code Value",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 95,
            "Category": "Organization",
            "TableName": "OtherLocation",
            "ClassName": "Other Locations",
            "ColumnName": "Identifier",
            "Attribute": "Identifier",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 96,
            "Category": "Organization",
            "TableName": "OtherLocation",
            "ClassName": "Other Locations",
            "ColumnName": "Address",
            "Attribute": "Location Address",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 97,
            "Category": "Organization",
            "TableName": "OtherLocation",
            "ClassName": "Other Locations",
            "ColumnName": "LocationRole",
            "Attribute": "Location Role",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 98,
            "Category": "Clinical Particulars",
            "TableName": "OtherTherapySpecifics",
            "ClassName": "Other Therapy Specifics",
            "ColumnName": "Medication",
            "Attribute": "Medication",
            "Priorities": [
                "MSSQL",
                "EXCEL",
                "SmPC"
            ]
        },
        {
            "AttributeId": 99,
            "Category": "Clinical Particulars",
            "TableName": "OtherTherapySpecifics",
            "ClassName": "Other Therapy Specifics",
            "ColumnName": "RelationshipType",
            "Attribute": "Therapy Relationship Type",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 100,
            "Category": "Packaged Medicinal Product",
            "TableName": "PackageComponent",
            "ClassName": "Package (Component)",
            "ColumnName": "AlternateMaterial",
            "Attribute": "Component Alternate Material",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 101,
            "Category": "Packaged Medicinal Product",
            "TableName": "PackageComponent",
            "ClassName": "Package (Component)",
            "ColumnName": "Material",
            "Attribute": "Component Material",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 102,
            "Category": "Packaged Medicinal Product",
            "TableName": "PackageComponent",
            "ClassName": "Package (Component)",
            "ColumnName": "Type",
            "Attribute": "Component Type",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 103,
            "Category": "Packaged Medicinal Product",
            "TableName": "PackagedItem",
            "ClassName": "Package Item (Container)",
            "ColumnName": "AlternateMaterial",
            "Attribute": "Alternate Material",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 104,
            "Category": "Packaged Medicinal Product",
            "TableName": "PackagedItem",
            "ClassName": "Package Item (Container)",
            "ColumnName": "Material",
            "Attribute": "Material",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 105,
            "Category": "Packaged Medicinal Product",
            "TableName": "PackagedItem",
            "ClassName": "Package Item (Container)",
            "ColumnName": "Quantity",
            "Attribute": "Package Item (Container) Quantity",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 106,
            "Category": "Packaged Medicinal Product",
            "TableName": "PackagedItem",
            "ClassName": "Package Item (Container)",
            "ColumnName": "ContainerType",
            "Attribute": "Package Item (Container) Type",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 107,
            "Category": "Packaged Medicinal Product",
            "TableName": "PackagedMedicinalProduct",
            "ClassName": "Packaged Medicinal Product",
            "ColumnName": "Description",
            "Attribute": "Package Description",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 108,
            "Category": "Packaged Medicinal Product",
            "TableName": "PackagedMedicinalProduct",
            "ClassName": "Packaged Medicinal Product",
            "ColumnName": "PCID",
            "Attribute": "PCID",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 109,
            "Category": "Authorisation",
            "TableName": "PSURSubmission",
            "ClassName": "Periodic Safety Update Report Submission",
            "ColumnName": "DataLockPoint",
            "Attribute": "Data Lock Point",
            "Priorities": [
                "EXCEL",
                "MSSQL",
                "PROCESS"
            ]
        },
        {
            "AttributeId": 110,
            "Category": "Authorisation",
            "TableName": "PSURSubmission",
            "ClassName": "Periodic Safety Update Report Submission",
            "ColumnName": "SubmissionDate",
            "Attribute": "Dates of Submission",
            "Priorities": [
                "EXCEL",
                "MSSQL",
                "PROCESS"
            ]
        },
        {
            "AttributeId": 111,
            "Category": "Authorisation",
            "TableName": "PSURSubmission",
            "ClassName": "Periodic Safety Update Report Submission",
            "ColumnName": "FrequencySafetyReport",
            "Attribute": "Frequency of Submission of Safety Report",
            "Priorities": [
                "EXCEL",
                "MSSQL",
                "PROCESS"
            ]
        },
        {
            "AttributeId": 112,
            "Category": "Authorisation",
            "TableName": "PSURSubmission",
            "ClassName": "Periodic Safety Update Report Submission",
            "ColumnName": "InternationalBirthDate",
            "Attribute": "International Birth Date",
            "Priorities": [
                "EXCEL",
                "MSSQL",
                "PROCESS"
            ]
        },
        {
            "AttributeId": 113,
            "Category": "Authorisation",
            "TableName": "PSURSubmission",
            "ClassName": "Periodic Safety Update Report Submission",
            "ColumnName": "ReferenceDate",
            "Attribute": "Reference Date",
            "Priorities": [
                "EXCEL",
                "MSSQL",
                "PROCESS"
            ]
        },
        {
            "AttributeId": 114,
            "Category": "Pharmaceutical Product",
            "TableName": "PharmaceuticalProduct",
            "ClassName": "Pharmaceutical Product",
            "ColumnName": "AdministrableDoseForm",
            "Attribute": "Administrable Dose Form",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 115,
            "Category": "Pharmaceutical Product",
            "TableName": "PharmaceuticalProduct",
            "ClassName": "Pharmaceutical Product",
            "ColumnName": "Quantity",
            "Attribute": "Pharmaceutical Product Quantity",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 116,
            "Category": "Pharmaceutical Product",
            "TableName": "PharmaceuticalProduct",
            "ClassName": "Pharmaceutical Product",
            "ColumnName": "PresentationUnit",
            "Attribute": "Unit of Presentation",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 117,
            "Category": "Pharmaceutical Product",
            "TableName": "PharmaceuticalProductCharacteristics",
            "ClassName": "Pharmaceutical Product Characteristics",
            "ColumnName": "Code",
            "Attribute": "Pharmaceutical Product Characteristics Code System",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 118,
            "Category": "Pharmaceutical Product",
            "TableName": "PharmaceuticalProductCharacteristics",
            "ClassName": "Pharmaceutical Product Characteristics",
            "ColumnName": "Value",
            "Attribute": "Pharmaceutical Product Characteristics Value",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 119,
            "Category": "Pharmaceutical Product",
            "TableName": "PHPIDSet",
            "ClassName": "PhPID Set",
            "ColumnName": "IdentifierSet",
            "Attribute": "PhPID Identifier Sets",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 120,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "Color",
            "Attribute": "Colour",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 121,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "Depth",
            "Attribute": "Depth",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 122,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "ExternalDiameter",
            "Attribute": "External Diameter",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 123,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "Height",
            "Attribute": "Height",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 124,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "Image",
            "Attribute": "Image",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 125,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "IMPrint",
            "Attribute": "Imprint",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 126,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "NominalVolume",
            "Attribute": "Nominal Volume",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 127,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "Shape",
            "Attribute": "Shape",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 128,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "Weight",
            "Attribute": "Weight",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 129,
            "Category": "Packaged Medicinal Product",
            "TableName": "PhysicalCharacteristics",
            "ClassName": "Physical Characteristics",
            "ColumnName": "Width",
            "Attribute": "Width",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 130,
            "Category": "Clinical Particulars",
            "TableName": "PopulationSpecifics",
            "ClassName": "Population Specifics",
            "ColumnName": "Age",
            "Attribute": "Age",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 131,
            "Category": "Clinical Particulars",
            "TableName": "PopulationSpecifics",
            "ClassName": "Population Specifics",
            "ColumnName": "AgeRange",
            "Attribute": "Age Range",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 132,
            "Category": "Clinical Particulars",
            "TableName": "PopulationSpecifics",
            "ClassName": "Population Specifics",
            "ColumnName": "Gender",
            "Attribute": "Gender",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 133,
            "Category": "Clinical Particulars",
            "TableName": "PopulationSpecifics",
            "ClassName": "Population Specifics",
            "ColumnName": "HealthStatus",
            "Attribute": "Health Status",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 134,
            "Category": "Clinical Particulars",
            "TableName": "PopulationSpecifics",
            "ClassName": "Population Specifics",
            "ColumnName": "Race",
            "Attribute": "Race",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 135,
            "Category": "Substances",
            "TableName": "ReferenceStrength",
            "ClassName": "Reference Strength",
            "ColumnName": "Country",
            "Attribute": "Reference Strength Country",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 136,
            "Category": "Substances",
            "TableName": "ReferenceStrength",
            "ClassName": "Reference Strength",
            "ColumnName": "StrengthMeasurementPoint",
            "Attribute": "Reference Strength Measurement Point",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 137,
            "Category": "Substances",
            "TableName": "ReferenceStrength",
            "ClassName": "Reference Strength",
            "ColumnName": "StrengthRange",
            "Attribute": "Reference Strength Range",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 138,
            "Category": "Substances",
            "TableName": "ReferenceStrength",
            "ClassName": "Reference Strength",
            "ColumnName": "SpecifiedSubstance",
            "Attribute": "Reference Strength Specified Substance",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 139,
            "Category": "Substances",
            "TableName": "ReferenceStrength",
            "ClassName": "Reference Strength",
            "ColumnName": "Substance",
            "Attribute": "Reference Strength Substance",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 140,
            "Category": "Medicinal Product",
            "TableName": "RegulatedDocument",
            "ClassName": "Regulated Document",
            "ColumnName": "EffectiveDate",
            "Attribute": "Document Effective Date",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 141,
            "Category": "Medicinal Product",
            "TableName": "RegulatedDocument",
            "ClassName": "Regulated Document",
            "ColumnName": "DocumentIdentifier",
            "Attribute": "Document Identifier",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 142,
            "Category": "Medicinal Product",
            "TableName": "RegulatedDocument",
            "ClassName": "Regulated Document",
            "ColumnName": "Type",
            "Attribute": "Document Type",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 143,
            "Category": "Medicinal Product",
            "TableName": "RegulatedDocument",
            "ClassName": "Regulated Document",
            "ColumnName": "RegulatedDocument",
            "Attribute": "Regulated Document",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 144,
            "Category": "Pharmaceutical Product",
            "TableName": "RouteAdministration",
            "ClassName": "Route of Administration",
            "ColumnName": "RouteAdministration",
            "Attribute": "Route of Administration",
            "Priorities": [
                "PROCESS",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 145,
            "Category": "Packaged Medicinal Product",
            "TableName": "ShelfLife",
            "ClassName": "Shelf Life / Storage",
            "ColumnName": "Type/TimePeriod",
            "Attribute": "Shelf Life Time Period",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 146,
            "Category": "Packaged Medicinal Product",
            "TableName": "ShelfLife",
            "ClassName": "Shelf Life / Storage",
            "ColumnName": "Type",
            "Attribute": "Shelf Life Type",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 147,
            "Category": "Packaged Medicinal Product",
            "TableName": "ShelfLife",
            "ClassName": "Shelf Life / Storage",
            "ColumnName": "StorageSpecialPrecautions",
            "Attribute": "Special Precautions for Storage",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 148,
            "Category": "Authorisation",
            "TableName": "MASME",
            "ClassName": "SME",
            "ColumnName": "Size",
            "Attribute": "Size",
            "Priorities": [
                "EXCEL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 149,
            "Category": "Authorisation",
            "TableName": "MASME",
            "ClassName": "SME",
            "ColumnName": "Flag",
            "Attribute": "SME Flag",
            "Priorities": [
                "EXCEL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 150,
            "Category": "Authorisation",
            "TableName": "MASME",
            "ClassName": "SME",
            "ColumnName": "Number",
            "Attribute": "SME Number",
            "Priorities": [
                "EXCEL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 151,
            "Category": "Authorisation",
            "TableName": "MASME",
            "ClassName": "SME",
            "ColumnName": "Date",
            "Attribute": "Status Date",
            "Priorities": [
                "EXCEL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 152,
            "Category": "Substances",
            "TableName": "Substances",
            "ClassName": "Specified Substance",
            "ColumnName": "ConfidentialityIndicator",
            "Attribute": "Confidentiality Indicator",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 153,
            "Category": "Substances",
            "TableName": "Substances",
            "ClassName": "Specified Substance",
            "ColumnName": "SpecifiedSubstance",
            "Attribute": "Specified Substance",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 154,
            "Category": "Substances",
            "TableName": "Substances",
            "ClassName": "Specified Substance",
            "ColumnName": "SpecifiedSubstanceGroup",
            "Attribute": "Specified Substance Group",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 155,
            "Category": "Substances",
            "TableName": "Strength",
            "ClassName": "Strength",
            "ColumnName": "Country",
            "Attribute": "Country",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 156,
            "Category": "Substances",
            "TableName": "Strength",
            "ClassName": "Strength",
            "ColumnName": "MeasurementPoint",
            "Attribute": "Measurement Point",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 157,
            "Category": "Substances",
            "TableName": "Strength",
            "ClassName": "Strength",
            "ColumnName": "ConcentrationStrengthRange",
            "Attribute": "Strength Range (Concentration)",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 158,
            "Category": "Substances",
            "TableName": "Strength",
            "ClassName": "Strength",
            "ColumnName": "PresentationStrengthRange",
            "Attribute": "Strength Range (Presentation)",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 159,
            "Category": "Substances",
            "TableName": "Substances",
            "ClassName": "Substance",
            "ColumnName": "Role/SubstanceName",
            "Attribute": "Substance",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 160,
            "Category": "Clinical Particulars",
            "TableName": "TherapeuticIndication",
            "ClassName": "Therapeutic Indications",
            "ColumnName": "CoMorbidity",
            "Attribute": "Co-Morbidity",
            "Priorities": [
                "EXCEL",
                "EXCEL",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 161,
            "Category": "Clinical Particulars",
            "TableName": "TherapeuticIndication",
            "ClassName": "Therapeutic Indications",
            "ColumnName": "DiseaseStatus",
            "Attribute": "Disease Status",
            "Priorities": [
                "EXCEL",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 162,
            "Category": "Clinical Particulars",
            "TableName": "TherapeuticIndication",
            "ClassName": "Therapeutic Indications",
            "ColumnName": "Indication",
            "Attribute": "Indication as \"Disease/ Symptom/ Procedure\"",
            "Priorities": [
                "EXCEL",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 163,
            "Category": "Clinical Particulars",
            "TableName": "TherapeuticIndication",
            "ClassName": "Therapeutic Indications",
            "ColumnName": "Text",
            "Attribute": "Indication Text",
            "Priorities": [
                "EXCEL",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 164,
            "Category": "Clinical Particulars",
            "TableName": "TherapeuticIndication",
            "ClassName": "Therapeutic Indications",
            "ColumnName": "IntendedEffect",
            "Attribute": "Intended Effect",
            "Priorities": [
                "EXCEL",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 165,
            "Category": "Clinical Particulars",
            "TableName": "TherapeuticIndication",
            "ClassName": "Therapeutic Indications",
            "ColumnName": "Timing",
            "Attribute": "Timing / Duration",
            "Priorities": [
                "EXCEL",
                "PROCESS",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 166,
            "Category": "Clinical Particulars",
            "TableName": "UndesirableEffects",
            "ClassName": "Undesirable Effects",
            "ColumnName": "Occurrence",
            "Attribute": "Frequency of Occurrence",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 167,
            "Category": "Clinical Particulars",
            "TableName": "UndesirableEffects",
            "ClassName": "Undesirable Effects",
            "ColumnName": "SOC/AE",
            "Attribute": "Symptom / Condition / Effect Classification",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 168,
            "Category": "Clinical Particulars",
            "TableName": "UndesirableEffects",
            "ClassName": "Undesirable Effects",
            "ColumnName": "Type",
            "Attribute": "Undesirable Effect as \"Symptom/ Condition / Effect",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 169,
            "Category": "Clinical Particulars",
            "TableName": "UndesirableEffects",
            "ClassName": "Undesirable Effects",
            "ColumnName": "Text",
            "Attribute": "Undesirable Effect Text",
            "Priorities": [
                "SmPC",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 170,
            "Category": "Medicinal Product",
            "TableName": "Version",
            "ClassName": "Version",
            "ColumnName": "Date",
            "Attribute": "Version Date",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 171,
            "Category": "Medicinal Product",
            "TableName": "Version",
            "ClassName": "Version",
            "ColumnName": "Identifier",
            "Attribute": "Version Identifier",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 199,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisationHolder",
            "ClassName": "Marketing Authorisation Holder",
            "ColumnName": "OrganizationId",
            "Attribute": "Organization",
            "Priorities": [
                "PROCESS",
                "MSSQL",
                "SmPC"
            ]
        },
        {
            "AttributeId": 200,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisationHolder",
            "ClassName": "Marketing Authorisation Holder",
            "ColumnName": "MarketingAuthorisationId",
            "Attribute": "MAH",
            "Priorities": [
                "PROCESS",
                "EXCEL",
                "MSSQL"
            ]
        },
        {
            "AttributeId": 206,
            "Category": "Organization",
            "TableName": "ContactPerson",
            "ClassName": "Contact Person",
            "ColumnName": "Code",
            "Attribute": "Person Code",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 207,
            "Category": "Organization",
            "TableName": "ContactPerson",
            "ClassName": "Contact Person",
            "ColumnName": "Email",
            "Attribute": "Email",
            "Priorities": [
                "MSSQL",
                "PROCESS",
                "SmPC"
            ]
        },
        {
            "AttributeId": 222,
            "Category": "PackagedMedicinalProduct",
            "TableName": "ShelfLife",
            "ClassName": "ShelfLife",
            "ColumnName": "Test",
            "Attribute": "SpecifiedSubstance",
            "Priorities": [
                null,
                null,
                null
            ]
        },
        {
            "AttributeId": 223,
            "Category": "Authorisation",
            "TableName": "Batch Identifier",
            "ClassName": "authorisation",
            "ColumnName": "BAID_1",
            "Attribute": "AdministrableDoseForm",
            "Priorities": [
                null,
                null,
                null
            ]
        },
        {
            "AttributeId": 225,
            "Category": "Authorisation",
            "TableName": "MarketingAuthorisation",
            "ClassName": "MarketingAuthorisation",
            "ColumnName": "AuthorisationStatus",
            "Attribute": "AuthorisationStatus",
            "Priorities": [
                null,
                null,
                null
            ]
        }
    ];
    
    var model = [];

    var category = [];
    var classname = [];

    function addAttributes(node) {
        data.forEach(function (item) {
            if (node.name == item.ClassName) {
                let childnode = {};
                childnode.type = 'Attribute';
                childnode.name = item.Attribute;
                childnode.id = item.AttributeId;
                childnode.priority = item.Priorities;
                node.child.push(childnode);
            }
        })
    }

    function addClassName(node) {
        data.forEach(function (item) {
            if (node.name == item.Category) {
                if (classname.indexOf(item.ClassName) == -1) {
                    classname.push(item.ClassName);
                    let childnode = {};
                    childnode.type = 'ClassName';
                    childnode.name = item.ClassName;
                    childnode.child = [];
                    addAttributes(childnode);
                    node.child.push(childnode);
                }
            }
        })
    }

    function main() {
        data.forEach(function (item) {
            if (category.indexOf(item.Category) == -1) {
                category.push(item.Category);
                let node = {};
                node.type = 'Category';
                node.name = item.Category;
                node.child = [];
                addClassName(node);
                model.push(node);
            }
        });
    }
    function render(){
        let html = '';
            $('.root').empty();
            $('.close').empty();
        model.forEach(function(e,ind){
            console.log(e)
            html += '<li class="has-children"> <input type="checkbox" name ="group-'+ind+'" checked> <label for="group-'+ind+'">'+e.name+'</label> <ul>';
            
            e.child.forEach(function(el,index){
                html += '<li class="has-children"> <input type="checkbox" name ="sub-group-'+index+'" checked> <label for="sub-group-'+index+'">'+el.name+'</label> <ul>';
                
                
                el.child.forEach(function(ele){
                    html += '<li><a href="#0">'+ele.name+'</a></li>';
                    
                })
                html += '</ul>'
            })
            html += '</ul></li>'
            
        })
        
       // $('.root').append(html);
        
        
        
    }
    function render1(){
        let ct = '';
		let cl = '';
		let at = '';
            $('.category').empty();
            
        model.forEach(function(e,ind){
            
            ct += '<li class="grp" index="'+ind+'">'+e.name+'</li>';
            
            e.child.forEach(function(el,index){
                cl += '<li class="group gp-'+ind+' hide" index="'+ind+'-'+index+'" parent_index="'+ind+'">'+el.name+'</li>';
                el.child.forEach(function(ele,i){
                    at += '<li class="grp-'+ind+'-'+index+' hide" index="'+i+'" parent_index="'+index+'" >'+ele.name+'</li>';
                    
                })
               
            })
            
            
        })
        $('.category').append(ct);
		$('.classname').append(cl);
		$('.attribute').append(at);
		
       // $('.root').append(html);
        
        
        
    }
        main();
        render();
	
	render1();
    
    $('.grp').on('click', function() {
        let index = this.getAttribute('index');
        if (!$(this).hasClass('selected')){
            $(this).addClass('selected');
            $(".gp-"+index).show();
        } else {
            $(this).removeClass('selected');
            $(".gp-"+index).hide();
        }
    });
    $('.group').on('click', function() {
        let p_index = this.getAttribute('index').split('-')[0];
        let index = this.getAttribute('index').split('-')[1];
        if (!$(this).hasClass('selected')){
            $(this).addClass('selected');
            $(".grp-"+p_index+"-"+index).show()
        } else {
            $(this).removeClass('selected');
            $(".grp-"+p_index+"-"+index).hide();
        }
    });
                
    
        console.log(model);
    var accordionsMenu = $('.cd-accordion-menu');

    if (accordionsMenu.length > 0) {
        
        accordionsMenu.each(function () {
            var accordion = $(this);
            //detect change in the input[type="checkbox"] value
            accordion.on('change', 'input[type="checkbox"]', function () {
                var checkbox = $(this);
                				console.log(checkbox.prop('checked'));
                (checkbox.prop('checked')) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
            });
        });
    }
   
});