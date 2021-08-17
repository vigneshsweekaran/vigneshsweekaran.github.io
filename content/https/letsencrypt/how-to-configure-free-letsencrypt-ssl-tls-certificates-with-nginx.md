## How to configure Free Let’s Encrypt SSL/TLS Certificates with NGINX and autorenew certificates

### Reference:
* https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/

### Prerequisites
* Have NGINX or NGINX Plus installed.
* Own or control the registered domain name for the certificate.
* Create a DNS record that associates your domain name and your server’s public IP address.


```
apt-get update
sudo apt-get install certbot
apt-get install python3-certbot-nginx
```

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/html;
    server_name example.com www.example.com;
}
```

```
nginx -t && nginx -s reload
```

```
sudo certbot --nginx -d example.com -d www.example.com
```

Autorenew certificates
```
crontab -e
```

```
0 12 * * * /usr/bin/certbot renew --quiet
```
