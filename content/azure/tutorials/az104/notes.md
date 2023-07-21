# AZ104 services

## Active Directory
### Azure Active Directory
* A cloud-based suite of identity management capabilities that enables you to securely manage access to Azure services and resources for your users
* Provides application management, authentication, device management, and hybrid identity

|Windows Server Active Directory|Azure Active Directory|
|Directory Service |Identity Solution|
|Kerberos, NTLM|http, https|
|LDAP|SAML, OAUTH, Open ID, WS-Federation|
|Manage many other tasks, including deployment, configuration, virtual machines, patching, and other backend processes|Managed service to manage only users, groups, and policies|

### Azure Active Directory editions
1.	Free
2.	Microsoft 365 Apps
3.	Premium P1
4.	Premium P2

### Azure AD users and groups
#### User - Identity Sources
* Cloud 
    User that exists only in Azure AD of your organization (cloud-borne users) or external azure AD instance.
    Example – IT Administrators and the users you manage in the cloud

* Directory-synchronized
   User that exists in On-premises AD.
   Azure connect is the service used for synchronizing these users to Azure.

* Guest
  User exists outside Azure such as contractors or vendors using your AD resources
  Example - Accounts from other cloud or Microsoft account such as Xbox line.

#### Bulk User Accounts
* In order to bulk create users in the administration portal, you must be signed in as a Global administrator or User administrator.
* Download the comma-separated values (CSV) file, fill the list of all the users and their properties ,upload it to create user accounts.
* First row can be updated(version number)  and second row cannot be modified. Add users from third row, fill mandatory fields.
* Each bulk activity to create users can run for up to one hour. This enables bulk creation of at least 50,000 users.
* Consider error handling, duplicate users, initial password settings, empty properties, and when the account is enabled
  
### Group Accounts
#### Group Types
1. Security groups - manage member and computer access to shared resources for a group of users. You can create a security group for a specific security policy and apply the same permissions to all members of a group. 
2. Microsoft 365 groups- provide collaboration opportunities. Group members have access to a shared mailbox, calendar, files, SharePoint site, and more.
   
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
|Azure Reservations| Helps you save money by pre-paying for services (1 or 3 year for VM)|
|Azure Hybrid Benefits|use Windows Server and SQL Server on-premises licenses with Software Assurance|
|Azure Credits|monthly credit benefit that allows you to experiment with, develop, and test new solutions on Azure|
|Regions|Choose low-cost locations and regions|

## Tags
* Provides metadata for your Azure resources
* Logically organizes resources into a taxonomy
* Consists of a name-value pair
* Very useful for rolling up billing information

## Azure Policy (Service)

### Policy Definition
A Policy Definition expresses what to evaluate and what actions to take.

### Definition type
* Policy
* Initiate --> Collection of Policy
