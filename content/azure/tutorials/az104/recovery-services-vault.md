## Recovery Services Vault

### 

### Notes
* Creating a Recovery Services vault will allow you to back up the VM to a different region and location. You will enable replication to ensure that VM data and settings are continually replicated to the backup location for simple recovery
* Taking backup for virtual machines - The virtual machines must exist within the same region as the Recovery Services vault in order to back them up
* To create a daily backup of VM1
  * A Recovery Services vault - A Recovery Services vault (RSV) is used to store backups of your VMs in a different region
  * A backup policy - A backup policy is used to configure how backups are taken and how often they are kept
* You have already begun implementing a solution by first creating an Azure Recovery Services vault. Which of the following would you do next to implement a backup solution
  * Create a backup policy - Since you have already created a Recovery Services vault, the next logical step is to configure the backup policy for the backup solution
* After the initial backup of VM1, you are instructed to delete the vault and all of the backup data. What should you do?
  * top the backup of VM1 and delete backup data - If you stop the backup of VM1 and choose Delete backup data from the dropdown menu, this will stop future backups and delete the existing backup data
  * Turn off soft delete in the vault security settings - When you stop the backup and delete the backup data, because you have soft delete enabled, the backup data is still kept. Permanently deleting the soft-deleted backup items would remove the backup data indefinitely