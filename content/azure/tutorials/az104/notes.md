# AZ104 services

## Active Directory
### Azure Active Directory
* A cloud-based suite of identity management capabilities that enables you to securely manage access to Azure services and resources for your users
* Provides application management, authentication, device management, and hybrid identity

|Windows Server Active Directory|Azure Active Directory|
|Kerberos, NTLM|http, https|
|LDAP|SAML, OAUTH, Open ID, WS-Federation|

### Azure AD users and groups
#### User - Identity Sources
* Cloud
* Directory-synchronized
* Guest

#### Bulk User Accounts
* Create the comma-separated values (CSV) file with the list of all the users and their properties
* Loop through the file processing each user
* Consider error handling, duplicate users, initial password settings, empty properties, and when the account is enabled

### Group Accounts
#### Group Types
* Security groups
* Office 365 groups

#### Assignment Types
* Assigned
* Dynamic User
* Dynamic Device (Security groups only)

### Business to Business (B2B)
* Inviting users from other Azure AD Tenants into your own
organization tenant
* User provisioning is done by the invited party

### Business to Customer (B2C)
* Inviting users from other social media Identity Tenants into your
own organization tenant
* User provisioning is done by the invited party; you are in control
to invite the other side's users

### Azure AD Connect Health
* Monitor and gain insights into AD FS servers, Azure AD Connect, and AD domain controllers
* Monitor and gain insights into the synchronizations that occur between your on-premises AD DS and Azure AD
* Monitor and gain insights into your on-premises identity infrastructure that is used to access Office 365 or other Azure AD applications

## Subscriptions
* Logical unit of Azure services that is linked to an Azure account
* Security and billing boundary
* Includes accounts - identities in Azure Active Directory (Azure AD) or in a directory that is trusted by Azure AD, such as a work or school organization

### Getting a Subscription
* Enterprise Agreement customers make an upfront monetary commitment and consume services throughout the year
* Resellers provide a simple, flexible way to purchase cloud services
* Partners can design and implement your Azure cloud solution
* Personal free account -start right away

### Subscription Usage

|Subscription|Usage|
|Free|Includes a $200 credit for the first 30 days, free limited access for 12 months|
|Pay-As-You-Go|Charges you monthly|
|Enterprise|One agreement, with discounts for new licenses and Software Assurance - targeted at enterprise-scale organizations|
|Student|Includes $100 for 12 months - must verify student access|

## Cost Management
* Conduct cost analysis
* Create a budget
* Review recommendations
* Export the data

### Cost savings
* Azure Reservations helps you save money by pre-paying for services
* Azure Hybrid Benefits - use Windows Server and SQL Server on-premises licenses with Software Assurance
* Azure Credits - monthly credit benefit that allows you to experiment with, develop, and test new solutions on Azure
* Regions - Choose low-cost locations and regions

## Tags
* Provides metadata for your Azure resources
* Logically organizes resources into a taxonomy
* Consists of a name-value pair
* Very useful for rolling up billing information
