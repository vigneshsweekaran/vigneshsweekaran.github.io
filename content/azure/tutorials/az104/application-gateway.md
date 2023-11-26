## Application Gateway
* Manages web app requests
* Routes traffic to a pool of web servers based on the URL of a request www.AGuideToCloud.com
* The web servers can be Azure virtual machines, Azure virtual machine scale sets, Azure App Service, and even on-premises servers
* It works on OSI layer 7

### Application Gateway Routing
* Path-based routing
* Multiple-site routing

#### Path-based routing
![path](/content/azure/tutorials/images/path-routing.png)

#### Multiple-site routing or Hostname based routing
![hostname](/content/azure/tutorials/images/path-routing.png)

#### Application Gateway Components
* Frontend IP
* Listeners
* Routing rules
* Backend pools
* Web application firewall (optional)
* Health probes
