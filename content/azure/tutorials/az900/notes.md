# AZ900 services

## Virtual Machine

## Storage account
### Azure storage services
```
Azure Blobs: A massively scalable object store for text and binary data. Also includes support for big data analytics through Data Lake Storage Gen2.
Azure Files: Managed file shares for cloud or on-premises deployments.
Azure Queues: A messaging store for reliable messaging between application components.
Azure Disks: Block-level storage volumes for Azure VMs.
```
[Reference - Azure storage services](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services)

### Azure storage redundancy
```
Locally redundant storage:
Locally redundant storage (LRS) replicates your data three times within a single data center in the primary region((99.999999999%))


Zone-redundant storage:
For Availability Zone-enabled Regions, zone-redundant storage (ZRS) replicates your Azure Storage data synchronously across three Azure availability zones in the primary region. ZRS offers durability for Azure Storage data objects of at least 12 nines (99.9999999999%) over a given year

Geo-redundant storage:
GRS copies your data synchronously three times within a single physical location in the primary region using LRS. It then copies your data asynchronously to a single physical location in the secondary region (the region pair) using LRS (99.99999999999999%)

Geo-zone-redundant storage:
GZRS combines the high availability provided by redundancy across availability zones with protection from regional outages provided by geo-replication.

Data in a GZRS storage account is copied across three Azure availability zones in the primary region (similar to ZRS) and is also replicated to a secondary geographic region, using LRS, for protection from regional disasters
```

[Reference - Azure storage redundancy](https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-redundancy)

### Azure storage tiers
* hot - frequently accessed 
* cool - infrequently accessed
* archive - Accessed more than 180 days