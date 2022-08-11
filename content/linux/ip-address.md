# Ip-address

CIDR - Classless Inter-Domain Routing

BaseIp: xx.xx.xx.xx

```
Subnet Mask: /24, /32, /0   
    /8  --> 255.0.0.0       --> 16 Million Ip's
    /16 --> 255.255.0.0     --> 65,536 Ip's
    /24 --> 255.255.255.0   --> 256 Ip's
    /32 --> 255.255.255.255 --> 1 Ip
```

The Internet Assigned Numbers Authority(IANA) established certain blocks of IPv4 addresses for the use of  private(LAN) networks and public (internet) addresses.

Private Ip range:
```
10.0.0.0/8
172.16.0.0/12 --> AWS default vpc cidr block
192.168.0.0/16 --> Home network
```