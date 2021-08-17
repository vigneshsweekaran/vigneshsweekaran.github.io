## How to add a DNS record in freenom domain

### Prerequisites
* Have a server with public ip address
* Install nginx webserver [How to install nginx webserver ](https://devopspilot.com/content/nginx/tutorials/01-how-to-install-nginx)

### Types of DNS records
* A (Host address)
* AAAA (IPv6 host address)
* ALIAS (Auto resolved alias)
* CNAME (Canonical name for an alias)
* MX (Mail eXchange)
* NS (Name Server)
* PTR (Pointer)
* SOA (Start Of Authority)
* SRV (location of service)
* TXT (Descriptive text)

`A` DNS record type

The A-record is the most basic and the most commonly used DNS record type.

It is used to translate human friendly domain names such as "www.example.com" into IP-addresses such as 23.211.43.53 (machine friendly numbers).

The IP-address should be public.

Lets configure the A DNS record to forward the domain `devopspilot.tk` to public IP-address

I already have a server with nginx webserver installed on public IP-address 34.125.235.56

Lets see the nginx home page in browser using public IP-address 34.125.235.56

![freenom](/content/https/freenom/images/add-record/ipaddress.png)

Now we can go to Freenom website to add the `A` DNS record

Go to website [freenom](https://www.freenom.com/en/index.html?lang=en)

Sign in using Google

Click on `Services` --> `My Domains`

![freenom](/content/https/freenom/images/add-record/mydomains.png)

Click on `Manage Domains`

![freenom](/content/https/freenom/images/add-record/mydomains-list.png)

Click on `Manage Freenom DNS`

![freenom](/content/https/freenom/images/add-record/manage-domains.png)

Type `www` in `Name` feild --> which will point to root domain `devopspilot.tk`

Type your public IP-address `34.125.235.56` in `Tartget` feild

Click on `Save Changes`

![freenom](/content/https/freenom/images/add-record/add-record.png)

DNS record added successfully.

![freenom](/content/https/freenom/images/add-record/added-record.png)

Wait for 5 minutes to take effect.

Now we can access the nginx webserver homepage using domain `devopspilot.tk` in browser 

![freenom](/content/https/freenom/images/add-record/domain.png)

Hurray! finally we accessed the nginx webserver homepage using domain name.
