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
* Azure AD Join enables users to join their devices to Active Directory from anywhere as long as they have
connectivity with the Internet.
* The Users may join devices to Azure AD setting enables you to select the users who can join devices to
Azure AD. Options are All, Selected and None. The default is All.
