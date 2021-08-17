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

I already have a server with nginx webserver installed on public IP-address 152.67.181.65



